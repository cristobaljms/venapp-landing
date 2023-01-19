import styles from "../../styles/Section8.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef } from "react";

export const Section8 = () => {
  const video1ref = useRef();
  const video2ref = useRef();
  const video3ref = useRef();
  const textref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section8",
          start: "top center",
          end: "center center",
          toggleActions: "restart none none none",
          scrub: true,
        },
      })
      .to("#section8", {
        opacity: 1,
        delay: 0.2,
        ease: "ease",
      });

    let timelineOut = gsap.timeline({
      scrollTrigger: {
        trigger: "#section8",
        start: "center center",
        toggleActions: "restart none none none",
        scrub: true,
      },
    });

    timelineOut
      .to(video1ref.current, {
        x: -100,
        delay: 0,
        opacity: 0,
      })
      .to(
        video3ref.current,
        {
          x: 100,
          delay: 0,
          opacity: 0,
        },
        "<"
      )
      .to(
        video2ref.current,
        {
          y: -200,
          delay: 0,
          opacity: 0,
        },
        "<"
      )
      .to(
        textref.current,
        {
          y: 200,
          delay: 0,
          opacity: 0,
        },
        "<"
      );
  }, []);

  return (
    <div id="section8" className={styles.root}>
      <div className="container">
        <div className={styles["inner-container"]}>
          <div className={styles["videos-container"]}>
            <div ref={video1ref}>
              <div className={styles.square}></div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div ref={video2ref}>
              <div className={styles.square}></div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div ref={video3ref}>
              <div className={styles.square}></div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className={styles.content} ref={textref}>
            <h2 className={styles.text1}>{strings.title}</h2>
            <p className={styles.text2}>{strings.description}</p>
            <button className={styles.button}>
              {strings.watchAllTutorials}
            </button>
          </div>
        </div>
      </div>
    </div>
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
