import { useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist//ScrollSmoother";
import { SmootherContext } from "../src/context/SmootherContext";
import PageTransition from "../src/components/Page-Transition";
import useIsomorphicLayoutEffect from "../src/animation/useIsomorphicLayoutEffect";
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  let [smoother, setSmoother] = useState();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
    });

    setSmoother(smoother);
  }, []);

  return (
    <SmootherContext.Provider value={smoother}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <PageTransition route={router.asPath}>
            <Component {...pageProps} />
          </PageTransition>
        </div>
      </div>
    </SmootherContext.Provider>
  );
}
