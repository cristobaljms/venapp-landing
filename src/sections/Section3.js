import Image from "next/image";
import React, { useRef } from "react";
import styles from "../../styles/Section3.module.css";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export const Section3 = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div id="section3" className={styles.root}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <span className={styles.venChantBtn}>
              Ven<b>Chat</b>
            </span>
            <h2 className={styles.text1}>
              <span style={{ color: "#90CC55" }}>Envía y recibe</span> archivos
              y mensajes
            </h2>
            <p className={styles.text2}>
              Chatea, comparte y mantente conectado a través de VenChat.
            </p>
          </div>
          <div className={styles.imagesWrapper}>
            <div className={styles.card}>
              <div className={styles.cardTitleWrapper}>
                <h3 className={styles.cardTitle}>Mensaje AutoBorrado</h3>
              </div>
              <p className={styles.cardText}>
                Desde VenChat puedes configurar cualquier chat grupal o
                individual para que los mensajes se eliminen automáticamente.
              </p>
            </div>
            <div className={styles.iphoneWrapper}>
              <div className={styles.iPhoneChat}>
                <Image
                  src="/assets/img/section3/iPhoneChat.png"
                  alt=""
                  width={425}
                  height={924}
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </div>
              <img
                className={styles.globo1}
                src="/assets/img/section3/globo-1.png"
                alt=""
              />
              <img
                className={styles.globo2}
                src="/assets/img/section3/globo-2.png"
                alt=""
              />
              <img
                className={styles.globo3}
                src="/assets/img/section3/globo-3.png"
                alt=""
              />
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitleWrapper}>
                <h3 className={styles.cardTitle}>Mensaje Oculto</h3>
              </div>
              <p className={styles.cardText}>
                Tu seguridad y privacidad son prioritarias en VenChat. Envía y
                recibe mensajes ocultos que solo tú puedes leer.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitleWrapper}>
                <h3 className={styles.cardTitle}>Mensaje Masivos</h3>
              </div>
              <p className={styles.cardText}>
                Envía mensajes a muchas personas en un instante. VenChat es
                ideal para dar anuncios importantes, enviar invitaciones o
                promociones ¡Tú decides!
              </p>
            </div>
            <div className={styles.filas}>
              <div className={styles.fila1}>
                <Image
                  src="/assets/img/section3/fila-1.png"
                  alt=""
                  width={1131}
                  height={172}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.fila2}>
                <Image
                  src="/assets/img/section3/fila-2.png"
                  alt=""
                  width={1131}
                  height={172}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
