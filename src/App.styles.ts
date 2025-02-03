import { Container, styled } from "@mui/material";

export const AppRoot = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  padding: "0",

  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  "@media (min-width:1200px)": {
    maxWidth: "100%",
  },
  "@media (min-width:600px)": {
    padding: "0",
  },
}));

export const MainContent = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
