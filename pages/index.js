import React, { useRef, useEffect } from "react";
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
import Section2Image from "../src/components/Section2Image";
import AnimationContext, { AnimationProvider } from "../src/context/AnimationContext";
import { throttle } from "lodash";
import { useScrollDirection } from "react-use-scroll-direction";
import { Section10 } from './../src/sections/Section10';

import ReactFullpage from '@fullpage/react-fullpage';
import Button from "../src/components/Button";
import { useWindowHeight } from "@react-hook/window-size";

function waitForScrollEnd() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
}

const IndexPage = () => {
  const scrollRef = useRef();

  const scrollingRef = useRef(false);
  const sectionRef = useRef(0);
  const { isScrollingUp } = useScrollDirection(scrollRef.current ?? undefined);
  const isScrollingUpRef = useRef(isScrollingUp);
  const h = useWindowHeight()

  const onPress = (pos) => {

    let section = sectionRef.current;

    console.log("SECTION",sectionRef.current);

    if(pos !== "bottom"){
      sectionRef.current--;
    }else {
      sectionRef.current++;
    }

    scrollRef.current.scroll({
      top: h * sectionRef.current,
      behavior: "smooth",
    });

  }

  useEffect(() => {
    let isScrollUp = false;

    const d = throttle(() => {
      waitForScrollEnd().then(() => {
        if (isScrollUp) {
          sectionRef.current > 0 && sectionRef.current--;
        } else {
          sectionRef.current < 9 && sectionRef.current++;
        }

        scrollingRef.current = false;
      });
    }, 1800);

    const handleWheel = (event) => {
      event.preventDefault();

      isScrollUp = event.wheelDelta > 0;

      let scrolling = scrollingRef.current;
      let section = sectionRef.current;

      if (!scrolling) {
        scrolling = true;

        scrollRef.current.scroll({
          top: h * section,
          behavior: "smooth",
        });
      }

      d();
    };

    //scrollRef.current?.addEventListener?.("wheel", handleWheel);

    return () => {
      //scrollRef?.current?.removeEventListener("wheel", handleWheel);
    };
  }, []);


  return (
    <AnimationProvider scrollRef={scrollRef}>
      <Wrapper
        url=""
        title="VenApp"
        description=""
        twitter=""
        imageUrl=""
        imageAlt=""
      >
        <div className="social-networks">
          <a
            href="https://www.facebook.com/venappredsocial"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/img/facebook.png" alt="" width={65} height={65} />
          </a>
          <a
            href="https://twitter.com/VenAppSocial"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/img/twitter.png" alt="" width={65} height={65} />
          </a>
          <a
            href="https://www.instagram.com/venappsocial/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/img/instagram.png"
              alt=""
              width={65}
              height={65}
            />
          </a>
        </div>
        <div className="scroll-container" ref={scrollRef}>
          <AnimationContext.Consumer>
            {({ inView1 }) => {
              return !inView1 && <Button 
                position="top" 
                onClick = {() => {
                  onPress("top")
                }}
              />
            }}
          </AnimationContext.Consumer>
          <AnimationContext.Consumer>
            {({ inView9 }) => {
              return !inView9 && <Button 
                position="bottom" 
                onClick = {() => {
                  onPress("bottom")
                }}
              />
            }}
          </AnimationContext.Consumer>
          <PhoneFrame>
            <Section1 />
            <Section2Image />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section7 />
            <Section6 />
            <Section8 />
            <Section9 />
            <Section10 />
          </PhoneFrame>
        </div>
      </Wrapper>
    </AnimationProvider>
  );
};

export default IndexPage;
