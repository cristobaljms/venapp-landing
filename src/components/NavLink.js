import { gsap } from "gsap-trial";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href, delay }) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.set(el.current, { y: 20 });
    gsap.to(el.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out",
    });
  }, []);

  const router = useRouter();
  return (
    <Link
      ref={el}
      href={href}
      style={{
        opacity: 0,
        padding: 24,
        marginTop: 1,
        fontSize: "18px",
        fontWeight: 500,
        display: "inline-block",
        textDecoration: "none",
        color: "white",
        cursor: "pointer",
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
