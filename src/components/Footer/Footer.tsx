import { Link, Typography } from "@mui/material";
import { FooterRoot } from "./Footer.styles";
import theme from "src/styles/theme";

export const Footer = () => {
  return (
    <FooterRoot>
      <Typography
        color={theme.palette.text.secondary}
        textAlign="center"
        variant="body2"
      >
        Copyright ©{" "}
        <Link
          href={"https://mui.com"}
          underline="hover"
          color={theme.palette.text.secondary}
        >
          Your Website
        </Link>{" "}
        2025.
      </Typography>
    </FooterRoot>
  );
};
