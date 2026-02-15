#!/usr/bin/env bash
set -euo pipefail

FILE="${1:-/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/seo/redirects_301_archipro.csv}"

if [[ ! -f "$FILE" ]]; then
  echo "ERROR: File not found: $FILE" >&2
  exit 1
fi

header=$(head -n 1 "$FILE")
if [[ "$header" != "source_path,target_path,status_code,reason" ]]; then
  echo "ERROR: Invalid CSV header in $FILE" >&2
  exit 1
fi

errors=0

# Validate path formatting and status code.
while IFS=, read -r source target code _; do
  [[ "$source" == "source_path" ]] && continue

  if [[ ! "$source" =~ ^/ ]]; then
    echo "ERROR: source_path must start with '/': $source" >&2
    errors=1
  fi

  if [[ ! "$target" =~ ^/ ]]; then
    echo "ERROR: target_path must start with '/': $target" >&2
    errors=1
  fi

  if [[ "$code" != "301" ]]; then
    echo "ERROR: status_code must be 301: $source -> $target ($code)" >&2
    errors=1
  fi
done < "$FILE"

# Check duplicate source paths.
dups=$(tail -n +2 "$FILE" | cut -d, -f1 | sort | uniq -d || true)
if [[ -n "$dups" ]]; then
  echo "ERROR: duplicate source_path values found:" >&2
  echo "$dups" >&2
  errors=1
fi

if [[ "$errors" -ne 0 ]]; then
  exit 1
fi

echo "OK: Redirect map validation passed ($FILE)"
