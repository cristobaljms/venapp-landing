import useWindowSize from "./../hooks/useWindowSize";

const HeaderTwo = (props) => {
  const { isDesktop } = useWindowSize();

  return (
    <header style={{ 
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#007aff",
    }}>
      <div>
        <img src="/assets/img/privacy_terms/venAppLogo.png" style={{
          width: "82px",
          height: "50",
        }}/>
      </div>
    </header>
  );
};

export default HeaderTwo;
