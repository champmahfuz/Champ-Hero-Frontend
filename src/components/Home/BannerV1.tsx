import Image from "next/image";
import styles from "./Banner.module.css";
import Hero from "public/hero.png";
import { Button } from "antd";
// import { Button } from 'antd';
// import Button from "@/components/Button/Button";

export default function BannerV1() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <button>See Our Works</button>
          {/* <Button url="/portfolio" text="See Our Works" /> */}
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
