import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import pix30 from "../img/pix/pix30.png";
import { Form } from "react-router-dom";


export default function Subscribe() {
    const [pagamento, setPagamento] = useState(false);
    
    const [category1, setCategory1] = useState('');

    const handleCategory = (e) => {
        setCategory1(e.target.value);
    };

    const [inscricao1, setInscricao1] = useState('');

    const handleInscricao1 = (e) => {
        setInscricao1(e.target.value);
    };

    // SEGUNDA INSCRIÇÃO
    const [category2, setCategory2] = useState('');

    const handleCategory2 = (e) => {
        setCategory2(e.target.value);
    };

    const [inscricao2, setInscricao2] = useState('');

    const handleInscricao2 = (e) => {
        setInscricao2(e.target.value);
    };

    // TERCEIRA INSCRIÇÃO
    const [category3, setCategory3] = useState('');

    const handleCategory3 = (e) => {
        setCategory3(e.target.value);
    };

    const [inscricao3, setInscricao3] = useState('');

    const handleInscricao3 = (e) => {
        setInscricao3(e.target.value);
    };

    function Submit(e) {
        e.preventDefault()
        console.log("Name: ", name)
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbypVd3KVm0FqWNAYkqgrqZYBKNfqRnnk4oFptyKs43Nrea_SNzsNe1je-n48Lp-nW_hlg/exec",
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


  return (
    <Box
    className="form"
    component="form" onSubmit={(e) => Submit(e)}
      sx={{
        background: "white",
        minHeight: "100vh",
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
          marginTop: "1.5em"
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
          name="Name"
          id="outlined-basic"
          label="Nome do Atleta"
          variant="outlined"
          fullWidth
          required
        />

        <TextField
        name="Message"
          id="outlined-basic"
          label="Sobrenome do Atleta"
          variant="outlined"
          fullWidth
          required
        />

        <TextField
        name="Email"
          fullWidth
          id="outlined-basic"
          label="Número + DDD"
          variant="outlined"
          required
        />

        {/* PRIMEIRA INSCRIÇÃO */}

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Primeira Categoria</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category1}
            label="Primeira Categoria"
            onChange={handleCategory}
        >
            <MenuItem value="Nenhum">Nenhum</MenuItem>
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
            <MenuItem value="Mista">Mista</MenuItem>
        </Select>
        </FormControl>

        { !category1 || category1 == "Nenhum" ? <></>
        : 
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Primeira Inscrição {category1}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inscricao1}
            label={`Primeira Inscrição ${category1}`}
            onChange={handleInscricao1}
        >
            <MenuItem value={10}>Cat. A</MenuItem>
            <MenuItem value={20}>Cat. B</MenuItem>
            <MenuItem value={30}>Cat. C</MenuItem>
            <MenuItem value={30}>Cat. D</MenuItem>
            <MenuItem value={30}>Cat. Sub14</MenuItem>
            <MenuItem value={30}>Cat. Sub18</MenuItem>
            <MenuItem value={30}>Cat. 40+</MenuItem>
            <MenuItem value={30}>Cat. 50+</MenuItem>
            <MenuItem value={10}>ProA</MenuItem>
        </Select>
        </FormControl>
    }
        
        {/* SEGUNDA INSCRIÇÃO */}
        {
            inscricao1 ? 
            <>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Segunda Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category2}
                        label="Segunda Categoria"
                        onChange={handleCategory2}
                    >
                        <MenuItem value="Nenhum">Nenhum</MenuItem>
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Feminino">Feminino</MenuItem>
                        <MenuItem value="Mista">Mista</MenuItem>
                    </Select>
                </FormControl>

                { !category2 || category2 === "Nenhum" ? <></> :
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Segunda Inscrição {category2}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inscricao2}
                    label={`Segunda Inscrição ${category2}`}
                    onChange={handleInscricao2}
                >
                    <MenuItem value={10}>Cat. A</MenuItem>
                    <MenuItem value={20}>Cat. B</MenuItem>
                    <MenuItem value={30}>Cat. C</MenuItem>
                    <MenuItem value={40}>Cat. D</MenuItem>
                    <MenuItem value={50}>Cat. Sub14</MenuItem>
                    <MenuItem value={60}>Cat. Sub18</MenuItem>
                    <MenuItem value={70}>Cat. 40+</MenuItem>
                    <MenuItem value={80}>Cat. 50+</MenuItem>
                    <MenuItem value={90}>ProA</MenuItem>
                </Select>
                </FormControl>
}

            </> : <></>
        }

        { /* INSCRIÇÃO 3 */ }
        {
            !inscricao2 ? <></> : 
            <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Terceira Categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category3}
                    label="Terceira Categoria"
                    onChange={handleCategory3}
                >
                    <MenuItem value="Nenhum">Nenhum</MenuItem>
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Feminino">Feminino</MenuItem>
                    <MenuItem value="Mista">Mista</MenuItem>
                </Select>
            </FormControl>
            { 
            !category3 || category3 === "Nenhum" ? <></> :
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Terceira Inscrição {category3}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inscricao3}
                    label={`Terceira Inscrição ${category3}`}
                    onChange={handleInscricao3}
                >
                    <MenuItem value={10}>Cat. A</MenuItem>
                    <MenuItem value={20}>Cat. B</MenuItem>
                    <MenuItem value={30}>Cat. C</MenuItem>
                    <MenuItem value={30}>Cat. D</MenuItem>
                    <MenuItem value={30}>Cat. Sub14</MenuItem>
                    <MenuItem value={30}>Cat. Sub18</MenuItem>
                    <MenuItem value={30}>Cat. 40+</MenuItem>
                    <MenuItem value={30}>Cat. 50+</MenuItem>
                    <MenuItem value={10}>ProA</MenuItem>
                </Select>
                </FormControl>
            }
            </>

        }

        { /*  VALOR E PAGAMENTO  */}
        {
            inscricao1 ? 
            <>
            <Typography>Total da inscrição: R${inscricao1 + inscricao2 + inscricao3}</Typography> 
            
            </>
            :
            <></>
        }

        
        {
            inscricao1 ? 
            <Button 
            variant="contained" 
            onClick={() => setPagamento(true)}
            type="submit"
            >Realizar Pagamento</Button> 
            :
            <Button variant="contained" disabled>Selecione Alguma Categoria</Button>
        }
        
        { pagamento && 
        <Stack  >
            <TextField
            id="outlined-basic"
            label="Nome do Pagador"
            variant="outlined"
            fullWidth
            />

            <Box
            component="img"
            src={pix30}
            maxWidth="250px"
            >  
            </Box>

        <Button variant="contained" href="https://api.whatsapp.com/send?phone=556791008416&text=Segue%20abaixo%20o%20comprovante%20da%20minha%20inscri%C3%A7%C3%A3o!">Enviar Comprovante</Button>
        </Stack>

        }
        <Box>
        </Box>
      </Stack>
    </Box>
  );
}
