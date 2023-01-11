import { useRef, useContext, useLayoutEffect } from "react";
import Wrapper from "../src/layout/Wrapper";
import { Scene1 } from "../src/scenes/Scene1";
import { Scene2 } from "../src/scenes/Scene2";
import { Scene3 } from "../src/scenes/Scene3";
import { Scene4 } from "../src/scenes/Scene4";

import useIsomorphicLayoutEffect from "../src/animation/useIsomorphicLayoutEffect";
import { SmootherContext } from "../src/context/SmootherContext";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  const smoother = useContext(SmootherContext);
  const scene1Ref = useRef();

  useIsomorphicLayoutEffect(() => {
    smoother && smoother.effects("[data-speed], [data-lag]", {});

    return () => {
      smoother && smoother.effects().forEach((t) => t.kill());
    };
  }, [smoother]);

  function scrollTo() {
    smoother && smoother.scrollTo("#scene4", true, "center center");
  }

  return (
    <Wrapper
      url=""
      title="VenApp"
      description=""
      twitter=""
      imageUrl=""
      imageAlt=""
    >
      <div>
        <Scene1 />
        <Scene2 />
        <Scene3 />
        <Scene4 />
        <div className="path-button" onClick={scrollTo}>
          <img src="/assets/img/flecha.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default IndexPage;
