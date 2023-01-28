import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../styles/Section8.module.css";
import { useAnimationContext } from "../context/AnimationContext";
import clx from "classnames";

export const Section8 = () => {

  const { 
    scrollRef, 
    vh
  } = useAnimationContext();

  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef });

  //container
  const containerTranslateY = useTransform(scrollY,
    [6*vh,7*vh,7*vh,8*vh],
    [-vh, 0, 0, vh] 
  )

  const containerOpacity = useTransform(scrollY,
    [7*vh,8*vh],
    [1,0]
  );

  //Videos tutoriales
  const videoTranslateX1 = useTransform(scrollY,[7*vh,8*vh],["0%","-100%"]);
  const videoTranslateY2 = useTransform(scrollY,[7*vh,8*vh],["0%","-100%"]);
  const videoTranslateX3 = useTransform(scrollY,[7*vh,8*vh],["0%","100%"],);
  

  //Text
  const textTranslateY = useTransform(scrollY,[7*vh,8*vh],["0%","100%"],);

  return (
    <section>
      <motion.div 
        className={clx(styles.root,"slide section8")}
        style = {{
          translateY: containerTranslateY,
          opacity: containerOpacity
        }}
      >
        <div className={clx("container",styles.rootContainer)}>
          <div className={styles["inner-container"]}>
            <div>
              <div className={styles["videos-container"]}>
                <motion.div
                  style = {{
                    translateX: videoTranslateX1
                  }}
                >
                  <div className={styles.square}></div>
                  <p>{videos[0].text}</p>
                </motion.div>
                <motion.div
                  style = {{
                    translateY: videoTranslateY2
                  }}
                >
                  <div className={styles.square}></div>
                  <p>{videos[1].text}</p>
                </motion.div>
                <motion.div
                  style = {{
                    translateX: videoTranslateX3
                  }}
                >
                  <div className={styles.square}></div>
                  <p>{videos[2].text}</p>
                </motion.div>
              </div>
              <motion.div 
                className={styles.content}
                style = {{
                  translateY: textTranslateY
                }}
              >
                <h2 className={styles.text1}>{strings.title}</h2>
                <p className={styles.text2}>{strings.description}</p>
                <button className={styles.button}>{strings.watchAllTutorials}</button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const strings = {
  title: "Video Tutoriales",
  watchAllTutorials: "Ver todos los tutoriales",
  description:
    "Conoce todo lo que puedes hacer con tu VenApp y sacale provecho.",
};

const videos = [
  {
    text: "Lorem ipsum dolor sit amet",
    image: "/section_3/smartphone.png",
  },
  {
    text: "Lorem ipsum dolor sit amet",
    image: "/section_3/smartphone.png",
  },
  {
    text: "Lorem ipsum dolor sit amet",
    image: "/section_3/smartphone.png",
  },
];
