import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import Header from "../components/Header";
import styles from "../../styles/Section1.module.css";
import { gsap } from "gsap-trial";

export const Section1 = () => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    // gsap.set(el.current, { x: -10 });
    // gsap.to(el.current, {
    //   x: 0,
    //   opacity: 1,
    //   duration: 1,
    //   delay: 0.5,
    //   ease: "power4.out",
    // });
  }, []);

  return (
    <div className={styles.root} id="section1">
      <div>
        <Header />
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
          <img
            className={styles.imgGroup}
            src="/assets/img/section1/group.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
