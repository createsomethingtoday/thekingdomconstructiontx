#!/usr/bin/env bash
set -euo pipefail

max_attempts=5
backoff_seconds=30
attempt=1

while [ "$attempt" -le "$max_attempts" ]; do
  echo "Share attempt ${attempt}/${max_attempts}..."

  # Keep output for rate-limit detection while still showing it live.
  log_file="$(mktemp -t webflow-share.XXXXXX.log)"
  if npx webflow library share --no-input "$@" 2>&1 | tee "$log_file"; then
    rm -f "$log_file"
    echo "Share completed successfully."
    exit 0
  fi

  if grep -q "Too Many Requests" "$log_file"; then
    rm -f "$log_file"

    if [ "$attempt" -eq "$max_attempts" ]; then
      echo "Share failed after ${max_attempts} attempts due to rate limiting."
      exit 1
    fi

    echo "Rate limited by Webflow API. Waiting ${backoff_seconds}s before retry..."
    sleep "$backoff_seconds"
    backoff_seconds=$((backoff_seconds * 2))
    attempt=$((attempt + 1))
    continue
  fi

  echo "Share failed due to a non-rate-limit error."
  rm -f "$log_file"
  exit 1
done
