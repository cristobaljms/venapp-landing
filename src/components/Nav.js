import NavHome from "./NavHome";
import NavLink from "./NavLink";

const Nav = () => (
  <nav
    style={{
      display: "flex",
      flexWrap: "wrap",
      padding: "24px 0",
      position: "relative",
      zIndex: 999999,
      backgroundColor: "transparent",
    }}
  >
    <div
      style={{
        width: "50%",
        paddingLeft: 24,
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      }}
    >
      <NavHome />
    </div>
    <div
      style={{
        width: "50%",
        textAlign: "right",
        paddingRight: 24,
        overflow: "hidden",
      }}
    >
      <NavLink href="/" delay={1.5}>
        Descubre
      </NavLink>
      <NavLink href="/" delay={1.6}>
        ¿Cómo Funciona?
      </NavLink>
      <NavLink href="/" delay={1.7}>
        <button
          style={{
            backgroundColor: "white",
            color: "#201D3C",
            borderRadius: "9px",
            fontWeight: "800 !important",
            fontSize: "18px",
            padding: "10px 30px"
          }}
        >
          Descargar APP
        </button>
      </NavLink>
    </div>
  </nav>
);

export default Nav;
