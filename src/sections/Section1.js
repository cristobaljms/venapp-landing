import React from "react";
import Header from "../components/Header";
import styles from "../../styles/Section1.module.css";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import clx from 'classnames';
import { useAnimationContext } from "../context/AnimationContext";
import { BREAKPOINTS, mapDesireWidth, mapPhoneTop, usePhoneContext, mapDesireWidth2, mapDesireWidth3, mapPhoneTop2 } from "../components/PhoneFrame";
import useBreakpoints from "use-breakpoint";

const mapBorderRadius = {
  m: 20,
  l: 20,
  xl: 40
}

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

  const { 
    scrollRef, 
    isAnimate,
    toPxHeight, 
    toPxWidth, 
    vh, 
    vw, 
    ref1, 
  } = useAnimationContext();
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef });
  const { breakpoint : bp } = useBreakpoints(BREAKPOINTS);
  const { section1BackgroundHeight1, section1BackgroundHeight2, finalHeightSection1, finalHeightSection2, phoneDesireWidth3, phoneDesireWidth, phoneFinalTop4, phoneFinalTop, phoneLeftSection3 } = usePhoneContext();
  
  const phoneOffsetY = toPxHeight( phoneFinalTop );
  const phoneOffsetY2 = toPxHeight( parseInt(mapPhoneTop2[bp]) );
  const phoneOffsetY3 = toPxHeight( phoneFinalTop4 );

  //Container
  const containerTranslateY = useTransform(scrollY,
    [0,vh,vh,vh*2,vh*2,vh*3],
    [
      0, vh + phoneOffsetY + 10, 
      vh + phoneOffsetY + 10, vh * 2 + phoneOffsetY2 + 15,
      vh * 2 + phoneOffsetY2 + 15, vh * 3 + phoneOffsetY3 + 15
    ]
  );

  const containerBorderRadius = useTransform(scrollY,
    [0,vh],
    [0 , mapBorderRadius[bp]] 
  )

  const containerWidth      = useTransform(scrollY,
    [0,vh, vh, vh * 2],
    [
      vw, phoneDesireWidth - 15 - 0,
      phoneDesireWidth - 15 - 0, mapDesireWidth2[bp] - 15 - 10
    ]
  );
  
  const containerTranslateX = useTransform(scrollY,
    [0, vh, vh, vh*2, vh*2, vh*3],
    [
      0, toPxWidth(20) + 10, 
      toPxWidth(20) + 10, toPxWidth( phoneLeftSection3 ) + 10,
      toPxWidth( phoneLeftSection3 ) + 10, toPxWidth( 32 ) + 10
    ]

  );

  const containerOpacity = useTransform(scrollY,[vh,2*vh],[1,0]);

  const containerHeight     = useTransform(scrollY,
    [0,vh, vh, vh * 2],
    [
      vh, finalHeightSection1 - 20,
      finalHeightSection1 - 20, finalHeightSection2 - 20
    ]
  );
  //Section 2
  const section2Opacity = useTransform(scrollY,
    [2*vh, 3*vh],
    [1,0]
  )
  //Header
  const headerTranslateY    = useTransform(scrollY,[0,vh * 0.10],["0%","-100%"])
  //ContentContainer
  const contentContainerPadding = useTransform(scrollY,[0,vh],["20px",0]);
  //Content
  const contentTop          = useTransform(scrollY,[0,vh],[0,-105]);
  //PeopleImage
  const peopleImageHeight   = useTransform(scrollY,[0,vh],["100%","38%"]);
  //La nueva
  const textLaNuevaTop      = useTransform(scrollY,[0,vh],[0,-200]);
  const textLaNuevaScale    = useTransform(scrollY,[0,vh],[1,0.5]);
  //Ven App
  const textVenAppTop       = useTransform(scrollY,[0,vh],[100,-140]);
  const textVenAppScale     = useTransform(scrollY,[0,vh],[1,0.8]);
  //2.0
  const text2Top            = useTransform(scrollY,[0,vh],[320,-125]);
  const text2Scale          = useTransform(scrollY,[0,vh],[1, 0.8]);
  
  //Section background
  const sectionBackgroundHeight = useTransform(scrollY,
    [0,vh],
    [section1BackgroundHeight1,section1BackgroundHeight2 - 15] 
  )

  const sectionBackgroundTop = useTransform(scrollY,
    [0,vh],
    ["-10%","0%"] 
  )

  const sectionBackgroundWidth = useTransform(scrollY,
    [0,vh, vh, vh * 2],
    [
      vw + 20, phoneDesireWidth - 15 - 0,
      phoneDesireWidth - 15 - 0, mapDesireWidth2[bp] - 15 - 10,
    ]
  );

  const sectionBackgroundOpacity = useTransform(scrollY,
    [vh, 2*vh],
    [1,0]
  )

  const sectionBackgroundLeft = useTransform(scrollY,
    [0,vh],
    ["-0.5%","0%"] 
  )
  return (
    <section className={clx(styles.root)} ref = {ref1}>
      <motion.div
        className={styles["background-section1"]}
        style = {{
          translateY: containerTranslateY,
          translateX: containerTranslateX,
          width: sectionBackgroundWidth,
          height: sectionBackgroundHeight,
          borderRadius: containerBorderRadius,
          opacity: sectionBackgroundOpacity,
          top: sectionBackgroundTop,
          left: sectionBackgroundLeft
        }}
      />
      {/*<motion.div 
        className={styles.section2Image} 
        style = {{
          translateY: containerTranslateY,
          translateX: containerTranslateX,
          width: containerWidth,
          height: containerHeight,
          borderRadius: containerBorderRadius,
          opacity: section2Opacity
        }}
      />*/}
      {/*<motion.div 
        className={styles.section3Image} 
        style = {{
          translateY: containerTranslateY,
          translateX: containerTranslateX,
          width: containerWidth,
          height: containerHeight,
          borderRadius: containerBorderRadius
        }}
      />*/}
      <motion.div 
        className={clx(styles.container,"slide section1")}
        animate={isAnimate ? "animate" : "initial"}
        variants={containerVariants}
        style = {{ 
          translateY: containerTranslateY,
          translateX: containerTranslateX,
          width: containerWidth,
          height: containerHeight,
          opacity: containerOpacity,
          borderRadius: containerBorderRadius
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
