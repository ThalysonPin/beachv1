import React from "react";
import { Box, Button, Stack, Tab, Typography, styled } from "@mui/material";
import beach from "../img/pic1.jpg";
import Regulamento from "../img/REGULAMENTO-Federacao-Sul-Matogrossense-de-Tenis.pdf";

export default function Home2Mobile() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#FFA800",
        }}
      >
        <Stack
          gap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flex: "1",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "500",
                padding: "5% 0 5% 0",
                textAlign: "center",
              }}
            >
              O caminho para o estrelato está aberto!
            </Typography>
            <Box
              sx={{ background: "white", height: "2px", width: "50%" }}
            ></Box>
          </Stack>

          <Stack
            sx={{
              alignItems: "center",
              //justifyContent: "space-around",
              gap: "7%",
              flex: "4",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: "1.15rem",
                margin: "0 3% 0 3%",
                color: "white",
                textAlign: "center",
              }}
            >
              O Circuito é o caminho para os grandes eventos de beach tennis do
              mundo! Cada ponto te aproxima de campeonatos nacionais e
              internacionais
            </Typography>
            <Box
              component="img"
              src={beach}
              alt="alt"
              sx={{
                borderRadius: "50px",
                height: "60vw",
                "@media (max-width: 900px)": {
                  height: "55vw",
                },
                "@media (max-width: 534px)": {
                  height: "75vw",
                },
              }}
            ></Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "50%", height: "6%" }}
              href={Regulamento}
            >
              Veja o Regulamento
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
