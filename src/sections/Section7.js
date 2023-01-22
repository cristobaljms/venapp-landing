import styles from "../../styles/Section7.module.css";
import Image from "next/image";
import clx from "classnames";
import { useScroll, motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../context/AnimationContext";

export const Section7 = () => {

  const { 
    scrollRef, 
    vh
  } = useAnimationContext();

  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef });

  //container
  const containerTranslateY = useTransform(scrollY,
    [5*vh,6*vh],
    [0, 2 * vh]  
  )

  const containerOpacity = useTransform(scrollY,
    [6*vh,6*vh+1],
    [1,0] 
  )

  return (
    <section> 
      <motion.div 
        style = {{
          translateY: containerTranslateY,
          opacity: containerOpacity
        }}
        className={clx(styles["outer-container"],"slide section6")}
      >
        <Image
          src="/section_1/background.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.container}>
          <div className={styles.content}>
            <h2> {strings.title} </h2>
            <p> {strings.description} </p>
          </div>
          <div className={styles["phone-container"]}>
            <div className={styles.phone}>
              <Image
                src="/section_1/phone.png"
                alt="phone"
                width={655}
                height={1259}
                style={{ objectFit: "contain", maxHeight: "100%" }}
              />
              <div className={styles.overlay}></div>
              <div className={styles["overlay-text"]}>{strings.number}</div> 
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const strings = {
  number: "12758K",
  title: "Conecta Comparte y expande tu mundo",
  description:
    "Podras compartir contenido, eventos, imagenes, videos y mucho mas.",
};
