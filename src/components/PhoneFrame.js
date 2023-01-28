"use client";

import styles from '../../styles/PhoneFrame.module.css';
import { useAnimationContext } from '../context/AnimationContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
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


export const mapPhoneTop = {
  m: "10%",
  l: "5%",
  xl: "5%"
}

export const mapPhoneTop2 = {
  m: "20%",
  l: "20%",
  xl: "20%"
}

const PhoneFrame = ({ children }) => {

  const { vw, vh, toPxWidth, toPercentWidth, toPercentHeight, scaleHeightPercentPerfect, scrollRef, widthToHeightPx, toPxHeight } = useAnimationContext();
  const { breakpoint: bp } = useBreakpoints(BREAKPOINTS);
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef});
  const [ render, setRender ] = useState(false);

  //Section 3 phone
  const phoneTrackRef = useRef();
  const phoneLeftSection3 = toPercentWidth( phoneTrackRef?.current?.getBoundingClientRect?.()?.left );
  //Section 4 phone
  const phoneTrackRef4 = useRef();
  const phoneTopSection4 = toPercentHeight( phoneTrackRef4?.current?.getBoundingClientRect?.()?.top );
  const phoneLeftSection4 = toPercentWidth( phoneTrackRef4?.current?.getBoundingClientRect?.()?.left )
  //Section 5 phone
  const phoneTrackRef5 = useRef();
  //Phone data: taken from image
  const phoneWidth  = 445;
  const phoneHeight = 879;
  const phoneAspectRatio = phoneWidth / phoneHeight;
  //Phone desire data
  const offsetPercent = 15;
  const phoneDesireWidth = toPxWidth(20);
  const phoneDesireWidth2 = mapDesireWidth2[bp];
  const phoneDesireWidth3 = phoneTrackRef5?.current?.getBoundingClientRect?.()?.height
  const phoneInitialWidthPercent = 100 + offsetPercent;
  //Phone width
  const phoneFinalWidthPercent = phoneDesireWidth * 100 / vw;
  const phoneFinalWidthPercent2 = phoneDesireWidth2 * 100 / vw;
  const phoneFinalWidthPercent3 = phoneDesireWidth3 * 100 / vw;
  //Phone left
  const phoneLeft = (vw * offsetPercent / 100) / -2;
  const phoneLeft5 = toPercentHeight( phoneTrackRef5?.current?.getBoundingClientRect?.()?.x );
  //Phone height
  const phoneFinalHeightPercent = scaleHeightPercentPerfect(phoneFinalWidthPercent,phoneAspectRatio);
  //Phone Translate Y
  const phoneFinalTop = toPercentHeight( vh / 2 - widthToHeightPx(phoneFinalWidthPercent,phoneAspectRatio) / 2 )   
  const phoneInitialHeightPercent =  toPercentHeight( toPxWidth(phoneInitialWidthPercent) / phoneAspectRatio );
  const phoneFinalHeight5 = widthToHeightPx( phoneFinalWidthPercent3, phoneAspectRatio );
  const phoneFinalTop5 = toPercentHeight( vh / 2 - phoneFinalHeight5 / 2 )   

  React.useEffect( () => {

  } , [])

  //Animate phone
  const phoneWidthAnimated = useTransform(scrollY,
    [ 0, vh, vh, vh * 2, vh*2, vh*3 ],
    [ 
      `${phoneInitialWidthPercent}%`, `${phoneFinalWidthPercent}%`, 
      `${phoneFinalWidthPercent}%`, `${phoneFinalWidthPercent2}%`,
      `${phoneFinalWidthPercent2}%`, `${phoneFinalWidthPercent3}%`
    ]
  );
  
  const phoneLeftAnimated   = useTransform(scrollY,
    [0,vh,vh,vh*2, vh*2, vh*3, vh*3, vh * 4], 
    [ 
      `${phoneLeft * 100 / vw}%` , "20%", 
      "20%" , `${phoneLeftSection3}%`,
      `${phoneLeftSection3}%` , "32%",
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
      "-20%", `${phoneFinalTop}%`,
      `${phoneFinalTop}%`, mapPhoneTop2[bp] ?? "5%",
      mapPhoneTop2[bp] ?? "5%", `${phoneTopSection4}%`,
      `${phoneTopSection4}%`, `${phoneFinalTop5}%`
    ]
  );

  const phoneRotate = useTransform(scrollY,
    [vh * 3, vh * 4],
    [0,90] 
  )

  //PhoneOpacity
  const phoneOpacity = useTransform(scrollY,
    [ vh * 4, vh * 4 + 1 ],
    [ 1, 0 ] 
  )

  const phonezIndex = useTransform(scrollY,
    [vh*3 - 1, vh * 3],
    [1000, 2000] 
  )
    
  useEffect(() => {
    setRender(true);
  }, [])


  if(!render || vw === 0) return null;

  return (
    <PhonePhrameContext.Provider value = {{
      finalHeightSection1: toPxWidth(phoneFinalWidthPercent) / phoneAspectRatio,
      finalHeightSection2: toPxWidth(phoneFinalWidthPercent2) / phoneAspectRatio,
      finalHeightSection3: toPxWidth(phoneFinalWidthPercent3) / phoneAspectRatio,
      phoneDesireWidth,
      phoneDesireWidth2,
      phoneDesireWidth3,
      phoneFinalTop,
      phoneFinalTop4: phoneTopSection4,
      phoneFinalTop5,
      phoneTrackRef,
      phoneTrackRef4,
      phoneTrackRef5,
      phoneLeftSection3,
      phoneAspectRatio,
      phoneFinalWidthPercent3,
      //seccion 1 bg
      section1BackgroundHeight1: toPxHeight(phoneInitialHeightPercent),
      section1BackgroundHeight2: toPxWidth(phoneFinalWidthPercent) / phoneAspectRatio
    }}>
        {children}
        <motion.div 
          className={styles["phone-frame"]}
          style = {{
            width: phoneWidthAnimated,
            left: phoneLeftAnimated,
            height: phoneHeightAnimated,
            top: phoneTop,
            zIndex: phonezIndex,
            //scale: phoneScale
            rotate: phoneRotate,
            opacity: phoneOpacity
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
    </PhonePhrameContext.Provider>
    
  )
}

export default PhoneFrame;