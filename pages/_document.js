import { Html, Head, Main, NextScript } from "next/document";
import * as gtm from "../lib/gtm";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta property="og:url" content="https://venapp.com/" />
        <meta property="al:android:url" content="https://venapp.com/" />
        <meta
          property="al:android:package"
          content="com.techandpeople.techchat.app"
        />
        <meta property="al:android:app_name" content="VenApp" />
        <meta property="al:web:url" content="https://venapp.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtm.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
