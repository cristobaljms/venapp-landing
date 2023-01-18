import { useRef, useContext } from "react";
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


import useIsomorphicLayoutEffect from "../src/animation/useIsomorphicLayoutEffect";
import { SmootherContext } from "../src/context/SmootherContext";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap-trial/dist/ScrollToPlugin";
import { AnimationProvider } from "../src/context/AnimationContext";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const IndexPage = () => {
  const smoother = useContext(SmootherContext);

  useIsomorphicLayoutEffect(() => {
    smoother && smoother.effects("[data-speed], [data-lag]", {});

    return () => {
      smoother && smoother.effects().forEach((t) => t.kill());
    };
  }, [smoother]);

  function scrollTo() {
    smoother && smoother.scrollTo("#Section4", true, "center center");
  }

  return (
    <AnimationProvider>
      <Wrapper
        url=""
        title="VenApp"
        description=""
        twitter=""
        imageUrl=""
        imageAlt=""
      >
        <PhoneFrame>
          <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
          </div>
        </PhoneFrame>
      </Wrapper>  
    </AnimationProvider>
  );
};

export default IndexPage;
