const Footer = (props) => {

  return (
    <footer style={{ 
        width: "100%",
        backgroundColor: "#F3F3F8",
    }}>
        <div className="container" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            paddingBottom: "2rem",
        }}>
            <div style={{
            }}>
                <img src="/assets/img/LOGO.png" style={{
                    width: "120px",
                    height: "27px"
                }}/>
            </div>
            <p>Ven App © 2023</p>
        </div>
    </footer>
  );
};

export default Footer;
