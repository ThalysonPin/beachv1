import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contato() {
  return (
    <Box
      sx={{
        background: "white",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        mb="30px"
        sx={{
          color: "orange",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <SportsTennisIcon sx={{ fontSize: "3rem" }} /> Contato
      </Typography>
      <Stack
        spacing={2}
        alignItems="center"
        border="1px solid orange"
        sx={{ minWidth: "38vw", padding: "30px", borderRadius: "10px" }}
      >
        <TextField
          id="outlined-basic"
          label="Seu Nome"
          variant="outlined"
          fullWidth
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Seu E-mail"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="standard-multiline-flexible"
          label="Escreva sua mensagem..."
          multiline
          maxRows={16}
          variant="outlined"
        />

        <Button variant="contained">Continuar</Button>

        <Box>
          <Button href="https://wa.link/sn53xl" color="success">
            <WhatsAppIcon sx={{ fontSize: "2rem" }} />
          </Button>

          <Button
            href="https://www.instagram.com/circuitoftms/"
            sx={{ color: "purple" }}
          >
            <InstagramIcon sx={{ fontSize: "2rem" }} />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
