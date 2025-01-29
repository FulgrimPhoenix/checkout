import { Paper, styled } from "@mui/material";

export const FormContainerRoot = styled(Paper)({
  boxSizing: "border-box",
  "@media (min-width: 648px)": {
    margin: "112px auto 48px",
    padding: "24px",
  },
});
