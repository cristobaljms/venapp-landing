import Image from "next/image";
import styles from "../../styles/Section9.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef } from "react";
import useWindowSize from "./../hooks/useWindowSize";

export const Section9 = ({ section }) => {
  const { isDesktop } = useWindowSize();
  const imgref = useRef();
  const textref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const trigger = {
      trigger: "#section9",
      toggleActions: "restart none none none",
    };

    gsap.fromTo(
      "#section9",
      { opacity: 0 },
      {
        scrollTrigger: trigger,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
      }
    );

    gsap.fromTo(
      textref.current,
      { opacity: 0, x: 100 },
      {
        scrollTrigger: trigger,
        x: 0,
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "circle",
      }
    );

    gsap.fromTo(
      imgref.current,
      { opacity: 0, y: 100 },
      {
        scrollTrigger: trigger,
        y: 0,
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "circle",
      }
    );
  }, []);
  return (
    <div id="section9" className={styles.container}>
      <div className="container">
        <div className={styles.content}>
          <div ref={textref} className={styles.textContent}>
            <h2>{strings.title}</h2>
            <h3>{strings.subttitle}</h3>
            <p>
              {strings.description} <br></br>
              {strings.description2}
            </p>
            <div className={styles.tag}>
              <a
                rel="noreferrer"
                href="http://venapp.com/tienda"
                target="_blank"
              >
                <Image
                  src="/assets/img/section9/google-play.png"
                  alt="google store tag"
                  width={217}
                  height={64}
                />
              </a>
              <a
                rel="noreferrer"
                href="http://venapp.com/tienda"
                target="_blank"
              >
                <Image
                  src="/assets/img/section9/app-store.png"
                  alt="app store tag"
                  width={217}
                  height={64}
                />
              </a>
            </div>
          </div>
          {isDesktop ? (
            <div
              ref={imgref}
              className={
                section == 10 ? styles.phoneSticky : styles.phoneContent
              }
            >
              <Image
                src="/assets/img/section9/phone.png"
                alt="ven app smartphone"
                width={694}
                height={1330}
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <div ref={imgref} className={styles.phoneContent}>
              <Image
                src="/assets/img/section9/phone.png"
                alt="ven app smartphone"
                width={694}
                height={1330}
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const strings = {
  title: "!Empieza ya!",
  subttitle: "Seamos parte de la evolucion digital de Venezuela",
  description: "Dale un vistazo y descubre todo lo",
  description2: "que puedes hacer con VenApp",
};
