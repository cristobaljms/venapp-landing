import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "react-use-scroll-direction";
import { useWindowSize } from '@react-hook/window-size'
import React from "react";
import styles from '../../styles/Motion.module.css';

const AnimationContext = React.createContext();

export default AnimationContext;

const AnimationProvider = ({children,...props}) => {

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

  // console.log("IN VIEW",{
  //   inView1,
  //   inView2,
  //   inView3,
  //   //entry1,
  //   //entry2,
  //   currentSection,
  //   isScrollingUp,
  //   width,
  //   height,
  //   sizeFactor,
  //   sizeFactorWidth
  // });

  return (
    <AnimationContext.Provider {...props} value = {{
      isAnimate: animateLabel === "animate",
      vh: viewportHeight,
      vw: viewportWidth,
      sizeFactor,
      sizeFactorWidth,
      //sections
      ref1,
      ref2,
      ref3,
      currentSection
    }}>
      {children}
      <div className={styles.panel}>
        <button className={styles.button} onClick = {() => { setAnimateLabel("initial") }}>
          initial
        </button>
        <button className={styles.button} onClick = {() => { setAnimateLabel("animate") }}>
          animate
        </button>
      </div>
    </AnimationContext.Provider>
  )
}

const useAnimationContext = () => {
  return React.useContext(AnimationContext) ?? {};
}

export { AnimationProvider , useAnimationContext}