import { useState, useRef } from "react";
import Wrapper from "../src/layout/Wrapper";
import { Section1 } from "../src/sections/Section1";
import { Section2 } from "../src/sections/Section2";
import { Section3 } from "../src/sections/Section3";
import { Section4 } from "../src/sections/Section4";
import { Section6 } from "../src/sections/Section6";
import { Section5 } from "../src/sections/Section5";
import { Section7 } from "../src/sections/Section7";
import { Section8 } from "../src/sections/Section8";
import { Section9 } from "../src/sections/Section9";
import { Section10 } from "../src/sections/Section10";

import useIsomorphicLayoutEffect from "../src/animation/useIsomorphicLayoutEffect";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap-trial/dist/ScrollToPlugin";

import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const IndexPage = () => {
  const [section, setSection] = useState(2);

  const stepref_1 = useRef();
  const stepref_2 = useRef();
  const stepref_3 = useRef();
  const stepref_4 = useRef();
  const stepref_5 = useRef();
  const stepref_6 = useRef();
  const stepref_7 = useRef();
  const stepref_8 = useRef();
  const stepref_9 = useRef();
  const stepref_10 = useRef();

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const listener = (e) => {
    if (window.scrollY >= 0 && window.scrollY < stepref_2.current.offsetTop) {
      setSection(2);
    }
    if (
      window.scrollY >= stepref_2.current.offsetTop &&
      window.scrollY < stepref_3.current.offsetTop
    ) {
      setSection(3);
    }
    if (
      window.scrollY >= stepref_3.current.offsetTop &&
      window.scrollY < stepref_4.current.offsetTop
    ) {
      setSection(4);
    }
    if (
      window.scrollY >= stepref_4.current.offsetTop &&
      window.scrollY < stepref_5.current.offsetTop
    ) {
      setSection(5);
    }
    // if (
    //   window.scrollY >= stepref_5.current.offsetTop &&
    //   window.scrollY < stepref_6.current.offsetTop
    // ) {
    //   setSection(6);
    // }
    if (
      window.scrollY >= stepref_5.current.offsetTop &&
      window.scrollY < stepref_7.current.offsetTop
    ) {
      setSection(7);
    }
    // if (
    //   window.scrollY >= stepref_7.current.offsetTop &&
    //   window.scrollY < stepref_8.current.offsetTop
    // ) {
    //   setSection(8);
    // }
    if (
      window.scrollY >= stepref_7.current.offsetTop &&
      window.scrollY < stepref_9.current.offsetTop
    ) {
      setSection(9);
    }
    if (
      window.scrollY >= stepref_9.current.offsetTop &&
      window.scrollY < stepref_10.current.offsetTop
    ) {
      setSection(10);
    }
  };

  return (
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
          <img src="/assets/img/instagram.png" alt="" width={65} height={65} />
        </a>
      </div>

      <Link
        activeClass="active"
        to={`section${section}`}
        spy={true}
        smooth={true}
        duration={400}
      >
        <div className="path-button">
          <img src="/assets/img/flecha.png" alt="" />
        </div>
      </Link>

      <section ref={stepref_1}>
        <Section1 />
      </section>
      <section ref={stepref_2}>
        <Section2 />
      </section>
      <section ref={stepref_3}>
        <Section3 />
      </section>
      <section ref={stepref_4}>
        <Section4 />
      </section>
      <section ref={stepref_5}>
        <Section5 />
      </section>
      {/* <section ref={stepref_6}>
        <Section6 />
      </section> */}
      <section ref={stepref_7}>
        <Section7 />
      </section>
      {/* <section ref={stepref_8}>
        <Section8 />
      </section> */}
      <section ref={stepref_9}>
        <Section9 section={section} />
      </section>
      <section ref={stepref_10}>
        <Section10 />
      </section>
    </Wrapper>
  );
};

export default IndexPage;
