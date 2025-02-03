import { Paper, styled } from "@mui/material";

export const FormContainerRoot = styled(Paper)({
  boxSizing: "border-box",
  maxWidth: "600px",
  padding: "16px",
  margin: "24px 16px 0",
  "@media (min-width: 648px)": {
    margin: "48px auto 0",
    padding: "24px",
  },
});
