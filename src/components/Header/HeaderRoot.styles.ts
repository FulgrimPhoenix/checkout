import { AppBar, styled } from "@mui/material";

export const HeaderRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  minHeight: "64px",
}));
