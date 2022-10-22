// npm
import Image from "next/image";

// files
import styles from "../styles/components/NextGame.module.scss";
import t4qLogo from "../public/logo.png";
import player from "../public/player_2_new.png";

export default function NextGame({ upcomingData }) {
  const { superettanLogo, opponent, location, dateAndTime } = upcomingData;
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <div>
          <Image
            src={t4qLogo}
            alt="t4q logo"
            width="80"
            height="80"
            className={styles.t4qLogo}
          />
        </div>
        <div>
          <div className={styles.content}>
            <div className={styles.content__top}>
              <p className={styles.title}>Match</p>
            </div>
            <div className={styles.content__bottom}>
              <p className={styles.title}>Day</p>
              <Image
                src={superettanLogo.url}
                alt="superettan"
                width="60"
                height="60"
              />
            </div>
          </div>
          <div className={styles.vs}>
            <h2>VS {opponent}</h2>
          </div>
          <div className={styles.times}>
            <h3>{location}</h3>
            <h3>{dateAndTime}</h3>
          </div>
        </div>
      </div>
      <div className={styles.container__right}>
        <Image src={player} alt="plyer" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
