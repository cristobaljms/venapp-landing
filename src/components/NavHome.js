import { gsap } from "gsap-trial";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";

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
      <span ref={icon} style={{ display: "inline-block", opacity: 0 }}>
        <Image
          src="/assets/img/LOGO.png"
          alt=""
          width={207}
          height={47}
          style={{
            position: "relative",
            left: "4px",
          }}
        />
      </span>
    </Link>
  );
};

export default NavHome;
