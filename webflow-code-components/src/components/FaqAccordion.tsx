import { useId, useState } from "react";
import * as css from "./FaqAccordion.module.css";

const styles = css as unknown as Record<string, string>;

export type FaqAccordionProps = {
  question: string;
  answer: string;
  initiallyOpen: boolean;
};

export default function FaqAccordion({ question, answer, initiallyOpen }: FaqAccordionProps) {
  const [open, setOpen] = useState(initiallyOpen);
  const answerId = useId();

  return (
    <section className={styles.wrapper}>
      <button
        type="button"
        className={styles.trigger}
        id={`${answerId}-toggle`}
        aria-controls={answerId}
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={[styles.chevron, open ? styles.open : ""].join(" ")} aria-hidden="true">
          +
        </span>
      </button>

      <div
        id={answerId}
        className={[styles.answer, open ? styles.answerOpen : ""].join(" ")}
        aria-labelledby={`${answerId}-toggle`}
        role="region"
        aria-hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </section>
  );
}
