import Head from "./Head"
import Main from "./Main"


const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Main>{props.children}</Main>
    </>
  )
}

export default Layout
