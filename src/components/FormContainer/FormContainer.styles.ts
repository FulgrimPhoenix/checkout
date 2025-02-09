import { Paper, styled } from "@mui/material";

export const FormContainerRoot = styled(Paper)({
  boxSizing: "border-box",
  maxWidth: "600px",
  padding: "16px",
  margin: "24px 16px 0",
  [theme.breakpoints.up("sm")]: {
    margin: "48px auto 0",
    padding: "24px",
  },
});
