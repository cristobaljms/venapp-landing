import React from "react";
import styles from "../../styles/Section5.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export const Section5 = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div id="section5" className={styles.root}>
      <div className={styles.image}>
        <img
          className={styles.comicImg}
          src="/assets/img/section5/comics.png"
          alt=""
        />
        <img src="/assets/img/section5/phone.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <div className={styles.venChantBtn}>
              <b>VenComics</b>
            </div>
            <h2 className={styles.text1}>Todos tus comics</h2>
            <p className={styles.text2}>
              La plataforma con el más amplio catálogo de cómics disponible para
              ti. Al suscribirte podrás encontrar tus historietas preferidas y
              acceder a ellas desde donde estés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
