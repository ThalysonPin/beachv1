import React from "react";
import { Box, Button, Stack, Tab, Typography, styled } from "@mui/material";
import beach from "../img/pic1.jpg";
import Regulamento from "../img/REGULAMENTO-Federacao-Sul-Matogrossense-de-Tenis.pdf";

export default function Home2() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#FFA800",
          display: "flex",
        }}
      >
        <Stack
          flex="1"
          gap={2}
          pl={5}
          sx={{ alignItems: "left", justifyContent: "center" }}
        >
          <Typography variant="h2" sx={{ color: "white", fontWeight: "500" }}>
            O caminho para o estrelato está aberto!
          </Typography>
          <Box sx={{ background: "white", height: "2px", width: "100%" }}></Box>
          <Typography component="p" sx={{ fontSize: "32px", color: "white" }}>
            O Circuito de MS é sua porta de entrada para os maiores palcos do
            beach tennis. Cada ponto conquistado aqui será sua munição para se
            classificar aos principais campeonatos nacionais e até mesmo
            internacionais.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "50%", height: "8%" }}
            href={Regulamento}
          >
            Veja o regulamento
          </Button>
        </Stack>
        <Box
          flex="1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={beach}
            alt="alt"
            style={{ borderRadius: "100px", width: "75%" }}
          />
        </Box>
      </Box>
    </>
  );
}
