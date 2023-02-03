const Footer = (props) => {

  return (
    <footer style={{ 
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "7rem",
        paddingRight: "7rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        backgroundColor: "#F3F3F8",
    }}>
        <div style={{
        }}>
            <img src="/assets/img/privacy_terms/venAppLogo.png" style={{
                width: "160px",
                height: "97px"
            }}/>
        </div>
        <p>Ven App © 2023</p>
    </footer>
  );
};

export default Footer;
