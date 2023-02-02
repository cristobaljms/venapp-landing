import styles from "../../styles/Section7.module.css";
import Image from "next/image";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef, useState, useEffect } from "react";

export const Section7 = () => {
  const imgref = useRef();
  const text2ref = useRef();
  const [likes, setLikes] = useState(1);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#section7",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#section7",
          toggleActions: "restart none restart none",
        },
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
      }
    );

    gsap.fromTo(
      text2ref.current,
      { opacity: 0, x: -100 },
      {
        scrollTrigger: {
          trigger: "#section7",
          toggleActions: "restart none restart none",
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "circle",
      }
    );
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log(likes);
      if (likes >= 600) {
        setLikes(1);
      } else {
        setLikes((likes) => {return (likes + 6)});
      }
    }, 80);
  }, []);

  return (
    <div id="section7" className={styles["outer-container"]}>
      <Image
        src="/section_1/background.png"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.container}>
        <div ref={text2ref} className={styles.content}>
          <h2> {strings.title} </h2>
          <p> {strings.description} </p>
        </div>
        <div className={styles["phone-container"]}>
          <div ref={imgref} className={styles.phone}>
            <Image
              src="/section_1/phone.png"
              alt="phone"
              width={655}
              height={1259}
              style={{ objectFit: "contain", maxHeight: "100%" }}
            />
            <div className={styles.overlay}>
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "500ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "2800ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "14ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "340ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "824ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "280ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "1350ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "527ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "3100ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "1720ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "2780ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "1750ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "980ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "1250ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "5100ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "2280ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "3250ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "1500ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "1400ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "450ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "220ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "680ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "1450ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "2270ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "1890ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "1170ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "3900ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "1150ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "3900ms" }}
              />
              <img
                src="/section_1/love.png"
                alt=""
                className={styles.animatedIcon2}
                style={{ animationDelay: "3450ms" }}
              />
              <img
                src="/section_1/like.png"
                alt=""
                className={styles.animatedIcon1}
                style={{ animationDelay: "2150ms" }}
              />
            </div>
            <div className={styles["overlay-text"]}>{`${likes}K`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const strings = {
  number: "12758K",
  title: "Conecta Comparte y expande tu mundo",
  description:
    "Podras compartir contenido, eventos, imagenes, videos y mucho mas.",
};
