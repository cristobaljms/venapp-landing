import Image from "next/image";
import React, { useRef, useContext } from "react";
import styles from "../../styles/Section2.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { TransitionContext } from "../context/TransitionContext";

import clx from 'classnames';
import { useScroll, motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../context/AnimationContext";


export const Section2 = () => {

  const { vh, currentSection, ref2, scrollRef } = useAnimationContext();
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef});
  //Hay de todo container
  const containerTranslateY = useTransform(scrollY,[0,vh,vh,vh*2],[vh,0,0,vh]);
  const containerTranslateY2 = useTransform(scrollY,[vh,vh*2],[0,vh]);
  //Decorators
  const decoratorsTranslateY = useTransform(scrollY,[vh,vh*2],[0,-vh]);
  //root container
  const rootTranslateY = useTransform(scrollY,[vh,vh*2],[0,vh]);
  const rootOpacity    = useTransform(scrollY,[vh,vh*2],[1,0]);

  return (
    <section ref = {ref2}>
    <motion.div 
      id="section2" 
      className={clx(styles.root,"slide section2")} 
      style = {{
        translateY: rootTranslateY,
        opacity: rootOpacity
      }}
    >
      <div className={styles.content}>
        {<div className={styles.phoneWrapper}>
          <Image
            src="/assets/img/section2/phone.png"
            width={446}
            height={877}
            style={{ objectFit: "contain", maxWidth: "auto", right: 0 }}
            alt=""
            quality={75}
          />
        </div>}
        <motion.div 
          className={styles.hayDeTodoWrapper}
          style = {{
            //translateY: containerTranslateY
          }}
        >
          <div id="hayDeTodoRef" className={styles.hayDeTodoContent}>
            <motion.div
              style={{
                translateY: containerTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/hay-de-todo.png"}
                alt=""
                width={483}
                height={533}
                quality={75}
              />
            </motion.div>
            <motion.div 
              className={styles.icon1}
              style = {{
                translateY: decoratorsTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/icon1.png"}
                alt=""
                width={99}
                height={99}
                quality={75}
              />
            </motion.div>
            <motion.div 
              className={styles.icon2}
              style = {{
                translateY: decoratorsTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/icon2.png"}
                alt=""
                width={55}
                height={55}
                quality={75}
              />
            </motion.div>
            <motion.div 
              className={styles.icon3}
              style = {{
                translateY: decoratorsTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/icon3.png"}
                alt=""
                width={64}
                height={71}
                quality={75}
              />
            </motion.div>
            <motion.div 
              className={styles.icon4}
              style={{
                translateY: containerTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/icon4.png"}
                alt=""
                width={67}
                height={58}
                quality={75}
              />
            </motion.div>
            <motion.div 
              className={styles.icon5}
              style={{
                translateY: containerTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/icon5.png"}
                alt=""
                width={91}
                height={89}
                quality={75}
              />
            </motion.div>
            <motion.div 
              className={styles.icon6}
              style={{
                translateY: containerTranslateY
              }}
            >
              <Image
                src={"/assets/img/section2/icon6.png"}
                alt=""
                width={55}
                height={49}
                quality={75}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
};
