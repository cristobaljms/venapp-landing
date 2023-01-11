import { Box } from "theme-ui"

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        position: "relative",
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  )
}

export default Main
