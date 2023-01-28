import { useScroll, motion, useTime, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Section10.module.css";
import { useAnimationContext } from "../context/AnimationContext";
import clx from "classnames";

export const Section10 = () => {

  const { 
    scrollRef, 
    vh
  } = useAnimationContext();

  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef });

  //container
  const containerTranslateY = useTransform(scrollY,
    [7*vh,8*vh],
    [-vh,0]  
  )

  //Telefono
  const phoneTranslateY = useTransform(scrollY,[7*vh,8*vh],["100%","0%"])

  //Text
  const textTranslateX = useTransform(scrollY,[7*vh,8*vh],["-60vh","0vh"]);

  return (
    <section> 
      <motion.div 
        className={clx(styles.container,"slide section10")}
        style = {{
          translateY: containerTranslateY
        }}
      >
        <div className="container">
          <div className={styles.content}>
            <motion.div 
              className={styles.textContent}
              style = {{
                translateX: textTranslateX
              }}
            >
              <h2>{strings.title}</h2>
              <h3>{strings.subttitle}</h3>
              <p>
                {strings.description} <br></br>
                {strings.description2}
              </p>
              <div className={styles.tag}>
                <Image
                  src="/assets/img/section10/google-play.png"
                  alt="google store tag"
                  width={217}
                  height={64}
                />
                <Image
                  src="/assets/img/section10/app-store.png"
                  alt="app store tag"
                  width={217}
                  height={64}
                />
              </div>
            </motion.div>
            <motion.div 
              className={styles.phoneContent}
              style = {{
                translateY: phoneTranslateY
              }}
            >
              <Image
                src="/section_4/smartphone.png"
                alt="ven app smartphone"
                width={694}
                height={1330}
                style={{ objectFit: "contain", maxWidth: "80%" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const strings = {
  title: "!Empieza ya!",
  subttitle: "Seamos parte de la evolucion digital de Venezuela",
  description: "Dale un vistazo y descubre todo lo",
  description2: "que puedes hacer con VenApp",
};
