import Image from "next/image";
import React, { useRef } from "react";
import styles from "../../styles/Section3.module.css";
import { useScroll, motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../context/AnimationContext";
import { BREAKPOINTS, mapDesireWidth2, usePhoneContext, mapPhoneTop2 } from "../components/PhoneFrame";
import clx from 'classnames';
import { useBreakpoint } from "use-breakpoint";

export const Section3 = () => {

  const { scrollRef, ref3, vh , toPxHeight } = useAnimationContext();

  const { finalHeightSection3, phoneDesireWidth3, phoneFinalTop5, phoneFinalTop4, phoneLeftSection3, phoneTrackRef, phoneDesireWidth, finalHeightSection1, finalHeightSection2 } = usePhoneContext();
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef});
  const { breakpoint: bp } = useBreakpoint(BREAKPOINTS);
  //root container
  const rootTranslateY = useTransform(scrollY,
    [vh, 2*vh, 2*vh, 3*vh],
    [-vh,0, 0, vh]
  );

  const rootOpacity = useTransform(scrollY, [2*vh, 3*vh], [1,0]);

  const phoneOffsetY2 = toPxHeight( parseInt(mapPhoneTop2[bp]) );
  const phoneOffsetY3 = toPxHeight( phoneFinalTop4 );
  const phoneOffsetY4 = toPxHeight( phoneFinalTop5 );

  //Envia y recibe archivos container
  const textTranslateX = useTransform(scrollY,
    [vh, 2*vh, 2*vh, 3*vh],
    ["-100%", "0%", "0%", "-100%" ]
  );

  //Fila1
    const row1TranslateX = useTransform(scrollY,
      [vh, 2*vh, 2*vh, 3*vh],
      ["-100%", "0%", "0%", "100%" ]
    );
  

  //Comillas container
  const marksTranslateY = useTransform(scrollY,
    [vh, vh*2, vh*2, vh*3],
    ["200%%","0%","0%","-200%"]
  )

  const marksOpacity = useTransform(scrollY, 
    [vh, vh*2],
    [0,1]  
  )

  //Texto container
  const textTranslateY = useTransform(scrollY,
    [vh, vh*2, vh*2, vh*3],
    ["100%","0%","0%","100%"] 
  )

  //Fila 2
  const row2TranslateX = useTransform(scrollY,
    [vh, 2*vh, 2*vh, 3*vh],
    ["100%", "0%", "0%", "-100%"]  
  )

  //Imagen Seccion 3
  const section3Width = useTransform(scrollY,
    [vh*2,vh*3],
    [
      phoneDesireWidth - 15 - 0, phoneDesireWidth3 - 25
    ]
  )

  const section3Height = useTransform(scrollY,
    [vh*2,vh*3],
    [
      finalHeightSection2 - 20, finalHeightSection3 - 20
    ] 
  );

  const section3Left = useTransform(scrollY, 
    [vh*2,vh*3,vh*3,vh*4],
    [
      `${phoneLeftSection3 + 1.5}%` , "33%",
      "33%", "5%"
    ]
  )

  const section4TranslateY = useTransform(scrollY, 
    [vh*2,vh*3,vh*3,vh*4],
    [
      phoneOffsetY2 + 15, vh + phoneOffsetY3 + 15,
      vh + phoneOffsetY3 + 15, vh * 2 + phoneOffsetY4 + 15
    ]
  )

  const section3BorderRadius = useTransform(scrollY, 
    [vh*2,vh*3],
    [
      25, 50
    ]
  )

  const section3Opacity = useTransform(scrollY, 
    [vh*1,vh*2,vh*2,vh*2 + 1,vh*3 + 1,vh*4],
    [
      0, 0, 0, 1, 1, 0
    ]
  )

  const section3Rotate = useTransform(scrollY,
    [vh*3,vh*4],
    [0,90] 
  )
  
  const section3Opacity1 = useTransform(scrollY, 
    [vh*1,vh*2,vh*2,vh*2 + 1],
    [
      0, 0, 0, 1
    ]
  )
  //Section4 zIndex
  const section4zIndex = useTransform(scrollY,
    [vh*3, vh * 3 + 1, vh * 4, vh * 4 + 1],
    [700, 2000, 2000, -1] 
  )

  const section3Opacity2 = useTransform(scrollY, 
    [vh*1,vh*2,vh*2,vh*2 + 1, vh*3, vh*4],
    [
      0, 0, 0, 1, 1, 0
    ]
  )


  return (
    <section ref = {ref3}> 
      <motion.div 
        className={styles.section3Image}
        style = {{
          width: section3Width,
          height: section3Height,
          left: section3Left,
          translateY: section4TranslateY,
          borderRadius: section3BorderRadius,
          opacity: section3Opacity,
          rotate: section3Rotate
        }}
      />
      <motion.div 
        className={styles.section4Image}
        style = {{
          width: section3Width,
          height: section3Height,
          left: section3Left,
          translateY: section4TranslateY,
          borderRadius: section3BorderRadius,
          opacity: section3Opacity1,
          rotate: section3Rotate,
          zIndex: section4zIndex
        }}
      />
      <motion.div 
        className={clx(styles.section4Image,styles.section3Background)}
        style = {{
          width: section3Width,
          height: section3Height,
          left: section3Left,
          translateY: section4TranslateY,
          borderRadius: section3BorderRadius,
          opacity: section3Opacity2,
          rotate: section3Rotate,
          zIndex: section4zIndex
        }}
      />
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
              <motion.div 
                className={styles.card}
                style = {{
                  translateY: textTranslateY
                }}
              >
                <div className={styles.cardTitleWrapper}>
                  <h3 className={styles.cardTitle}>Mensaje AutoBorrado</h3>
                </div>
                <p className={styles.cardText}>
                  Desde VenChat puedes configurar cualquier chat grupal o
                  individual para que los mensajes se eliminen automáticamente.
                </p>
              </motion.div>
              <div className={styles.iphoneWrapper}>
                <div className={styles.iPhoneChat} ref={phoneTrackRef}>
                  <Image
                    src="/assets/img/section3/iPhoneChat.png"
                    alt=""
                    width={425}
                    height={924}
                    style={{ objectFit: "contain", maxHeight: "100%" }}
                  />
                </div>
                <motion.img
                  className={styles.globo1}
                  src="/assets/img/section3/globo-1.png"
                  alt=""
                  style = {{
                    opacity: marksOpacity,
                    translateY: marksTranslateY
                  }}
                />
                <motion.img
                  className={styles.globo2}
                  src="/assets/img/section3/globo-2.png"
                  alt=""
                  style = {{
                    opacity: marksOpacity,
                    translateY: marksTranslateY
                  }}
                />
                <motion.img
                  className={styles.globo3}
                  src="/assets/img/section3/globo-3.png"
                  alt=""
                  style = {{
                    opacity: marksOpacity,
                    translateY: marksTranslateY
                  }}
                />
              </div>
              <motion.div 
                className={styles.card}
                style = {{ 
                  translateY: textTranslateY
                }}
              >
                <div className={styles.cardTitleWrapper}>
                  <h3 className={styles.cardTitle}>Mensaje Oculto</h3>
                </div>
                <p className={styles.cardText}>
                  Tu seguridad y privacidad son prioritarias en VenChat. Envía y
                  recibe mensajes ocultos que solo tú puedes leer.
                </p>
              </motion.div>

              <motion.div 
                className={styles.card}
                style = {{
                  translateY: textTranslateY
                }}
              >
                <div className={styles.cardTitleWrapper}>
                  <h3 className={styles.cardTitle}>Mensaje Masivos</h3>
                </div>
                <p className={styles.cardText}>
                  Envía mensajes a muchas personas en un instante. VenChat es
                  ideal para dar anuncios importantes, enviar invitaciones o
                  promociones ¡Tú decides!
                </p>
              </motion.div>
              <div className={styles.filas}>
                <motion.div 
                  className={styles.fila1}
                  style = {{
                    translateX: row1TranslateX
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
