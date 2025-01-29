import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    text: {
      primary: "#000",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
  },
});

export default theme;
