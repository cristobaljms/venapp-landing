const Main = ({ children }) => {
  return (
    <main
      style={{
        position: "relative",
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      {children}
    </main>
  );
};

export default Main;
