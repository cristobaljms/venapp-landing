import React, { useRef, useContext } from "react";
import { gsap } from "gsap";

import { Box, Image, Text } from "theme-ui";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { TransitionContext } from "../context/TransitionContext";

export const Scene1 = () => {
  const { timeline } = useContext(TransitionContext);
  const groupRef = useRef();
  const smartphone = useRef();

  useIsomorphicLayoutEffect(() => {
    // intro animations
    // ref is an object with a current property that holds the DOM element
    gsap.to(smartphone.current, {
      opacity: 1,
      delay: 3,
      duration: 1,
      y: 0,
      ease: "elastic.out",
    });

    // outro animation
    timeline.add(
      gsap.to(smartphone.current, {
        y: -200,
        opacity: 0,
        duration: 0.25,
        ease: "power4.in",
      }),
      0
    );
  }, []);

  const perc = 0.5;
  console.log(2281*perc,4495*perc)
  const calcWidth =  `calc(100vw*${perc})`;
  const calcHeight =  `calc(auto*${perc})`;

  return (
    <Box
      sx={{
        height: ["200vh"],
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        border: "2px solid black",
      }}
    >
        <Box>

        </Box>
      <Box
        sx={{
          top: "0",
          left: "0",
          position: "absolute",
          width: calcWidth,
          height: calcHeight,
          maxHeight: "100% !important",
          border: "2px solid red",
        }}
      >
        <Image
          src="/assets/scene1/smartphone.png"
          sx={{
            position: "absolute",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          alt=""
        />
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            maxWidth: "calc(100%*0.885)",
            left:"calc(100%*0.055)",
            height: "100vh",
            maxHeight: "100% !important",
            border: "2px solid green"
          }}
        >
                    <Image
          src="/assets/scene1/group.png"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
        </Box>
      </Box>
    </Box>
  );
};

{
  /*    <Image
        src="/assets/scene1/group.png"
        sx={{
          position: "absolute",
          top: [0, 0, "30%", "20%"],
          left: "5%",
          height: ["100%", "100%", "120%", "50%"],
          opacity: 0,
          transform: "translate(0px, 100px)",
        }}
        ref={groupRef}
        alt=""
      />
      <Image
        src="/assets/scene1/smartphone.png"
        sx={{
          position: "absolute",
          top: [0, 0, "30%", "20%"],
          left: "5%",
          height: ["4700px"],
          opacity: 0,
        }}
        ref={smartphone}
        alt=""
    />*/
}
