import React from "react";
import { Box, Button, Stack, Tab, Typography, styled } from "@mui/material";
import Hometabs from "./Hometabs";

export default function Home3() {
  return (
    <>
      <Stack
        sx={{
          height: "100vh",
          textAlign: "center",
          alignItems: "center",
          paddingTop: "3%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "500",
            width: "59%",
            "@media (max-width: 785px)": {
              fontSize: "2rem",
            },
            "@media (max-width: 490px)": {
              fontSize: "1.8rem",
              width: "90%",
            },
          }}
        >
          Acompanhe de perto os torneios do Mato Grosso do Sul
        </Typography>

        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Hometabs />
        </Box>
      </Stack>
    </>
  );
}
