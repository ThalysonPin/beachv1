import React from "react";
import Logo1 from "../img/LOGO1.png";
import { Box, Button } from "@mui/material";
import MenuLateral from "./MenuLateral";
import { useBreakpoints } from "../hooks/useBreakpoints";
import LOGOBRANCA from "../img/LOGOBRANCA.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Topbar() {
  const random = "/";

  const breakpoints = useBreakpoints();

  return (
    <Box
      width="100vw"
      zIndex="100"
      position="fixed"
      minHeight={"4em"}
      color={"black"}
      backgroundColor={"white"}
      elevation={5}
      sx={{ borderBottom: "1px solid #f5f5f5" }}
    >
      {breakpoints.md ? (
        <MenuLateral />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #f5f5f5",
          }}
        >
          <Box
            sx={{
              flex: "1",
              background: "#ffa500",
              display: "flex",
              justifyContent: "center",
              borderRadius: "0 0 74px 0",
            }}
          >
            <a href={random}>
              <img src={LOGOBRANCA} style={{ width: "15rem" }} />
            </a>
          </Box>

          <Box
            sx={{
              flex: "3.5",
              display: "flex",
              paddingRight: "70px",
              justifyContent: "end",
              gap: "60px",
            }}
          >
            <Button
              href="/Sobre"
              variant="text"
              sx={{
                color: "black",
                borderBottom: "2px solid orange",
                fontWeight: "500",
                fontSize: "1.15rem",
              }}
            >
              Informações
            </Button>
            <Button
              href="/"
              variant="text"
              sx={{
                color: "black",
                borderBottom: "2px solid orange",
                fontWeight: "500",
                fontSize: "1.15rem",
              }}
            >
              Inscrição
            </Button>
            <Button
              href="/contato"
              variant="text"
              sx={{
                color: "black",
                borderBottom: "2px solid orange",
                fontWeight: "500",
                fontSize: "1.15rem",
              }}
            >
              Contato
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
