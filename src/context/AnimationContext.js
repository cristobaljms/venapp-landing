import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "react-use-scroll-direction";
import { useWindowSize } from '@react-hook/window-size'
import React from "react";
import styles from '../../styles/Motion.module.css';

const AnimationContext = React.createContext();

export default AnimationContext;

const AnimationProvider = ({children, scrollRef, ...props}) => {
  const { isScrollingUp } = useScrollDirection()
  const [animateLabel,setAnimateLabel ] = React.useState("initial");
  const [ currentSection,setCurrentSection ] = React.useState("");
  const [width,height] = useWindowSize();
  const viewportHeight = height;
  const viewportWidth  = width;
  const referenceViewportHeight = 800;
  const referenceViewportWidth  = 1265;
  const sizeFactor = viewportHeight / referenceViewportHeight;
  const sizeFactorWidth = viewportWidth / referenceViewportWidth;

  const inViewOptions = {
    threshold: 0.05
  }

  const { ref : ref1 , inView: inView1 , entry: entry1 } = useInView({
    ...inViewOptions
  });
  const { ref : ref2 , inView: inView2 , entry: entry2 } = useInView(inViewOptions);
  const { ref : ref3 , inView: inView3 , entry: entry3 } = useInView(inViewOptions);
  const { ref : ref9 , inView: inView9 , entry: entry9 } = useInView(inViewOptions);

  React.useEffect(
    () => {

      const updateCurrentSectionWhileScrollingDown = () => {

        if(inView3){
          setCurrentSection(3);
          return;
        }

        if(inView2){
          setCurrentSection(2);
          return
        }

        if(inView1){
          setCurrentSection(1);
          return
        }

      }

      const updateCurrentSectionWhileScrollingUp = () => {

        if(inView1){
          setCurrentSection(1);
          return
        }

        if(inView2){
          setCurrentSection(2);
          return
        }

        if(inView3){
          setCurrentSection(3);
          return;
        }

      } 

      if( isScrollingUp ){
        updateCurrentSectionWhileScrollingUp();
      }else{
        updateCurrentSectionWhileScrollingDown();
      }

    },
    [inView1,inView2,isScrollingUp]
  )

  const toPxWidth = (value) => {
    return value * viewportWidth / 100;
  }

  const toPxHeight = (value) => {
    return value * viewportHeight / 100;
  }

  const toPercentHeight = value => {
    return value * 100 / viewportHeight;
  }

  const toPercentWidth = value => {
    return value * 100 / viewportWidth;
  }

  const widthToHeightPx = (value,aspectRatio) => {
    return toPxWidth(value) / aspectRatio;
  }

  const scaleHeightPercentPerfect = (widthValue,aspectRatio = 1) => {
    return `${toPercentHeight( toPxWidth(widthValue) / aspectRatio) }%`
  }


  return (
    <AnimationContext.Provider {...props} value = {{
      isAnimate: animateLabel === "animate",
      vh: viewportHeight,
      vw: viewportWidth,
      toPxWidth,
      toPxHeight,
      toPercentHeight,
      toPercentWidth,
      scaleHeightPercentPerfect,

      widthToHeightPx,
      sizeFactor,
      sizeFactorWidth,
      //sections
      ref1,
      ref2,
      ref3,
      ref9,
      currentSection,
      scrollRef,
      inView1,
      inView9
    }}>
      {children}
      <div className={styles.panel}>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080, behavior: 'smooth' 
          });
        }}>
          1
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 2, behavior: 'smooth' 
          });
        }}>
          2
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 3, behavior: 'smooth' 
          });
        }}>
          3 
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 4, behavior: 'smooth' 
          });
        }}>
          4
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 5, behavior: 'smooth' 
          });
        }}>
          5
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 6, behavior: 'smooth' 
          });
        }}>
          6
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 7, behavior: 'smooth' 
          });
        }}>
          7
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 8, behavior: 'smooth' 
          });
        }}>
          8
        </button>
        <button className={styles.button} onClick = {() => { 
          scrollRef.current.scroll({ 
            top: 1080 * 9, behavior: 'smooth' 
          });
        }}>
          9
        </button>
      </div>
    </AnimationContext.Provider>
  )
}

const useAnimationContext = () => {
  return React.useContext(AnimationContext) ?? {};
}

export { AnimationProvider , useAnimationContext}