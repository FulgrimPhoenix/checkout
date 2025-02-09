import { Link, Typography, useTheme } from "@mui/material";
import { FooterRoot } from "./Footer.styles";

export const Footer = () => {
  const currentTheme = useTheme();

  return (
    <FooterRoot>
      <Typography
        color={currentTheme.palette.text.secondary}
        textAlign="center"
        variant="body2"
      >
        Copyright ©{" "}
        <Link
          href={"https://mui.com"}
          underline="hover"
          color={currentTheme.palette.text.secondary}
        >
          Your Website
        </Link>{" "}
        2025.
      </Typography>
    </FooterRoot>
  );
};
