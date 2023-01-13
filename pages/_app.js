import '../styles/globals.css'
import { poppins } from '../config/fonts';

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
    `}</style>
    <Component {...pageProps} />
    </>
  ) 
}
