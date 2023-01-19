import styles from "../../styles/Section6.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef } from "react";

export const Section6 = () => {
  const textref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          start: "top center",
          end: "center center",
          scrub: true,
        },
      })
      .to("#section6", {
        opacity: 1,
      })
      .to(textref.current, {
        opacity: 1,
        x: 0,
      })      
  }, []);

  return (
    <div  id="section6" className={styles.container}>
      <div className={styles.background}></div>
      <div ref={textref} className={styles.content}>
        <div className={styles.badge}>
          {strings.ven}<span>U</span>
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
