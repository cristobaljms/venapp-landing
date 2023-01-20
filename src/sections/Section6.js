import styles from "../../styles/Section6.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef } from "react";

export const Section6 = () => {
  const text2ref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#section6",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#section6",
          toggleActions: "restart none restart none",
        },
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
      }
    );

    gsap.fromTo(
      text2ref.current,
      { opacity: 0, x: 100 },
      {
        scrollTrigger: {
          trigger: "#section6",
          toggleActions: "restart none restart none",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "circle",
      }
    );
  }, []);

  return (
    <div id="section6" className={styles.container}>
      <div className={styles.background}></div>
      <div ref={text2ref} className={styles.content}>
        <div className={styles.badge}>
          {strings.ven}
          <span>U</span>
        </div>
        <h2>{strings.title}</h2>
        <p>{strings.descriptions}</p>
      </div>
    </div>
  );
};

const strings = {
  title: "Cursos, cursos y mas cursos",
  ven: "Ven",
  descriptions:
    "Encuentra un amplio abanico de contenido educativo para que sigas preparandote y aprendiendo sobre los temas que mas te interesan. Accede a los mejores cursos online totalmente gratis y en tu propio tiempo.",
};
