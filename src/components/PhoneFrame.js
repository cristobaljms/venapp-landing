"use client";

import styles from '../../styles/PhoneFrame.module.css';
import { useAnimationContext } from '../context/AnimationContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from 'react';
import useBreakpoints from "use-breakpoint";

const PhonePhrameContext = createContext();

export const usePhoneContext = () => {
  return useContext(PhonePhrameContext);
}

export const BREAKPOINTS = { mobile: 0, m: 768, l: 1280, xl: 1620 }

export const mapDesireWidth = {
  m: 300,
  l: 350,
  xl: 600
}

export const mapDesireWidth2 = {
  m: 200,
  l: 290,
  xl: 400
}

export const mapDesireWidth3 = {
  m: 300,
  l: 450,
  xl: 600
}


const mapPhoneTop = {
  m: "10%",
  l: "5%",
  xl: "5%"
}

const PhoneFrame = ({ children }) => {

  const { vw, vh, toPxWidth, toPercentHeight, scaleHeightPercentPerfect } = useAnimationContext();
  const { breakpoint: bp } = useBreakpoints(BREAKPOINTS);
  const { scrollY } = useScroll();
  const [ render, setRender ] = useState(false);
  //Phone data: taken from image
  const phoneWidth  = 445;
  const phoneHeight = 879;
  const phoneAspectRatio = phoneWidth / phoneHeight;
  //Phone desire data
  const offsetPercent = 15;
  const phoneDesireWidth = mapDesireWidth[bp];
  const phoneDesireWidth2 = mapDesireWidth2[bp];
  const phoneDesireWidth3 = mapDesireWidth3[bp];
  const phoneInitialWidthPercent = 100 + offsetPercent;
  const phoneFinalWidthPercent = phoneDesireWidth * 100 / vw;
  const phoneFinalWidthPercent2 = phoneDesireWidth2 * 100 / vw;
  const phoneFinalWidthPercent3 = phoneDesireWidth3 * 100 / vw;
  const phoneLeft = (vw * offsetPercent / 100) / -2

  const phoneInitialHeightPercent =  toPercentHeight( toPxWidth(phoneInitialWidthPercent) / phoneAspectRatio );

  
  //Animate phone
  const phoneWidthAnimated = useTransform(scrollY,
    [ 0, vh, vh, vh * 2, vh*2, vh*3 ],
    [ 
      `${ phoneInitialWidthPercent }%`, `${phoneFinalWidthPercent}%`, 
      `${phoneFinalWidthPercent}%`, `${phoneFinalWidthPercent2}%`,
      `${phoneFinalWidthPercent2}%`, `${phoneFinalWidthPercent3}%`
    ]
  )
  
  const phoneLeftAnimated   = useTransform(scrollY,
    [0,vh,vh,vh*2, vh*2, vh*3, vh*3, vh * 4], 
    [ 
      `${phoneLeft * 100 / vw}%` , "20%", 
      "20%" , "43%",
      "43%" , "32%",
      "32%" , "5%"
    ]
  )

  const phoneHeightAnimated = useTransform(scrollY,
    [0, vh, vh, vh * 2, vh*2, vh*3], 
    [ 
      `${phoneInitialHeightPercent}%`, scaleHeightPercentPerfect(phoneFinalWidthPercent,phoneAspectRatio),  
      scaleHeightPercentPerfect(phoneFinalWidthPercent,phoneAspectRatio), scaleHeightPercentPerfect(phoneFinalWidthPercent2, phoneAspectRatio),
      scaleHeightPercentPerfect(phoneFinalWidthPercent2, phoneAspectRatio), scaleHeightPercentPerfect(phoneFinalWidthPercent3, phoneAspectRatio)
    ]
  )

  const phoneTop            = useTransform(scrollY,
    [0, vh, vh, vh * 2, vh * 2, vh * 3, vh * 3, vh * 4], 
    [ 
      "-20%", mapPhoneTop[bp] ?? "5%",
      "5%", "20%",
      "20%", "38%",
      "38%", "0%"
    ]
  );

  const phoneRotate = useTransform(scrollY,
    [vh * 3, vh * 4],
    [0,90] 
  )

  const phoneOriginX = useTransform(scrollY,
    [vh * 3, vh * 3 + 1],
    ["0px","900px"] 
  )

  const phoneOriginY = useTransform(scrollY,
    [vh * 3, vh * 3 + 1],
    ["0px","0px"] 
  )
  
  
  useEffect(() => {
    setRender(true);
  }, [])


  if(!render || vw === 0) return null;

  return (
    <PhonePhrameContext.Provider value = {{
      finalHeightSection1: toPxWidth(phoneFinalWidthPercent) / phoneAspectRatio
    }}>
      <motion.div 
        className={styles["phone-frame"]}
        style = {{
          width: phoneWidthAnimated,
          left: phoneLeftAnimated,
          height: phoneHeightAnimated,
          top: phoneTop,
          //scale: phoneScale
          rotate: phoneRotate,
          //originX: phoneOriginX,
          //originY: phoneOriginY
          
        }}
      >
        <Image
          src={"/assets/img/phone-square.png"}
          alt=""
          fill
          style={{ 
            objectFit: "cover"
          }}
          quality={75}
        />
      </motion.div>
      {children}
    </PhonePhrameContext.Provider>
    
  )
}

export default PhoneFrame;