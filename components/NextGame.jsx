// npm
import Image from "next/image";

// files
import styles from "../styles/components/NextGame.module.scss";
import t4qLogo from "../public/logo.png";
import superLogo from "../public/superettan.png";
import player from "../public/player_2_new.png";

export default function NextGame() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className="image">
          <Image src={t4qLogo} alt="t4q logo" width="100" height="100" />
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.details__top}>
              <p className={styles.title}>Match</p>
            </div>
            <div className={styles.details__bottom}>
              <p className={styles.title}>Day</p>
              <Image src={superLogo} alt="superettan" width="60" height="60" />
            </div>
          </div>
          <div className={styles.vs}>
            <h2>VS AIK</h2>
          </div>
          <div className={styles.times}>
            <h3>GA - Hallens, Hbg</h3>
            <h3>KO: 20:15 23/11/22</h3>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={player} alt="plyer" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
