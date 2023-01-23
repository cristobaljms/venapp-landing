import React from "react";
import styles from "../../styles/Section5.module.css";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useAnimationContext } from "../context/AnimationContext";
import clx from "classnames";
import { usePhoneContext } from "../components/PhoneFrame";

export const Section5 = () => {

  const { vh, scrollRef, toPxWidth, toPxHeight } = useAnimationContext();
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef});
  const { phoneTrackRef5, phoneAspectRatio } = usePhoneContext();
  //todo comics
  const allComicsTranslateX = useTransform(scrollY,
    [3*vh,4*vh],
    ["100%","0%"] 
  )

  console.log("sadasdas",{p: toPxWidth(50), b: phoneAspectRatio})

  //comics image
  const comicImageTranslateY = useTransform(scrollY,
    [3*vh,4*vh],
    ["40%","-12%"] 
  )

  const comicImageOpacity = useTransform(scrollY,
    [3*vh,4*vh],
    [0,1] 
  )

  return (
    <section> 
      <motion.div 
        className={styles.comicImg}
        style = {{
          opacity: comicImageOpacity,
          translateY: comicImageTranslateY
        }}
      >
        <Image
          src="/assets/img/section5/comics.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>
      <div 
        id="section5" 
        className={clx(styles.root, "slide section5")}
      >
        <div className={styles.image}>
          <div 
            ref = {phoneTrackRef5} 
            className={styles.phone}
            style = {{
              width: toPxHeight(50) / phoneAspectRatio
            }}
          >
            <Image
              src="/assets/img/section5/phone.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <motion.div 
          className="container"
          style = {{
            translateX: allComicsTranslateX
          }}
        >
          <div className={styles.content}>
            <div className={styles.textWrapper}>
              <div className={styles.venChantBtn}>
                <b>VenComics</b>
              </div>
              <h2 className={styles.text1}>Todos tus comics</h2>
              <p className={styles.text2}>
                La plataforma con el más amplio catálogo de cómics disponible para
                ti. Al suscribirte podrás encontrar tus historietas preferidas y
                acceder a ellas desde donde estés.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
