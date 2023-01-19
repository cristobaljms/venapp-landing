import Image from "next/image";
import React, { useRef } from "react";
import styles from "../../styles/Section3.module.css";
import { useScroll, motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../context/AnimationContext";
import clx from 'classnames';

export const Section3 = () => {

  const { ref3, vh } = useAnimationContext();
  const { scrollY } = useScroll();
  
  //root container
  const rootTranslateY = useTransform(scrollY,
    [vh, 2*vh, 2*vh, 3*vh],
    [-vh,0, 0, vh]
  );

  const rootOpacity = useTransform(scrollY, [2*vh, 3*vh], [1,0]);

  //Envia y recibe archivos container
  const textTranslateX = useTransform(scrollY,
    [vh,2*vh],
    ["-100%","0%"]
  );

  //Fila 1
  const row1TranslateX = useTransform(scrollY,
    [vh,2*vh],
    ["100vw","0"]  
  )

  //Fila 2
  const row2TranslateX = useTransform(scrollY,
    [vh,2*vh],
    ["100%","0%"]  
  )
  return (
    <section ref = {ref3}> 
      <motion.div 
        id="section3" 
        className={clx(styles.root,"slide section3")}
        style = {{
          translateY: rootTranslateY,
          opacity: rootOpacity
        }}
      >
        <div className={clx("container")}>
          <div className={styles.content}>
            <motion.div 
              className={styles.textWrapper}
              style = {{
                translateX: textTranslateX
              }}
            >
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
            </motion.div>
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
                <motion.div 
                  className={styles.fila1}
                  style = {{
                    translateX: textTranslateX
                  }}
                >
                  <Image
                    src="/assets/img/section3/fila-1.png"
                    alt=""
                    width={1131}
                    height={172}
                    style={{objectFit: "contain"}}
                  />
                </motion.div>
                <motion.div 
                  className={styles.fila2}
                  style = {{
                    translateX: row2TranslateX
                  }}
                >
                  <Image
                    src="/assets/img/section3/fila-2.png"
                    alt=""
                    width={1131}
                    height={172}
                    style={{objectFit: "contain"}}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
