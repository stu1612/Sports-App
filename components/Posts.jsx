// files
import styles from "../styles/components/Posts.module.scss";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";

export default function Posts({ primaryPosts, secondaryPosts }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        {primaryPosts &&
          primaryPosts.map((post) => (
            <PrimaryCard key={post.title} post={post} />
          ))}
      </div>
      <div className={styles.container__bottom}>
        {secondaryPosts &&
          secondaryPosts.map((post) => (
            <SecondaryCard key={post.title} post={post} />
          ))}
      </div>
    </div>
  );
}
