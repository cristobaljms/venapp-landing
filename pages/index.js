import { useRef, useContext } from "react";
import Wrapper from "../src/layout/Wrapper";
import { Scene1 } from "../src/scenes/Scene1";
import { Scene2 } from "../src/scenes/Scene2";
import { Scene3 } from "../src/scenes/Scene3";

import useIsomorphicLayoutEffect from "../src/animation/useIsomorphicLayoutEffect";
import { SmootherContext } from "../src/context/SmootherContext";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap-trial/dist/ScrollToPlugin";

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
      </div>
    </Wrapper>
  );
};

export default IndexPage;
