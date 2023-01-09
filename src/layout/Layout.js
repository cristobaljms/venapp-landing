import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import { useEffect, useContext } from "react"
import { TransitionContext } from "../context/TransitionContext"
import { Box } from "theme-ui"
import Head from "./Head"
import Style from "./Style"
import Main from "./Main"


const Layout = (props) => {
  const { setBackground } = useContext(TransitionContext)

  useEffect(() => {
    setBackground(props.background || "white")
  }, [props.background])

  return (
    <>
      <Head {...props} />
      <Main>{props.children}</Main>
      <Style />
    </>
  )
}

export default Layout
