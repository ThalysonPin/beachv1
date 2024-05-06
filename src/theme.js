import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9800", // its a orange color to button
      contrastText: "#fff", // text color my man
      "&:hover": {
        background: "#f1f1f1 !import",
      },
    },
    secondary: {
      main: "#fff",
      contrastText: "#ff9800",
      "&:hover": {
        background: "#f1f1f1",
      },
    },
  },
});

export default theme;
