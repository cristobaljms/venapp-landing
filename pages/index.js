import React, { useRef, useContext, useEffect, useState } from "react";
import Wrapper from "../src/layout/Wrapper";
import PhoneFrame from "../src/components/PhoneFrame";
import { Section1 } from "../src/sections/Section1";
import { Section2 } from "../src/sections/Section2";
import { Section3 } from "../src/sections/Section3";
import { Section4 } from "../src/sections/Section4";
import { Section6 } from "../src/sections/Section6";
import { Section5 } from "../src/sections/Section5";
import { Section7 } from "../src/sections/Section7";
import { Section8 } from "../src/sections/Section8";
import { Section9 } from "../src/sections/Section9";
import { AnimationProvider } from "../src/context/AnimationContext";
import { useScroll } from "framer-motion";
import { debounce, throttle } from "lodash";
import { useScrollDirection } from "react-use-scroll-direction";
function waitForScrollEnd () {
  let last_changed_frame = 0
  let last_x = window.scrollX
  let last_y = window.scrollY

  return new Promise( resolve => {
      setTimeout( () => {
        resolve();
      }, 300)
  })
}


const IndexPage = () => {
  const scrollRef = useRef();

  const scrollingRef = useRef(false);
  const sectionRef = useRef(1);
  const prevSectionRef = useRef(null);
  const { isScrollingUp } = useScrollDirection(scrollRef.current ?? undefined);
  const isScrollingUpRef = useRef(isScrollingUp);

  console.log("fafdfd",isScrollingUpRef.current);

  useEffect( () => {

      document.addEventListener?.('scroll',event => {
        console.log("SCROLL",event);
      });

      console.log("Use Effect");

      let isScrollUp = false;

      const d = throttle( () => {
        waitForScrollEnd().then( () => { 
          if( isScrollUp ){
            sectionRef.current > 0 && sectionRef.current--;
          }else {
            sectionRef.current < 9 && sectionRef.current++;
          }

          scrollingRef.current = false;
          console.log("here",isScrollingUpRef.current); 
        } );
      }, 1800)

      const handleWheel = (event) => {
          event.preventDefault();
          console.log("WHEEL",event);

          isScrollUp = event.wheelDelta > 0;

          console.log("WHEEL EVENT CALLED",event);
       
          let scrolling = scrollingRef.current;
          let section = sectionRef.current;

          console.log({ section });
          
          if(!scrolling){

            scrolling = true;

            scrollRef.current.scroll({ 
              top: 1080 * section, behavior: 'smooth' 
            });
          }

          d();
      }
    
      scrollRef.current?.addEventListener?.('wheel', handleWheel)

      return () => {
        scrollRef?.current?.removeEventListener('wheel', handleWheel);
        console.log("clear")
      }

  } , [])

  return (
    <AnimationProvider scrollRef = {scrollRef}>
      <Wrapper
        url=""
        title="VenApp"
        description=""
        twitter=""
        imageUrl=""
        imageAlt=""
      >
          <div className="scroll-container" ref={scrollRef}>
          <PhoneFrame>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section7 />
            <Section6 />
            <Section8 />
            <Section9 />
          </PhoneFrame>
          </div>
      </Wrapper>  
    </AnimationProvider>
  );
};

export default IndexPage;
