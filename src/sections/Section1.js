import React from "react";
import Header from "../components/Header";
import styles from "../../styles/Section1.module.css";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import clx from 'classnames';
import { useAnimationContext } from "../context/AnimationContext";
import { BREAKPOINTS, mapDesireWidth, usePhoneContext } from "../components/PhoneFrame";
import useBreakpoints from "use-breakpoint";

const containerVariants = {
  initial: {
    width: "100%",
    height: "100vh",
    translateX: 0,
    translateY: 0
  },
  animate: {
    width: 300,
    translateX: 240,
    height: "80vh",
    translateY: 200
  }
}

const textVariants = {
  initial: {
    top: 320,
    width: 282,
    right: 0
  },
  animate: {
    top: 70,
    width: 208,
    right: 15
  }
}

const textVariants2 = {
  initial: {
    width: 328
  },
  animate: {
    width: 150
  }
}

const textVariantsVenApp = {
  initial: {
    top: 100
  },
  animate: {
    top: 45
  }
}

export const Section1 = () => {

  const { isAnimate,toPxHeight, toPxWidth, vh, vw, sizeFactorWidth: sw, sizeFactor: s , ref1, currentSection } = useAnimationContext();
  const { scrollY } = useScroll();
  const { breakpoint : bp } = useBreakpoints(BREAKPOINTS);
  const { finalHeightSection1 } = usePhoneContext();
  console.log({finalHeightSection1, b: toPxHeight(finalHeightSection1)})
  //Container
  const containerTranslateY = useTransform(scrollY,
    [0,vh,vh,vh*2],
    [0, vh + 50, vh + 50, vh*2+50]
  );

  const containerWidth      = useTransform(scrollY,[0,vh],[vw, mapDesireWidth[bp] - 15 - 10]);
  
  const containerTranslateX = useTransform(scrollY,
    [0, vh, vh, vh*2],
    [0, toPxWidth(20) + 10, toPxWidth(20) + 10, toPxWidth(40) + 10]
  );

  const containerOpacity = useTransform(scrollY,[vh,2*vh],[1,0]);

  const containerHeight     = useTransform(scrollY,[0,vh],[vh, finalHeightSection1 - 25]);
  //Header
  const headerTranslateY    = useTransform(scrollY,[0,vh * 0.10],["0%","-100%"])
  //ContentContainer
  const contentContainerPadding = useTransform(scrollY,[0,vh],["20px",0]);
  //Content
  const contentTop          = useTransform(scrollY,[0,vh],[0,-105]);
  //PeopleImage
  const peopleImageTop      = useTransform(scrollY,[0,vh],[0,vh]);
  const peopleImageHeight   = useTransform(scrollY,[0,vh],[576,340]);
  //La nueva
  const textLaNuevaTop      = useTransform(scrollY,[0,vh],[0,-200]);
  const textLaNuevaScale    = useTransform(scrollY,[0,vh],[1,0.5]);
  //Ven App
  const textVenAppTop       = useTransform(scrollY,[0,vh],[100,-140]);
  const textVenAppScale     = useTransform(scrollY,[0,vh],[1,0.8]);
  //2.0
  const text2Top            = useTransform(scrollY,[0,vh],[320,-125]);
  const text2Scale          = useTransform(scrollY,[0,vh],[1, 0.8]);

  return (
    <section className={clx(styles.root)} id="section1" ref = {ref1}>
      <motion.div 
        className={clx(styles.container,"slide section1")}
        animate={isAnimate ? "animate" : "initial"}
        variants={containerVariants}
        style = {{ 
          translateY: containerTranslateY,
          translateX: containerTranslateX,
          width: containerWidth,
          height: containerHeight,
          opacity: containerOpacity
        }}
      >
        <motion.div
          style = {{
            translateY: headerTranslateY
          }}
        >
          <Header />
        </motion.div>
        <motion.div 
          className={clx("container",styles['content-container'])}
          style = {{
            paddingLeft: contentContainerPadding,
            paddingRight: contentContainerPadding
          }}
        >
          <motion.div 
            className= {styles.content}
            style    = {{
              top: contentTop
            }}
          >
            <motion.img
              className={styles.imgNueva}
              src="/assets/img/section1/la-nueva.png"
              alt=""
              variants={textVariants2}
              animate={isAnimate ? "animate" : "initial"}
              style= {{
                top: textLaNuevaTop,
                scale: textLaNuevaScale
              }}
            />
            <motion.img
              className={styles.imgVenapp}
              src="/assets/img/section1/venapp-landing-blanco.png"
              alt=""
              variants={textVariantsVenApp}
              animate={isAnimate ? "animate" : "initial"}
              style = {{
                top: textVenAppTop,
                scale: textVenAppScale
              }}
            />
            <motion.img
              className={styles.imgVenappTrazo}
              src="/assets/img/section1/venapp-landingtrazo.png"
              alt=""
              variants={textVariantsVenApp}
              animate={isAnimate ? "animate" : "initial"}
              style = {{
                top: textVenAppTop,
                scale: textVenAppScale
              }}
            />
            <motion.img
              className={styles.img2}
              variants={textVariants}
              animate={isAnimate ? "animate" : "initial"}
              src="/assets/img/section1/2.png"
              alt=""
              style={{
                top: text2Top,
                scale: text2Scale
              }}
            />
            <motion.div 
              style = {{
                height: peopleImageHeight
              }}
              className={styles.imageGroupWrapper}
            >
              <Image
                src="/assets/img/section1/group.png"
                fill
                style={{ objectFit: "cover", bottom: 0, objectPosition: "top" }}
                alt=""
                quality={75}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
