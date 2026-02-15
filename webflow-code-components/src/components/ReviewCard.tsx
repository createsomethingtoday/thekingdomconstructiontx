import * as css from "./ReviewCard.module.css";

const styles = css as unknown as Record<string, string>;

export type ReviewCardProps = {
  quote: string;
  customerName: string;
  cityState: string;
  projectType: string;
  rating: number;
  showProjectTag: boolean;
};

function clampRating(value: number): number {
  if (Number.isNaN(value)) {
    return 5;
  }
  return Math.max(1, Math.min(5, Math.round(value)));
}

export default function ReviewCard({
  quote,
  customerName,
  cityState,
  projectType,
  rating,
  showProjectTag,
}: ReviewCardProps) {
  const safeRating = clampRating(rating);
  const stars = `${"★".repeat(safeRating)}${"☆".repeat(5 - safeRating)}`;

  return (
    <article className={styles.card}>
      <p className={styles.quote}>{quote}</p>

      <div className={styles.meta}>
        <p className={styles.customer}>{customerName}</p>
        <p className={styles.location}>{cityState}</p>
        {showProjectTag ? <p className={styles.project}>{projectType}</p> : null}
      </div>

      <p className={styles.rating} aria-label={`Rating ${safeRating} out of 5`}>
        <span className={styles.ratingStars} aria-hidden="true">
          {stars}
        </span>
        <span className={styles.ratingText}>{safeRating}/5</span>
      </p>
    </article>
  );
}
