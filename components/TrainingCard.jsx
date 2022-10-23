// npm
import Image from "next/image";

// files
import styles from "../styles/components/Posts.module.scss";

export default function TrainingCard({ post }) {
  // properties
  const { coverImage, title } = post;

  return (
    <div className={styles.card}>
      <div className={styles.card__tertiary}>
        <div className={styles.tertiary__image}>
          <Image
            src={coverImage.url}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className={styles.tertiary__title}>{title}</h2>
        <div className={styles.corner} />
      </div>
    </div>
  );
}
