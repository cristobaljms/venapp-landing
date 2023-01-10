import { Box, Button } from "theme-ui";
import NavHome from "./NavHome";
import NavLink from "./NavLink";

const Nav = () => (
  <Box
    as="nav"
    sx={{
      display: "flex",
      flexWrap: "wrap",
      py: 3,
      position: "relative",
      zIndex: 999999,
    }}
  >
    <Box
      sx={{
        width: ["100%", "50%"],
        pl: [0, 3],
        textAlign: ["center", "left"],
        display: "flex",
        alignItems: "center",
      }}
    >
      <NavHome />
    </Box>
    <Box
      sx={{
        width: ["100%", "50%"],
        textAlign: ["center", "right"],
        pr: [0, 3],
        overflow: "hidden",
      }}
    >
      <NavLink href="/" delay={2}>
        Descubre
      </NavLink>
      <NavLink href="/" delay={2.1}>
        ¿Cómo Funciona?
      </NavLink>
      <NavLink href="/" delay={2.3}>
        <Button
          sx={{
            bg: "white",
            color: "#201D3C",
            borderRadius: "9px",
            fontWeight: "800 !important",
            fontSize: "18px",
          }}
        >
          Descargar APP
        </Button>
      </NavLink>
    </Box>
  </Box>
);

export default Nav;
