import React, { useRef, useContext } from "react";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import styles from "../../styles/Scene5.module.css";
import styles2 from "../../styles/Scene2.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Image from "next/image";

export const Scene5 = () => {
  const phoneScene2 = useRef();
  const phoneScene3 = useRef();
  const phoneScene4 = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(phoneScene2.current, { x: 0 });
    gsap.to(phoneScene2.current, {
      scrollTrigger: {
        trigger: "#scene3",
        toggleActions: "restart none reverse none",
        pin: phoneScene2.current,
      },
      x: 100,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className={styles.root} id="root">
      <div className={styles.sceneContentOne} id="scene1">

      </div>
      <div className={styles.sceneContentTwo} id="scene2">
        <div className={styles2.content}>
          <div className={styles2.phoneWrapper}>
            <img
              id="phoneid"
              ref={phoneScene2}
              className={styles2.phone}
              alt=""
              src="/assets/img/scene2/phone.png"
            />
          </div>
          <div className={styles2.hayDeTodoWrapper}>
            <div id="hayDeTodoRef" className={styles2.hayDeTodoContent}>
              <Image
                src={"/assets/img/scene2/hay-de-todo.png"}
                alt=""
                width={483}
                height={533}
              />
              <div className={styles2.icon1}>
                <Image
                  src={"/assets/img/scene2/icon1.png"}
                  alt=""
                  width={99}
                  height={99}
                />
              </div>
              <div className={styles2.icon2}>
                <Image
                  src={"/assets/img/scene2/icon2.png"}
                  alt=""
                  width={55}
                  height={55}
                />
              </div>
              <div className={styles2.icon3}>
                <Image
                  src={"/assets/img/scene2/icon3.png"}
                  alt=""
                  width={64}
                  height={71}
                />
              </div>
              <div className={styles2.icon4}>
                <Image
                  src={"/assets/img/scene2/icon4.png"}
                  alt=""
                  width={67}
                  height={58}
                />
              </div>
              <div className={styles2.icon5}>
                <Image
                  src={"/assets/img/scene2/icon5.png"}
                  alt=""
                  width={91}
                  height={89}
                />
              </div>
              <div className={styles2.icon6}>
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
      <div className={styles.sceneContentThree} id="scene3"></div>
      <div className={styles.sceneContentFour} id="scene4"></div>
    </div>
  );
};
