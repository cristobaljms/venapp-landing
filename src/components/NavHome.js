import { gsap } from "gsap";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import Link from "next/link";
import { Box, Image } from "theme-ui";

const NavHome = () => {
  const icon = useRef();


  useIsomorphicLayoutEffect(() => {
    gsap.set(icon.current, { x: -10 });
    gsap.to(icon.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <Link href="/">
      <Box ref={icon} as="span" sx={{ display: "inline-block", opacity: 0 }}>
        <Image
          src="/assets/img/LOGO.png"
          alt=""
          sx={{
            position: "relative",
            left: "4px",
            height: 47,
          }}
        />
      </Box>
    </Link>
  );
};

export default NavHome;
