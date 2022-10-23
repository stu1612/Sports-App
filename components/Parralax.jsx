// files
import styles from "../styles/components/Banners.module.scss";

export default function Parralax({ parralaxData }) {
  const { thinText, thickText } = parralaxData;
  return (
    <section className={styles.parralax}>
      <div className={styles.parralax__inner}>
        <h2 className={styles.thin}>{thinText}</h2>
        <h2 className={styles.thick}>{thickText}</h2>
      </div>
    </section>
  );
}
