import * as css from "./ProcessSteps.module.css";
import { parseTitleBodyLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type ProcessStepsProps = {
  steps: string;
  layout: string;
  tone: string;
  showNumbers: boolean;
};

export default function ProcessSteps({ steps, layout, tone, showNumbers }: ProcessStepsProps) {
  const items = parseTitleBodyLines(steps);

  return (
    <ol
      className={[
        styles.steps,
        layout === "List" ? styles.list : styles.grid,
        tone === "Brand" ? styles.brand : styles.light,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, index) => (
        <li className={styles.step} key={`${item.title}-${index}`}>
          {showNumbers ? <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span> : null}
          <div className={styles.content}>
            <p className={styles.title}>{item.title}</p>
            {item.body ? <p className={styles.body}>{item.body}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
