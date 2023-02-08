import Nav from "./Nav";
import NavMobile from "./NavMobile";
import useWindowSize from "./../hooks/useWindowSize";

const Header = (props) => {
  const { isDesktop } = useWindowSize();

  return (
    <header
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #4c27af, #7851ea)",
      }}
    >
      {isDesktop ? <Nav /> : <NavMobile />}
    </header>
  );
};

export default Header;
