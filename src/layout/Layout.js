import Head from "./Head"
import Style from "./Style"
import Main from "./Main"


const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Main>{props.children}</Main>
      <Style />
    </>
  )
}

export default Layout
