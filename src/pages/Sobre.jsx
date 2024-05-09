import { Typography, Button, Paper, Divider, Box } from "@mui/material";
import React from "react";

export default function Sobre() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} sx={{ margin: 4, padding: 2, mt: 12 }}>
        <Typography variant="h5" gutterBottom>
          Circuito FTMS de Beach Tênnis 2024
        </Typography>
        <Typography variant="subtitle1">Categorias Disponíveis:</Typography>
        <Typography paragraph>
          O Circuito FTMS de Beach Tênnis oferece competições nas categorias
          Femininas, Masculinas e Mistas, divididas em PROA, A, B, C Iniciante
          (D), Sub 14, Sub 18, 40+ e 50+.
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1">Participação e Pontuação:</Typography>
        <Typography paragraph>
          As etapas são abertas ao público geral com cadastro CBT, porém,
          somente os atletas filiados à FTMS acumularão pontos no Ranking
          oficial da entidade. Os primeiros colocados terão a honra de integrar
          a equipe da Seleção MS de Beach Tennis, representando o Estado na Copa
          das Federações, um prestigioso evento nacional da Confederação
          Brasileira de Tênis.
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" gutterBottom>
          Oportunidade para Marcas e Empresas:
        </Typography>
        <Typography paragraph>
          Dê um impulso à sua marca ou empresa ao conectar-se com um público
          apaixonado por Beach Tênnis! Imagine o impacto de associar sua marca a
          um evento que celebra a energia e a comunidade. Esta é sua chance de
          criar laços fortes com pessoas que compartilham das mesmas
          experiências e valores.
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Button
          href="https://wa.link/50r12m"
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
        >
          Transforme esta Oportunidade em Realidade
        </Button>
        <Typography paragraph sx={{ mt: 2 }}>
          Pronto para transformar essa oportunidade em realidade? Clique no
          botão acima e embarque nessa jornada de sucesso conosco!
        </Typography>
      </Paper>
    </Box>
  );
}
