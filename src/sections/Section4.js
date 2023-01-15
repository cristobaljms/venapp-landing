import React from "react";
import styles from "../../styles/Section4.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export const Section4 = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div id="section4" className={styles.root}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.venChantBtn}>
            <b>VenChat</b>
          </span>
          <div className={styles.textWrapper}>
            <div className={styles.text1}>
              <h2>Compra más y más barato</h2>
            </div>
            <div className={styles.text2}>
              <p>
                En VenMarket encuentras los productos y servicios más buscados
                con los mejores precios del mercado. Puedes comprar de manera
                rápida y segura desde donde estés sin comisiones.
              </p>
              <p>Si quieres que tu negocio esté en VenMarket, contáctanos. </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <div className={`${styles.card} ${styles.card1}`}>
          <img src="/assets/img/section4/image1.png" alt="" />
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <img src="/assets/img/section4/image2.png" alt="" />
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <img src="/assets/img/section4/image3.png" alt="" />
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <img src="/assets/img/section4/image4.png" alt="" />
        </div>
        <div className={styles.phone}>
          <img
            style={{ objectFit: "contain" }}
            src="/assets/img/section4/phone.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
