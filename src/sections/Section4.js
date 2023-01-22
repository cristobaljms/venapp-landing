import React from "react";
import styles from "../../styles/Section4.module.css";
import clx from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAnimationContext } from "../context/AnimationContext";
import Image from "next/image";
import { usePhoneContext } from "../components/PhoneFrame";

export const Section4 = () => {

  const { vh, scrollRef }         = useAnimationContext();
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef});
  const { phoneTrackRef4 } = usePhoneContext();

  //Container 
  const rootTranslateY = useTransform(scrollY,
    [2 * vh, 3 * vh],
    [ -vh,0 ]
  )

  //Comprar mas barato
  const buyCheaperTextTranslateX = useTransform(scrollY,
    [2*vh, 3*vh, 3*vh, 4*vh], 
    ["-100%","0%", "0%", "-300%"]
  )

  //Descripcion text
  const descriptionTextTranslateX = useTransform(scrollY,
    [2*vh, 3*vh, 3*vh, 4*vh],
    ["100%","0%", "0%", "160%"] 
  )

  //Imagenes fila 1
  const rowImage1TranslateY = useTransform(scrollY,[3*vh, 4*vh],["0%","100%"] );
  const rowImageOpacity     = useTransform(scrollY,[3*vh, 4*vh],[1,0])
  //Inner container
  const innerContainerTranslateY = useTransform(scrollY,[3*vh, 4*vh],[0,vh] );
  return (
    <section> 
      <motion.div 
        id="section4" 
        className={clx(styles.root,"slide section4")}
        style = {{
          translateY: rootTranslateY
        }}
      >
        <motion.div 
          className={styles.innerContainer}
          style = {{
            translateY: innerContainerTranslateY
          }}
        > 
          <div className="container">
            <div className={styles.content}>
              <div className={styles.textWrapper}>
                <motion.div 
                  className={styles.textInnerWrapper}
                  style = {{
                    translateX: buyCheaperTextTranslateX
                  }}
                > 
                  <motion.span 
                    className={styles.venChantBtn}
                    style = {{ 
                      //translateX: buyCheaperTextTranslateX
                    }}
                  >
                    <b>VenChat</b>
                  </motion.span>
                  <motion.div 
                    className={clx(styles.text1,styles.text11)}
                  >
                    <h2>Compra más y más barato</h2>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className={styles.text2}
                  style={{
                    translateX: descriptionTextTranslateX
                  }}
                >
                  <p>
                    En VenMarket encuentras los productos y servicios más buscados
                    con los mejores precios del mercado. Puedes comprar de manera
                    rápida y segura desde donde estés sin comisiones.
                  </p>
                  <p>Si quieres que tu negocio esté en VenMarket, contáctanos. </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <motion.div 
              className={`${styles.card} ${styles.card1}`}
              style = {{
                translateY: rowImage1TranslateY,
                opacity: rowImageOpacity
              }}
            >
              <Image
                src="/assets/img/section4/image1.png"
                alt=""
                width={359}
                height={269}
                style={{ objectFit: "contain", maxHeight: "100%" }}
                quality={60}
              />
            </motion.div>
            <motion.div 
              className={`${styles.card} ${styles.card2}`}
              style = {{
                translateY: rowImage1TranslateY,
                opacity: rowImageOpacity
              }}
            >
              <Image
                src="/assets/img/section4/image2.png"
                alt=""
                width={514}
                height={340}
                style={{ objectFit: "contain", maxHeight: "100%" }}
                quality={60}
              />
            </motion.div>
            <motion.div
              className={`${styles.card} ${styles.card3}`}
              style = {{
                translateY: rowImage1TranslateY,
                opacity: rowImageOpacity
              }}
            >
              <Image
                src="/assets/img/section4/image3.png"
                alt=""
                width={537}
                height={536}
                style={{ objectFit: "contain", maxHeight: "100%" }}
                quality={60}
              />
            </motion.div>
            <motion.div 
              className={`${styles.card} ${styles.card4}`}
              style = {{
                translateY: rowImage1TranslateY,
                opacity: rowImageOpacity
              }}
            >
              <Image
                src="/assets/img/section4/image4.png"
                alt=""
                width={382}
                height={384}
                style={{ objectFit: "contain", maxHeight: "100%" }}
                quality={60}
              />
            </motion.div>
            <div 
              
              className={styles.phone}
            >
              <div ref = {phoneTrackRef4}>
`              <Image
                src="/assets/img/section4/phone.png"
                alt=""
                width={715}
                height={648}
                style={{ objectFit: "contain", maxHeight: "100%" }}
              />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
