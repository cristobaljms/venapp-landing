import { useScroll, motion, useTransform } from 'framer-motion';
import { useBreakpoint } from 'use-breakpoint';
import styles from '../../styles/Section2Image.module.css';
import { useAnimationContext } from '../context/AnimationContext';
import { mapDesireWidth2, usePhoneContext, mapPhoneTop2 } from './PhoneFrame';
import { BREAKPOINTS } from './PhoneFrame';

const Section2Image = () => {

  const { vh, scrollRef, toPxWidth } = useAnimationContext();
  const { breakpoint : bp } = useBreakpoint(BREAKPOINTS)
  const { scrollY } = useScroll({ container: scrollRef, target: scrollRef });
  const { 
    phoneDesireWidth, 
    finalHeightSection1, 
    finalHeightSection2,
    phoneFinalTop,
    phoneLeftSection3,
    phoneFinalTop4,
    phoneFinalWidthPercent3,
    finalHeightSection3
  } = usePhoneContext();

  const containerWidth = useTransform(scrollY, 
    [vh, vh * 2, vh * 2, vh * 3],
    [
      phoneDesireWidth - 15 - 0, mapDesireWidth2[bp] - 15 - 10,
      mapDesireWidth2[bp] - 15 - 10,  toPxWidth(phoneFinalWidthPercent3) - 40
    ] 
  );

  const containerHeight = useTransform(scrollY,
    [vh, vh*2, vh*2, vh*3],
    [
      finalHeightSection1 - 20, finalHeightSection2 - 20,
      finalHeightSection2 - 20, finalHeightSection3 
    ]
  );

  const phoneTop = useTransform(scrollY,
    [vh, vh * 2, vh * 2, vh * 3],
    [ 
      `${ parseInt(mapPhoneTop2[bp]) - 4.5}%`, `${parseInt(mapPhoneTop2[bp]) + 0.5}%`,
      `${parseInt(mapPhoneTop2[bp]) + 0.5}%`, `${phoneFinalTop4}%`
    ] 
  )

  const phoneLeft = useTransform(scrollY,
    [vh, vh * 2, vh * 2, vh * 3],
    [
      toPxWidth(20) + 10, toPxWidth( phoneLeftSection3 ) + 10,
      toPxWidth( phoneLeftSection3 ) + 10, toPxWidth(32) + 10
    ]    
  )

  const containerOpacity = useTransform(scrollY,
    [vh * 2, vh * 3],
    [1 , 0] 
  )

  return (
    <motion.div  
      className={styles.container}
      style = {{
        width: containerWidth,
        height: containerHeight,
        top: phoneTop,
        left: phoneLeft,
        opacity: containerOpacity
      }}
    >

    </motion.div>
  )

}

export default Section2Image;