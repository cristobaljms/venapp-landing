import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../styles/Section6.module.css";
import { useAnimationContext } from "../context/AnimationContext";
import clx from "classnames";

export const Section6 = () => {

  const { 
    scrollRef, 
    vh
  } = useAnimationContext();

  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef });

  //container
  const containerTranslateY = useTransform(scrollY,
    [5*vh,6*vh,6*vh,7*vh],
    [-2 * vh, 0, 0, vh]  
  )

  const containerOpacity = useTransform(scrollY,
    [6*vh,7*vh],
    [1,0] 
  )

  return (
    <section>
      <motion.div 
        style = {{
          translateY: containerTranslateY,
          opacity: containerOpacity
        }}
        className={clx(styles.container,"slide section7")}
      >
        <div className={styles.background}></div>
        <div className={styles.content}>
          <div className={styles.badge}>
            {strings.ven}<span>U</span>
          </div>
          <h2>{strings.title}</h2>
          <p>{strings.descriptions}</p>
        </div>
      </motion.div>
    </section>

  );
};

const strings = {
  title: "Cursos, cursos y mas cursos",
  ven: "Ven",
  descriptions:
    "Encuentra un amplio abanico de contenido educativo para que sigas preparandote y aprendiendo sobre los temas que mas te interesan. Accede a los mejores cursos online totalmente gratis y en tu propio tiempo.",
};
