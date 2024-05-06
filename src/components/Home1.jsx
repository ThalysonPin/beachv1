import React from "react";
import { Box, Button, Stack, Tab, Typography, styled } from "@mui/material";

export default function Home1() {
  return (
    <Box
      sx={{
        height: "100vh",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box mb={10}>
        <Typography
          className="press"
          variant="h2"
          sx={{
            "@media (max-width: 572px)": {
              fontSize: "3rem",
            },
          }}
        >
          CIRCUITO
        </Typography>
        <Typography
          className="press"
          variant="h2"
          sx={{
            "@media (max-width: 572px)": {
              fontSize: "3rem",
            },
          }}
        >
          FTMS
        </Typography>
        <Box
          sx={{
            scrollSnapAlign: "center",
            background: "orange",
            width: "85%",
            height: "3px",
            borderRadius: "6px",
            margin: "3px auto auto auto",
          }}
        ></Box>
        <Typography
          sx={{
            fontWeight: "500",
            "@media (max-width: 572px)": {
              fontSize: "2rem",
            },
          }}
          variant="h4"
        >
          2024
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "35em",
          height: "4em",
          "@media (max-width: 572px)": {
            width: "28em",
            height: "4em",
          },
        }}
      >
        Veja os Circuitos
      </Button>
    </Box>
  );
}
