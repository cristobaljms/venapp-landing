import Image from "next/image";
import styles from "../../styles/Section9.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef } from "react";

export const Section9 = () => {
  const imgref = useRef();
  const textref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section9",
          start: "top center",
          end: "center center",
          scrub: true,
        },
      })
      .to("#section9", {
        opacity: 1,
      })
      .to(textref.current, {
        opacity: 1,
        x: 0,
      })      
      .to(imgref.current, {
        opacity: 1,
        y: 0,
      });
  }, []);

  return (
    <div  id="section9" className={styles.container}>
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
              <Image
                src="/assets/img/section9/google-play.png"
                alt="google store tag"
                width={217}
                height={64}
              />
              <Image
                src="/assets/img/section9/app-store.png"
                alt="app store tag"
                width={217}
                height={64}
              />
            </div>
          </div>
          <div ref={imgref} className={styles.phoneContent}>
            <Image
              src="/assets/img/section9/phone2.png"
              alt="ven app smartphone"
              width={694}
              height={1330}
              style={{ objectFit: "contain", maxWidth: "80%" }}
            />
          </div>
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
