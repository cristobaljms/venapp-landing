import styles from "../../styles/Section8.module.css";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { useRef, useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import Image from "next/image";

export const Section8 = () => {
  const video1ref = useRef();
  const video2ref = useRef();
  const video3ref = useRef();
  const textref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = {
      trigger: "#section8",
      toggleActions: "restart none restart none",
    };

    gsap.fromTo(
      "#section8",
      { opacity: 0 },
      {
        scrollTrigger: trigger,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
      }
    );

    gsap.fromTo(
      video1ref.current,
      { opacity: 0, x: -100 },
      {
        scrollTrigger: trigger,
        x: 0,
        delay: 0.3,
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      video3ref.current,
      { opacity: 0, x: 100 },
      {
        scrollTrigger: trigger,
        x: 0,
        delay: 0.3,
        opacity: 1,
        duration: 1,
        ease: "circle",
      }
    );

    gsap.fromTo(
      video2ref.current,
      { opacity: 0, y: -200 },
      {
        scrollTrigger: trigger,
        y: 0,
        delay: 0.3,
        opacity: 1,
        duration: 1,
        ease: "circle",
      }
    );

    gsap.fromTo(
      textref.current,
      { opacity: 0, y: 200 },
      {
        scrollTrigger: trigger,
        y: 0,
        delay: 0.3,
        opacity: 1,
        duration: 1,
        ease: "circle",
      }
    );
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState("");

  function openModal(url) {
    setVideo(url);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //   REGISTRO.png
  // SUPERCOMIC.png
  // VENU.png
  // CREAR PUBLICACION.png
  // DASHBOARD.png

  return (
    <div id="section8" className={styles.root}>
      <div className="container">
        <div className={styles["inner-container"]}>
          <div className={styles["videos-container"]}>
            <div ref={video1ref}>
              <div
                className={styles.square}
                onClick={() =>
                  openModal("https://www.youtube.com/watch?v=gbtkKGKf5Gg")
                }
              >
                <Image
                  src="/assets/img/section8/REGISTRO.png"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div ref={video2ref}>
              <div className={styles.square}>
                <Image
                  src="/assets/img/section8/SUPERCOMIC.png"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div ref={video3ref}>
              <div className={styles.square}>
                <Image
                  src="/assets/img/section8/CREARPUBLICACION.png"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <button onClick={closeModal}>close</button>
        <ReactPlayer url="https://www.youtube.com/watch?v=wWgIAphfn2U" />
      </Modal>
    </div>
  );
};

const strings = {
  title: "Video Tutoriales",
  watchAllTutorials: "Ver todos los tutoriales",
  description:
    "Conoce todo lo que puedes hacer con tu VenApp y sacale provecho.",
};
