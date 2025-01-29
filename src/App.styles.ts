import { Container, styled } from "@mui/material";

export const AppRoot = styled(Container)({
  width: "100%",
  boxShadow: "none",
  "@media (min-width:1200px)": {
    maxWidth: "100%",
  },
  "@media (min-width:600px)": {
    padding: "0",
  },
});

export const MainContent = styled("main")({
  margin: "64px auto",
  width: "600px",
});
