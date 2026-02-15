import * as css from "./AnswerBlock.module.css";

const styles = css as unknown as Record<string, string>;

export type AnswerBlockProps = {
  question: string;
  answer: string;
  tone: string;
  showMark: boolean;
};

export default function AnswerBlock({ question, answer, tone, showMark }: AnswerBlockProps) {
  return (
    <article className={[styles.block, tone === "Brand" ? styles.brand : styles.light].join(" ")}>
      <header className={styles.header}>
        {showMark ? <span className={styles.mark} aria-hidden="true">Q</span> : null}
        <h3 className={styles.question}>{question}</h3>
      </header>
      <p className={styles.answer}>{answer}</p>
    </article>
  );
}
