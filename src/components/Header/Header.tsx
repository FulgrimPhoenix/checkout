import { Toolbar, Typography } from "@mui/material";
import { HeaderRoot } from "./HeaderRoot.styles";

export const Header = () => {
  return (
    <HeaderRoot position="static" color="default">
      <Toolbar>
        <Typography component="h6" variant="h6" color="textPrimary">
          Company name
        </Typography>
      </Toolbar>
    </HeaderRoot>
  );
};
