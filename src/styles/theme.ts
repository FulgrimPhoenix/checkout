import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#212121",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.52)",
          "&.Mui-active": {
            color: "#90caf9",
          },
          "&.Mui-completed": {
            color: "#90caf9",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottomColor: "rgba(255, 255, 255, 0.7)",
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#90caf9",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    background: {
      default: "#121212",
      paper: "#424242",
    },
  },
});

export default theme;
