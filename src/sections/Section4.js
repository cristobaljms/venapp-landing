import React, { useRef } from "react";
import styles from "../../styles/Section4.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Image from "next/image";

export const Section4 = () => {
  const phoneRef = React.useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const trigger = {
      trigger: "#section4",
      toggleActions: "restart none restart none",
    };

    gsap.fromTo(
      "#section4",
      { opacity: 0 },
      {
        scrollTrigger: trigger,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
      }
    );

    const fadeParams = {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "circle",
    };

    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 150 },
      {
        scrollTrigger: trigger,
        ...fadeParams,
        delay: 1,
      }
    );

    gsap.fromTo(
      card1Ref.current,
      { opacity: 0, y: 150 },
      {
        scrollTrigger: trigger,
        ...fadeParams,
        delay: 0.1,
      }
    );

    gsap.fromTo(
      card2Ref.current,
      { opacity: 0, y: 150 },
      {
        scrollTrigger: trigger,
        ...fadeParams,
        delay: 0.6,
      }
    );

    gsap.fromTo(
      card3Ref.current,
      { opacity: 0, y: 150 },
      {
        scrollTrigger: trigger,
        ...fadeParams,
        delay: 0.6,
      }
    );

    gsap.fromTo(
      card4Ref.current,
      { opacity: 0, y: 150 },
      {
        scrollTrigger: trigger,
        ...fadeParams,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <div id="section4" className={styles.root}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.venChantBtn}>
            <b>VenChat</b>
          </span>
          <div id="text1Wrapper" className={styles.textWrapper}>
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
        <div ref={card1Ref} className={`${styles.card} ${styles.card1}`}>
          <Image
            src="/assets/img/section4/image1.png"
            alt=""
            width={359}
            height={269}
            style={{ objectFit: "contain", maxHeight: "100%" }}
            quality={60}
          />
        </div>
        <div ref={card2Ref} className={`${styles.card} ${styles.card2}`}>
          <Image
            src="/assets/img/section4/image2.png"
            alt=""
            width={514}
            height={340}
            style={{ objectFit: "contain", maxHeight: "100%" }}
            quality={60}
          />
        </div>
        <div ref={card3Ref} className={`${styles.card} ${styles.card3}`}>
          <Image
            src="/assets/img/section4/image3.png"
            alt=""
            width={537}
            height={536}
            style={{ objectFit: "contain", maxHeight: "100%" }}
            quality={60}
          />
        </div>
        <div ref={card4Ref} className={`${styles.card} ${styles.card4}`}>
          <Image
            src="/assets/img/section4/image4.png"
            alt=""
            width={382}
            height={384}
            style={{ objectFit: "contain", maxHeight: "100%" }}
            quality={60}
          />
        </div>
        <div ref={phoneRef} className={styles.phone}>
          <Image
            src="/assets/img/section4/phone.png"
            alt=""
            width={715}
            height={648}
            style={{ objectFit: "contain", maxHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
