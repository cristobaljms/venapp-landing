import React, { useState } from "react";
import NavHome from "./NavHome";
import NavLink from "./NavLink";
import styles from "../../styles/Navbar.module.css";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const onClickMobileMenu = () => {
    const selectElement = (element) => document.querySelector(element);
    selectElement(".hamburger").classList.toggle("active");
    setOpen(!open);
  };

  return (
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
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div className={`hamburger-container ${open ? " close" : ""}`}>
          <div className="hamburger" onClick={onClickMobileMenu}>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.navbarOpened}>
          <NavLink href="/#descubre" delay={0.1}>
            <span onClick={onClickMobileMenu}>Descubre</span>
          </NavLink>
          <NavLink href="/#descargas" delay={0.3}>
            <button
              style={{
                backgroundColor: "white",
                color: "#201D3C",
                borderRadius: "9px",
                fontWeight: "800 !important",
                fontSize: "18px",
                padding: "10px 30px",
              }}
              onClick={onClickMobileMenu}
            >
              Descargar APP
            </button>
          </NavLink>
        </div>
      )}
      <style>
        {`
            :root {
              --transition-time: ${open ? "0.1s" : "1s"};
            }
            .hamburger-container {
              width: 40px;
              height: 25px;
              display: flex;
              opacity: 1;
              pointer-events: all;
              z-index: 100;
            }
            .hamburger {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 25px;
              cursor: pointer;
              position: relative;
            }
            .hamburger .line {
              width: 26px;
              height: 5px;
              border-radius: 3.5px;
              position: absolute;
              display: block;
              background: white;
              transition: all 650ms;
            }
            .hamburger .line:nth-child(1) {
              top: 5px;
            }
            .hamburger .line:nth-child(2) {
              top: 15px;
            }
            .hamburger.active .line:nth-child(1) {
              transform: translateY(7px) rotate(45deg);
            }
            .hamburger.active .line:nth-child(2) {
              transform: translateY(-3px) rotate(-45deg);
            }
        `}
      </style>
    </nav>
  );
};

export default NavMobile;
