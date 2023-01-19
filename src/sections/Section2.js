import Image from "next/image";
import React, { useRef, useContext } from "react";
import styles from "../../styles/Section2.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export const Section2 = () => {
  const phoneRef = React.useRef();
  const icon1ref = useRef();
  const icon2ref = useRef();
  const icon3ref = useRef();
  const icon4ref = useRef();
  const icon5ref = useRef();
  const icon6ref = useRef();
  const hayDeTodoTextRef = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(phoneRef.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
    });
    
    gsap.to(icon1ref.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
      rotate: 180,
    });

    gsap.to(icon2ref.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });

    gsap.to(icon3ref.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });

    gsap.to(icon4ref.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });

    gsap.to(icon5ref.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });

    gsap.to(icon6ref.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });

    gsap.to(hayDeTodoTextRef.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        end: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });
  }, []);

  return (
    <div id="section2" className={styles.root}>
      <div className={styles.content}>
        <div ref={phoneRef} className={styles.phoneWrapper}>
          <Image
            src="/assets/img/section2/phone.png"
            width={446}
            height={877}
            style={{ objectFit: "contain", maxWidth: "auto", right: 0 }}
            alt=""
            quality={75}
          />
        </div>
        <div className={styles.hayDeTodoWrapper}>
          <div id="hayDeTodoRef" className={styles.hayDeTodoContent}>
            <span className={styles.hayDeTodoText} ref={hayDeTodoTextRef}>
              <Image
                src={"/assets/img/section2/hay-de-todo.png"}
                alt=""
                width={483}
                height={533}
                quality={75}
              />
            </span>
            <div ref={icon1ref} className={styles.icon1}>
              <Image
                src={"/assets/img/section2/icon1.png"}
                alt=""
                width={99}
                height={99}
                quality={75}
              />
            </div>
            <div ref={icon2ref} className={styles.icon2}>
              <Image
                src={"/assets/img/section2/icon2.png"}
                alt=""
                width={55}
                height={55}
                quality={75}
              />
            </div>
            <div ref={icon3ref} className={styles.icon3}>
              <Image
                src={"/assets/img/section2/icon3.png"}
                alt=""
                width={64}
                height={71}
                quality={75}
              />
            </div>
            <div ref={icon4ref} className={styles.icon4}>
              <Image
                src={"/assets/img/section2/icon4.png"}
                alt=""
                width={67}
                height={58}
                quality={75}
              />
            </div>
            <div ref={icon5ref} className={styles.icon5}>
              <Image
                src={"/assets/img/section2/icon5.png"}
                alt=""
                width={91}
                height={89}
                quality={75}
              />
            </div>
            <div ref={icon6ref} className={styles.icon6}>
              <Image
                src={"/assets/img/section2/icon6.png"}
                alt=""
                width={55}
                height={49}
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
