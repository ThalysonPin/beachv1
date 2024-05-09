import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import pix30 from "../img/pix/pix30.png";
import Pix from "../util/Pix";
import QRCode from "qrcode";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

export default function Subscribe() {
  const [payload, setPayload] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [amount, setAmount] = useState(0);

  const handleGeneratePayload = () => {
    setPayload(getPayload());
  };

  const [pagamento, setPagamento] = useState(false);

  const [pagador, setPagador] = useState("");

  const handlePagador = (e) => {
    setPagador(e.target.value);
  };

  const [nome, setNome] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const [sobrenome, setSobrenome] = useState("");

  const handleSobrenome = (e) => {
    setSobrenome(e.target.value);
  };

  const [filiado, setFiliado] = useState("");

  const handleFiliado = (e) => {
    setFiliado(e.target.value);
  };

  const [proA, setProA] = useState("N");

  const [proAValue, setProAValue] = useState(0);

  const handleProA = (e) => {
    setProA(e.target.value);
  };

  const [category22, setCategory22] = useState("N");

  const [category1, setCategory1] = useState("N");
  const [category1Value, setCategory1Value] = useState(0);

  const [category2, setCategory2] = useState("");
  const [category2Value, setCategory2Value] = useState(0);

  const [category3, setCategory3] = useState("N");
  const [category3Value, setCategory3Value] = useState(0);

  const [category33, setCategory33] = useState("N");

  useEffect(() => {
    // Define o preço para a primeira inscrição
    if (
      category1 === "Sub 14 Mista" ||
      category1 === "Sub 14 Masculino" ||
      category1 === "Sub 14 Feminino"
    ) {
      setCategory1Value(filiado === "N" ? 80 : 70);
    } else if (category1 === "N") {
      setCategory1Value(0);
    } else {
      // Assume "Acima de 14 anos" como padrão
      setCategory1Value(filiado === "N" ? 130 : 110);
    }

    // Define o preço para a segunda inscrição
    if (
      category2 === "Sub 14 Mista" ||
      category2 === "Sub 14 Masculino" ||
      category2 === "Sub 14 Feminino"
    ) {
      setCategory2Value(filiado === "N" ? 70 : 60);
    } else if (category2 === "N") {
      setCategory2Value(0);
    } else {
      // Assume "Acima de 14 anos" como padrão
      setCategory2Value(filiado === "N" ? 90 : 80);
    }

    // Define o preço para a terceira inscrição
    if (
      category3 === "Sub 14 Mista" ||
      category3 === "Sub 14 Masculino" ||
      category3 === "Sub 14 Feminino"
    ) {
      setCategory3Value(filiado === "N" ? 60 : 50);
    } else if (category3 === "N") {
      setCategory3Value(0);
    } else {
      // Assume "Acima de 14 anos" como padrão
      setCategory3Value(filiado === "N" ? 70 : 60);
    }
  }, [category1, filiado, category2, category3]);

  const handleCategory = (e) => {
    setCategory1(e.target.value);
  };

  const [inscricao1, setInscricao1] = useState(0);

  const handleInscricao1 = (e) => {
    setInscricao1(e.target.value);
  };

  // SEGUNDA INSCRIÇÃO

  const [inscricao2, setInscricao2] = useState(0);

  const handleInscricao2 = (e) => {
    setInscricao2(e.target.value);
  };

  // TERCEIRA INSCRIÇÃO

  const [inscricao3, setInscricao3] = useState(0);
  const handleInscricao3 = (e) => {
    setInscricao3(e.target.value);
  };

  // DADOS DO PIX
  const pixData = {
    pixKey: "pagamento@circuitoftms.com.br",
    description: "Pagamento do pedido",
    merchantName: "Thalyson",
    merchantCity: "Dourados",
    txid: "CIRCUITOFTMS2024A1",
    amount: category1Value + category2Value + category3Value,
  };

  function Submit(e) {
    e.preventDefault();
    console.log(
      "CATEGORY1VALUE: ",
      category1Value + category2Value + category3Value
    );
    console.log("CATEGORY1: ", category1Value);
    console.log("CATEGORY2: ", category2Value);
    console.log("CATEGORY3: ", category3Value);

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxvJ81n5iEtE0x9Z-N0YIIxYsej-PX5c7ZASHOYxIL8v0cGE8IyviChnNV_b0xu6rh3/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const { getPayload } = Pix(pixData);

  useEffect(() => {
    if (payload) {
      QRCode.toDataURL(payload, {
        errorCorrectionLevel: "H",
      })
        .then((url) => {
          setQrCodeUrl(url);
        })
        .catch((err) => {
          console.error("Error generating QR code", err);
        });
    }
  }, [payload]);

  const [openSnack, setOpenSnack] = useState(false);

  useEffect(() => {
    // Abrir o Snackbar assim que o componente é montado
    setOpenSnack(true);

    // Configurar o timer para fechar o Snackbar após 3 segundos
    const timer = setTimeout(() => {
      setOpenSnack(false);
    }, 10000);

    // Limpar o timer caso o componente seja desmontado antes do tempo
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [openSnack2, setOpenSnack2] = useState(false);

  useEffect(() => {
    // Abrir o Snackbar assim que o componente é montado
    setOpenSnack2(true);

    // Configurar o timer para fechar o Snackbar após 3 segundos
    const timer = setTimeout(() => {
      setOpenSnack2(false);
    }, 7000);

    // Limpar o timer caso o componente seja desmontado antes do tempo
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCopyPayload = () => {
    if (payload) {
      // Criar um textarea temporário para o texto a ser copiado
      const textarea = document.createElement("textarea");
      textarea.value = payload; // Define o valor para o payload
      document.body.appendChild(textarea); // Adiciona o textarea ao body do documento
      textarea.select(); // Seleciona o conteúdo do textarea

      try {
        const successful = document.execCommand("copy"); // Executa o comando de cópia
        const msg = successful
          ? "Payload copiado com sucessooooooo!"
          : "Falha ao copiar o payload.";
        alert(msg);
      } catch (err) {
        alert("Falha ao copiar o payload.");
      }

      document.body.removeChild(textarea); // Remove o textarea do body
    }
  };

  return (
    <Box
      className="form"
      component="form"
      onSubmit={(e) => Submit(e)}
      sx={{
        background: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Snackbar
        open={openSnack}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          IMPORTANTE: A inscrição só é válida ao realizar o pagamento no final!
        </Alert>
      </Snackbar>
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
          marginTop: "1.5em",
        }}
      >
        <SportsTennisIcon sx={{ fontSize: "3rem" }} /> Inscreva-se
      </Typography>
      <Stack
        spacing={2}
        alignItems="center"
        border="1px solid orange"
        sx={{ minWidth: "50vw", padding: "30px", borderRadius: "10px" }}
      >
        <TextField
          name="Nome"
          id="outlined-basic"
          label="Nome do Atleta"
          variant="outlined"
          value={nome}
          onChange={handleNome}
          fullWidth
          required
        />

        <TextField
          name="Sobrenome"
          id="outlined-basic"
          label="Sobrenome do Atleta"
          variant="outlined"
          value={sobrenome}
          onChange={handleSobrenome}
          fullWidth
          required
        />

        <TextField
          name="Numero"
          fullWidth
          id="outlined-basic"
          label="Número + DDD"
          variant="outlined"
          required
        />

        <TextField
          name="Cidade"
          fullWidth
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          required
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filiação</InputLabel>
          <Select
            name="Filiado"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filiado}
            label="Filiação"
            onChange={handleFiliado}
          >
            <MenuItem value="N">Não sou filiado</MenuItem>
            <MenuItem value="S">Sou filiado</MenuItem>
          </Select>
        </FormControl>

        {/* Inscrição ProA */}
        {filiado && (
          <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">Inscrição ProA</InputLabel>
            <Select
              defaultValue="N"
              label="Inscrição ProA"
              name="Categoria1"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={proA}
              onChange={handleProA}
            >
              <MenuItem value={0}>
                <b>Não jogar</b>
              </MenuItem>
              <MenuItem value="ProAMasc">ProA Masculino</MenuItem>
              <MenuItem value="ProAFem">ProA Feminino</MenuItem>
              <MenuItem value="ProAMista">ProA Mista</MenuItem>
              <MenuItem value="ProAMascMista">
                ProA Masculino + ProA Mista
              </MenuItem>
              <MenuItem value="ProAFemMista">
                ProA Feminino + ProA Mista
              </MenuItem>
            </Select>
          </FormControl>
        )}

        {proA !== "N" ? (
          <TextField
            name="DuplaProA"
            fullWidth
            id="outlined-basic"
            label="Dupla ProA (nome e sobrenome)"
            variant="outlined"
          />
        ) : (
          <></>
        )}

        {/* INSCRIÇÃO NORMAL */}
        {proA === 0 || proA === "" ? (
          <>
            <FormControl fullWidth>
              <InputLabel htmlFor="grouped-select">
                Primeira Inscrição Normal
              </InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                value={category1}
                label="Primeira Inscrição Normal"
                onChange={handleCategory}
                name="Category1"
              >
                <MenuItem value="N">
                  <b>Não jogar</b>
                </MenuItem>
                <ListSubheader>
                  <b>-- Mista</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Mista">Sub 14</MenuItem>
                <MenuItem value="Categoria A Mista">Categoria A</MenuItem>
                <MenuItem value="Categoria B Mista">Categoria B</MenuItem>
                <MenuItem value="Categoria C Mista">Categoria C</MenuItem>
                <MenuItem value="Sub18 Mista">Sub18</MenuItem>
                <MenuItem value="+40 Mista">+40</MenuItem>
                <MenuItem value="+50 Mista">+50</MenuItem>
                <ListSubheader>
                  <b>-- Masculino</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Masculino">Sub 14</MenuItem>
                <MenuItem value="Categoria A Masculino">Categoria A</MenuItem>
                <MenuItem value="Categoria B Masculino">Categoria B</MenuItem>
                <MenuItem value="Categoria C Masculino">Categoria C</MenuItem>
                <MenuItem value="Categoria D Masculino">Categoria D</MenuItem>
                <MenuItem value="Sub18 Masculino">Sub18</MenuItem>
                <MenuItem value="+40 Masculino">+40</MenuItem>
                <MenuItem value="+50 Masculino">+50</MenuItem>

                <ListSubheader>
                  <b>-- Feminino</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Feminino">Sub 14</MenuItem>
                <MenuItem value="Categoria A Feminino">Categoria A</MenuItem>
                <MenuItem value="Categoria B Feminino">Categoria B</MenuItem>
                <MenuItem value="Categoria C Feminino">Categoria C</MenuItem>
                <MenuItem value="Categoria D Feminino">Categoria D</MenuItem>
                <MenuItem value="Sub18 Feminino">Sub18</MenuItem>
                <MenuItem value="+40 Feminino">+40</MenuItem>
                <MenuItem value="+50 Feminino">+50</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="Dupla1"
              fullWidth
              id="outlined-basic"
              label="Dupla 1 (nome e sobrenome)"
              variant="outlined"
            />
          </>
        ) : proA === "ProAMasc" ||
          proA === "ProAFem" ||
          proA === "ProAMista" ? (
          <></>
        ) : (
          proA === "ProAMascMista" ||
          (proA === "ProAFemMista" && (
            //TERCEIRA INSCRIÇÃO NORMAL

            <FormControl fullWidth>
              <InputLabel htmlFor="grouped-select">
                Terceira Inscrição Normal
              </InputLabel>
              <Select
                defaultValue="N"
                id="grouped-select"
                value={category3}
                label="Primeira Inscrição Normal"
                onChange={(e) => setCategory3(e.target.value)}
                name="Category3"
              >
                <MenuItem value="N">
                  <b>Não jogar</b>
                </MenuItem>
                <ListSubheader>
                  <b>-- Mista</b>
                </ListSubheader>
                <MenuItem value={1}>Sub 14</MenuItem>
                <MenuItem value={1}>Categoria A</MenuItem>
                <MenuItem value={2}>Categoria B</MenuItem>
                <MenuItem value={1}>Categoria C</MenuItem>
                <MenuItem value={2}>Sub18</MenuItem>
                <MenuItem value={2}>+40</MenuItem>
                <MenuItem value={2}>+50</MenuItem>
                <ListSubheader>
                  <b>-- Masculino</b>
                </ListSubheader>
                <MenuItem value={1}>Sub 14</MenuItem>
                <MenuItem value={1}>Categoria A</MenuItem>
                <MenuItem value={2}>Categoria B</MenuItem>
                <MenuItem value={1}>Categoria C</MenuItem>
                <MenuItem value={2}>Categoria D</MenuItem>
                <MenuItem value={2}>Sub18</MenuItem>
                <MenuItem value={2}>+40</MenuItem>
                <MenuItem value={2}>+50</MenuItem>

                <ListSubheader>
                  <b>-- Feminino</b>
                </ListSubheader>
                <MenuItem value={1}>Sub 14</MenuItem>
                <MenuItem value={1}>Categoria A</MenuItem>
                <MenuItem value={2}>Categoria B</MenuItem>
                <MenuItem value={1}>Categoria C</MenuItem>
                <MenuItem value={2}>Categoria D</MenuItem>
                <MenuItem value={2}>Sub18</MenuItem>
                <MenuItem value={2}>+40</MenuItem>
                <MenuItem value={2}>+50</MenuItem>
              </Select>
            </FormControl>
          ))
        )}

        {category1 !== "N" && (
          <>
            <FormControl fullWidth>
              <InputLabel htmlFor="grouped-select">
                Segunda Inscrição Normal
              </InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                value={category2}
                label="Primeira Inscrição Normal"
                onChange={(e) => setCategory2(e.target.value)}
                name="Category2"
              >
                <MenuItem value="N">
                  <b>Não jogar</b>
                </MenuItem>
                <ListSubheader>
                  <b>-- Mista</b>
                </ListSubheader>
                <MenuItem value={2}>Sub 14</MenuItem>
                <MenuItem value="Categoria A Mista">Categoria A</MenuItem>
                <MenuItem value="Categoria B Mista">Categoria B</MenuItem>
                <MenuItem value="Categoria C Mista">Categoria C</MenuItem>
                <MenuItem value="Sub18 Mista">Sub18</MenuItem>
                <MenuItem value="+40 Mista">+40</MenuItem>
                <MenuItem value="+50 Mista">+50</MenuItem>
                <ListSubheader>
                  <b>-- Masculino</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Masculino">Sub 14</MenuItem>
                <MenuItem value="Categoria A Masculino">Categoria A</MenuItem>
                <MenuItem value="Categoria B Masculino">Categoria B</MenuItem>
                <MenuItem value="Categoria C Masculino">Categoria C</MenuItem>
                <MenuItem value="Categoria D Masculino">Categoria D</MenuItem>
                <MenuItem value="Sub18 Masculino">Sub18</MenuItem>
                <MenuItem value="+40 Masculino">+40</MenuItem>
                <MenuItem value="+50 Masculino">+50</MenuItem>

                <ListSubheader>
                  <b>-- Feminino</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Feminino">Sub 14</MenuItem>
                <MenuItem value="Categoria A Feminino">Categoria A</MenuItem>
                <MenuItem value="Categoria B Feminino">Categoria B</MenuItem>
                <MenuItem value="Categoria C Feminino">Categoria C</MenuItem>
                <MenuItem value="Categoria D Feminino">Categoria D</MenuItem>
                <MenuItem value="Sub18 Feminino">Sub18</MenuItem>
                <MenuItem value="+40 Feminino">+40</MenuItem>
                <MenuItem value="+50 Feminino">+50</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="Dupla2"
              fullWidth
              id="outlined-basic"
              label="Dupla 2 (nome e sobrenome)"
              variant="outlined"
            />
          </>
        )}

        {/*  TERCEIRA INSCRIÇÃO  */}
        {category22 !== "N" && (
          <>
            <FormControl fullWidth>
              <InputLabel htmlFor="grouped-select">
                TERCEIRA Inscrição Normal
              </InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                value={category3}
                label="Primeira Inscrição Normal"
                onChange={(e) => setCategory3(e.target.value)}
                name="Category2"
              >
                <MenuItem value="N">
                  <b>Não jogar</b>
                </MenuItem>
                <ListSubheader>
                  <b>-- Mista</b>
                </ListSubheader>
                <MenuItem value={2}>Sub 14</MenuItem>
                <MenuItem value="Categoria A Mista">Categoria A</MenuItem>
                <MenuItem value="Categoria B Mista">Categoria B</MenuItem>
                <MenuItem value="Categoria C Mista">Categoria C</MenuItem>
                <MenuItem value="Sub18 Mista">Sub18</MenuItem>
                <MenuItem value="+40 Mista">+40</MenuItem>
                <MenuItem value="+50 Mista">+50</MenuItem>
                <ListSubheader>
                  <b>-- Masculino</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Masculino">Sub 14</MenuItem>
                <MenuItem value="Categoria A Masculino">Categoria A</MenuItem>
                <MenuItem value="Categoria B Masculino">Categoria B</MenuItem>
                <MenuItem value="Categoria C Masculino">Categoria C</MenuItem>
                <MenuItem value="Categoria D Masculino">Categoria D</MenuItem>
                <MenuItem value="Sub18 Masculino">Sub18</MenuItem>
                <MenuItem value="+40 Masculino">+40</MenuItem>
                <MenuItem value="+50 Masculino">+50</MenuItem>

                <ListSubheader>
                  <b>-- Feminino</b>
                </ListSubheader>
                <MenuItem value="Sub 14 Feminino">Sub 14</MenuItem>
                <MenuItem value="Categoria A Feminino">Categoria A</MenuItem>
                <MenuItem value="Categoria B Feminino">Categoria B</MenuItem>
                <MenuItem value="Categoria C Feminino">Categoria C</MenuItem>
                <MenuItem value="Categoria D Feminino">Categoria D</MenuItem>
                <MenuItem value="Sub18 Feminino">Sub18</MenuItem>
                <MenuItem value="+40 Feminino">+40</MenuItem>
                <MenuItem value="+50 Feminino">+50</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="Dupla3"
              fullWidth
              id="outlined-basic"
              label="Dupla 3 (nome e sobrenome)"
              variant="outlined"
            />
          </>
        )}

        {/*  VALOR E PAGAMENTO  */}
        {inscricao1 ? (
          <>
            <Typography variant="h6">
              Total da inscrição: R${inscricao1 + inscricao2 + inscricao3}
            </Typography>
          </>
        ) : (
          <></>
        )}

        {category1 && nome && sobrenome ? (
          <Button
            variant="contained"
            onClick={() => {
              setPagamento(true);
              setOpenSnack2(true);
              handleGeneratePayload();
            }}
            type="submit"
          >
            Realizar Pagamento
          </Button>
        ) : (
          <Button variant="contained" disabled>
            REALIZAR PAGAMENTO
          </Button>
        )}
        {pagamento && (
          <Snackbar
            open={openSnack2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={() => setOpenSnack2(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Deslize para baixo para realizar o pagamento
            </Alert>
          </Snackbar>
        )}

        {pagamento && (
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Nome Completo do Pagante"
              variant="outlined"
              fullWidth
              value={pagador}
              onChange={handlePagador}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "280px",
                padding: "20px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5">PIX Gerado:</Typography>
              {qrCodeUrl && <img src={qrCodeUrl} alt="pix" />}
              <Typography>Chave pix:</Typography>
              <Tooltip title="Clique para copiar">
                <p
                  style={{
                    overflowWrap: "break-word",
                    cursor: "pointer",
                  }}
                  onClick={handleCopyPayload}
                >
                  {payload}
                </p>
              </Tooltip>
            </Box>

            <Button
              variant="contained"
              href={`https://api.whatsapp.com/send?phone=556791008416&text=Segue%20abaixo%20o%20comprovante%20da%20inscri%C3%A7%C3%A3o%20de%20${nome}%20${sobrenome}%20pago%20por%20${pagador}`}
            >
              Enviar Comprovante
            </Button>
          </Stack>
        )}

        <Box></Box>
      </Stack>
    </Box>
  );
}
