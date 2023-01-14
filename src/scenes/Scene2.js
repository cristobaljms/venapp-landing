import Image from "next/image";
import React, { useRef, useContext } from "react";
import styles from "../../styles/Scene2.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { TransitionContext } from "../context/TransitionContext";
export const Scene2 = () => {
  const { timeline } = useContext(TransitionContext);
  const icon1Ref = React.useRef();
  const hayDeTodoRef = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#hayDeTodoRef", {
      scrollTrigger: {
        trigger: "#scene2",
        scrub: true,
        start: "-300px",
        end: "top",
      },
      opacity: 1,
      delay: 0.5,
      duration: 1,
      y: 0,
    });

    timeline.add(
      gsap.to("#hayDeTodoRef", {
        scrollTrigger: {
          trigger: "#scene2",
          scrub: true,
          markers: true,
          start: "top",
          end: "center",
        },
        y: 100,
        delay: 0.5,
        duration: 1,
        delay: 1,
      }),
      0
    );
  }, []);

  return (
    <div id="scene2" className={styles.root}>
      <div className={styles.content}>
        <div className={styles.phoneWrapper}>
          <img
            id="phoneid"
            className={styles.phone}
            alt=""
            src="/assets/img/scene2/phone.png"
          />
        </div>
        <div className={styles.hayDeTodoWrapper}>
          <div id="hayDeTodoRef" className={styles.hayDeTodoContent}>
            <Image
              src={"/assets/img/scene2/hay-de-todo.png"}
              alt=""
              width={483}
              height={533}
              style={styles.hayDeTodoImg}
            />
            <div className={styles.icon1}>
              <Image
                src={"/assets/img/scene2/icon1.png"}
                alt=""
                width={99}
                height={99}
              />
            </div>
            <div className={styles.icon2}>
              <Image
                src={"/assets/img/scene2/icon2.png"}
                alt=""
                width={55}
                height={55}
              />
            </div>
            <div className={styles.icon3}>
              <Image
                src={"/assets/img/scene2/icon3.png"}
                alt=""
                width={64}
                height={71}
              />
            </div>
            <div className={styles.icon4}>
              <Image
                src={"/assets/img/scene2/icon4.png"}
                alt=""
                width={67}
                height={58}
              />
            </div>
            <div className={styles.icon5}>
              <Image
                src={"/assets/img/scene2/icon5.png"}
                alt=""
                width={91}
                height={89}
              />
            </div>
            <div className={styles.icon6}>
              <Image
                src={"/assets/img/scene2/icon6.png"}
                alt=""
                width={55}
                height={49}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
