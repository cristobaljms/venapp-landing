import React, { useRef } from "react";
import styles from "../../styles/Section5.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Image from "next/image";

export const Section5 = () => {
  const image1ref = useRef();
  const image2ref = useRef();
  const textContentRef = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      image1ref.current,
      { opacity: 0, x: -150 },
      {
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top center",
          end: "center center",
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
      }
    );
    gsap.fromTo(
      image2ref.current,
      { opacity: 0, x: -150, rotate: 180 },
      {
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top center",
          end: "center center",
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.7,
        rotate: 0
      }
    );
  }, []);

  return (
    <div id="section5" className={styles.root}>
      <div className={styles.image}>
        <div ref={image2ref} className={styles.comicImg}>
          <Image
            src="/assets/img/section5/comics.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <Image
          ref={image1ref}
          src="/assets/img/section5/phone.png"
          alt=""
          width={960}
          height={706}
          style={{ objectFit: "contain", maxWidth: "100%" }}
        />
      </div>
      <div className="container">
        <div ref={textContentRef} className={styles.content}>
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
