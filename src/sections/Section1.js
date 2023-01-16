import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import Header from "../components/Header";
import styles from "../../styles/Section1.module.css";
import Image from "next/image";

export const Section1 = () => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {}, []);

  return (
    <div className={styles.root} id="section1">
      <div>
        <Header />
        <div className="container">
          <div className={styles.content}>
            <img
              className={styles.imgNueva}
              src="/assets/img/section1/la-nueva.png"
              alt=""
            />
            <img
              className={styles.imgVenapp}
              src="/assets/img/section1/venapp-landing-blanco.png"
              alt=""
            />
            <img
              className={styles.imgVenappTrazo}
              src="/assets/img/section1/venapp-landingtrazo.png"
              alt=""
            />
            <img
              className={styles.img2}
              src="/assets/img/section1/2.png"
              alt=""
            />
            <div className={styles.imageGroupWrapper}>
              <Image
                src="/assets/img/section1/group.png"
                fill
                style={{ objectFit: "contain", bottom: 0 }}
                alt=""
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
