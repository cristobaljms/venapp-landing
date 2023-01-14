import { useRouter } from "next/router";
import { TransitionProvider } from "../src/context/TransitionContext";
import PageTransition from "../src/components/Page-Transition";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <TransitionProvider>
      <PageTransition route={router.asPath}>
        <Component {...pageProps} />
      </PageTransition>
    </TransitionProvider>
  );
}
