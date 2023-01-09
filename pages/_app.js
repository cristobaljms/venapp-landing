import { TransitionProvider } from "../src/context/TransitionContext"
import TransitionLayout from "../src/animation/TransitionLayout"
import { Box } from "theme-ui"

export default function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </TransitionLayout>
    </TransitionProvider>
  )
}
