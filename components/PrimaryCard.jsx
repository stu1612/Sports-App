// npm
import Image from "next/image";

// files
import styles from "../styles/components/Posts.module.scss";

export default function PrimaryCard({ post }) {
  const { title, excerpt, featuredImage, date, author } = post;
  return (
    <div className={styles.card}>
      <div className={styles.card__primary}>
        <div className={styles.cardImage}>
          <Image
            src={featuredImage.url}
            alt={excerpt}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.cardContent}>
          <div>
            <div className={styles.stroke} />
            <h1 className={styles.heading}>{title}</h1>
            <p className={styles.text}>{excerpt}</p>
          </div>
          <div className={styles.author}>
            <Image
              src={author.coverImage.url}
              alt="t4q logo"
              height={20}
              width={20}
              objectFit="cover"
            />
            <p className={styles.light}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
