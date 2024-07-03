import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Tab,
  Typography,
  styled,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import ModalSubscribe from "./ModalSubscribe";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Regulamento from "../img/REGULAMENTO-Federacao-Sul-Matogrossense-de-Tenis.pdf";

export default function Home1() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="home"
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
        onClick={handleOpen}
        //href="/inscricoes"
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
        Clique aqui para se inscrever
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle textAlign={"center"}>
          Circuito BT1000 - Campo Grande
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText>
            <Box
              sx={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <Typography>Data: 26/07/2024 a 28/07/2024</Typography>
              <Typography>Local: Golfit Arena - Campo Grande</Typography>
            </Box>
            <Paper elevation={3} sx={{ marginTop: 1, padding: 1 }}>
              <Typography variant="h5" gutterBottom>
                Detalhes da Inscrição
              </Typography>
              <Typography paragraph>
                <b>
                  As inscrições do Circuito são INDIVIDUAIS.
                </b>
              </Typography>
              <Typography paragraph>
                Para se inscrever, os atletas devem estar cadastrados no Tênis
                Integrado, caso ainda não tenha cadastro clique no botão abaixo
                para se registrar. Após se cadastrarem, poderão acessar o
                sistema para completar o cadastro com todas as informações
                necessárias. Em seguida, prossiga com a inscrição e efetue o
                pagamento para garantir sua participação.
              </Typography>
              <Button href="https://www.tenisintegrado.com.br/" target="_blank">
                Inscreva-se no Tennis Integrado
              </Button>
              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1">
                Informações de Pagamento:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Os valores das inscrições estão detalhados abaixo. As categorias Sub14 e Pro/A possuem valores especiais, listados ao final deste texto." />
                </ListItem>
              </List>
              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1">
                Critérios de Elegibilidade:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Esta etapa é válida para o Ranking Estadual FTMS 2024 e o Ranking Classificatório da Copa das Federações CBT, exceto na categoria D." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Para competir no RANKING FTMS, é essencial ser um atleta filiado adimplente." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Atletas Sub12 são isentos de anuidade. Atletas Sub10 têm isenção tanto da anuidade quanto das inscrições." />
                </ListItem>
              </List>
              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1">Condições Especiais:</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="A premiação em dinheiro para a categoria Pro/A será efetuada apenas se houver um mínimo de 5 duplas inscritas." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ao inscrever-se em qualquer etapa do Circuito Estadual de Beach Tennis FTMS, o atleta declara estar ciente e concordar com o Regulamento de Beach Tennis 2024 e o Código de Conduta anexado." />
                </ListItem>
                <Button href={Regulamento}>Ver Regulamento</Button>
              </List>
            </Paper>

            <Paper elevation={3} sx={{ marginTop: 1, padding: 1 }}>
              <Typography variant="h6" gutterBottom>
                Valores de Inscrição
              </Typography>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Acima de 14 anos não filiados:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1ª inscrição: R$ 130,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2ª inscrição: R$ 90,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3ª inscrição: R$ 70,00" />
                </ListItem>
              </List>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Acima de 14 anos filiados:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1ª inscrição: R$ 110,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2ª inscrição: R$ 80,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3ª inscrição: R$ 60,00" />
                </ListItem>
              </List>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Sub14 não filiado:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1ª inscrição: R$ 80,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2ª inscrição: R$ 70,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3ª inscrição: R$ 60,00" />
                </ListItem>
              </List>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Sub14 filiado:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1ª inscrição: R$ 70,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2ª inscrição: R$ 60,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3ª inscrição: R$ 50,00" />
                </ListItem>
              </List>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Masculina e Feminina Pro/A não filiado:
              </Typography>
              <ListItem>
                <ListItemText primary="R$ 150,00" />
              </ListItem>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Masculina e Feminina Pro/A filiado:
              </Typography>
              <ListItem>
                <ListItemText primary="R$ 130,00" />
              </ListItem>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Mista Pro/A não filiado:
              </Typography>
              <ListItem>
                <ListItemText primary="R$ 130,00" />
              </ListItem>
              <Divider />

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Mista Pro/A filiado:
              </Typography>
              <ListItem>
                <ListItemText primary="R$ 110,00" />
              </ListItem>
              <Divider />
            </Paper>
          </DialogContentText>
          <DialogActions sx={{ marginTop: "5%" }}>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button href="/inscricoes" variant="outlined">
              Continuar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
