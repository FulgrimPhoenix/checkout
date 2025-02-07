import { Container, styled } from "@mui/material";

export const AppRoot = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100dvh",
  padding: "0",

  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0",
  },
}));

export const MainContent = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
