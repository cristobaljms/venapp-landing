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

  // useIsomorphicLayoutEffect(() => {
  //   let sections = gsap.utils.toArray("section"),
  //     currentSection = sections[0];

  //   gsap.defaults({ overwrite: "auto", duration: 0.3 });

  //   // stretch out the body height according to however many sections there are.
  //   gsap.set("body", { height: sections.length * 100 + "vh" });

  //   // create a ScrollTrigger for each section
  //   sections.forEach((section, i) => {
  //     ScrollTrigger.create({
  //       // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
  //       start: () => (i - 0.5) * innerHeight,
  //       end: () => (i + 0.5) * innerHeight,
  //       // when a new section activates (from either direction), set the section accordinglyl.
  //       onToggle: (self) => self.isActive && setSection(section),
  //     });
  //   });

  //   function setSection(newSection) {
  //     if (newSection !== currentSection) {
  //       gsap.to(currentSection, { scale: 1, autoAlpha: 0 });
  //       gsap.to(newSection, { scale: 1, autoAlpha: 1 });
  //       currentSection = newSection;
  //     }
  //   }
  // }, []);

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
    if (
      window.scrollY >= stepref_5.current.offsetTop &&
      window.scrollY < stepref_6.current.offsetTop
    ) {
      setSection(6);
    }
    if (
      window.scrollY >= stepref_6.current.offsetTop &&
      window.scrollY < stepref_7.current.offsetTop
    ) {
      setSection(7);
    }
    if (
      window.scrollY >= stepref_7.current.offsetTop &&
      window.scrollY < stepref_8.current.offsetTop
    ) {
      setSection(8);
    }
    if (
      window.scrollY >= stepref_8.current.offsetTop &&
      window.scrollY < stepref_9.current.offsetTop
    ) {
      setSection(9);
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
      <div className="content-path-button">
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
      </div>

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
      <section ref={stepref_6}>
        <Section6 />
      </section>
      <section ref={stepref_7}>
        <Section7 />
      </section>
      <section ref={stepref_8}>
        <Section8 />
      </section>
      <section ref={stepref_9}>
        <Section9 />
      </section>
    </Wrapper>
  );
};

export default IndexPage;
