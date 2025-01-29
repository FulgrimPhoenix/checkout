import { AppBar, Toolbar, Typography } from "@mui/material";
import { HeaderRoot } from "./HeaderRoot.styles";

export const Header = () => {
  return (
    <HeaderRoot position="absolute">
      <Toolbar>
        <Typography component="h6" variant="h6" color="textPrimary">
          Company name
        </Typography>
      </Toolbar>
    </HeaderRoot>
  );
};
