import Head from "next/head";
import PropTypes from "prop-types";
import { FB_PIXEL_ID } from "../../lib/fpixel";

const DocHead = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={props.url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      {props.imageAlt && (
        <meta property="og:image:alt" content={props.imageAlt} />
      )}
      <meta property="og:url" content={props.url} />
      <meta
        name="twitter:card"
        content={props.imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content={props.twitter} />
      <meta name="twitter:creator" content={props.twitter} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageUrl && (
        <meta property="twitter:image" content={props.imageUrl} />
      )}
      {props.imageAlt && (
        <meta property="twitter:image:alt" content={props.imageAlt} />
      )}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
        rel="stylesheet"
      />

      <script
        async={true}
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=442c86ca-bf04-4fdc-ba3f-225ea7466c54"
      >
        {" "}
      </script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </Head>
  </>
);

DocHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  twitter: PropTypes.string,
};

export default DocHead;
