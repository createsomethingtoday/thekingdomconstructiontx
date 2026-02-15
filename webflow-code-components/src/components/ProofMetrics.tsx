import * as css from "./ProofMetrics.module.css";

const styles = css as unknown as Record<string, string>;

export type ProofMetricsProps = {
  metric1Value: string;
  metric1Label: string;
  metric2Value: string;
  metric2Label: string;
  metric3Value: string;
  metric3Label: string;
  tone: string;
};

function isMetricVisible(value: string, label: string): boolean {
  return Boolean(value.trim() || label.trim());
}

export default function ProofMetrics({
  metric1Value,
  metric1Label,
  metric2Value,
  metric2Label,
  metric3Value,
  metric3Label,
  tone,
}: ProofMetricsProps) {
  const items = [
    { value: metric1Value, label: metric1Label },
    { value: metric2Value, label: metric2Label },
    { value: metric3Value, label: metric3Label },
  ].filter((item) => isMetricVisible(item.value, item.label));

  return (
    <section className={[styles.metrics, tone === "Brand" ? styles.brand : styles.light].join(" ")}>
      {items.map((item) => (
        <article className={styles.card} key={`${item.value}-${item.label}`}>
          <p className={styles.value}>{item.value}</p>
          <p className={styles.label}>{item.label}</p>
        </article>
      ))}
    </section>
  );
}
