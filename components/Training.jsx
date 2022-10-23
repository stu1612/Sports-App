// files
import styles from "../styles/components/Posts.module.scss";
import SecondaryCard from "../components/SecondaryCard";
import TrainingCard from "./TrainingCard";

export default function Training({ training }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__teams}>
        {training.map((post) => (
          <TrainingCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
