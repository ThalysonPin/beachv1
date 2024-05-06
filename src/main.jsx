import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles.scss";
import AppRoutes from "./Routes.jsx";
import Topbar from "./components/Topbar.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Importe o tema personalizado

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Topbar />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
