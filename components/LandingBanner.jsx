// npm
import Image from "next/image";

// files
import styles from "../styles/components/Landing.module.scss";
import ImageLoader from "../utils/ImageLoader";
import img from "../public/landing_player.png";
import Playbutton from "./Playbutton";

export default function Landing({ data }) {
  // properties
  const { title, featuredImage } = data;
  return (
    <div className={styles.container}>
      <div className={styles.image__wrapper}>
        <Image
          src={featuredImage.url}
          alt={title}
          loader={ImageLoader}
          objectFit="cover"
          layout="fill"
        />
        <div className={styles.container__left}></div>
      </div>
      <div className={styles.heading}>
        <Playbutton />
        <span>
          <h1 className={styles.title}>{title}</h1>
        </span>
      </div>
      <div className={styles.wrapper}>
        <Image
          src={img}
          alt="basketball player"
          objectFit="contain"
          height={500}
          width={500}
          className={styles.image}
        />
      </div>
    </div>
  );
}
