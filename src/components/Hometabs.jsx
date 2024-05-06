import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Stack } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import categorias from "../img/Categories.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

export default function Hometabs() {
  const Categories = [
    "ProA",
    "A",
    "B",
    "C",
    "D",
    "Sub14",
    "Sub18",
    "40+",
    "50+",
  ];

  const infraestrutura = [
    {
      text: "Quadras Profissionais com Padrões Internacionais",
      bgColor: "orange",
    },
    { text: "Área Vip", bgColor: "orange" },
    { text: "Bar e área de alimentação", bgColor: "orange" },
    { text: "Zona do Atleta", bgColor: "orange" },
    {
      text: "Sessões de treinamento com profissionais renomados",
      bgColor: "orange",
    },
    {
      text: "Iniciativas para envolver crianças e jovens no esporte",
      bgColor: "orange",
    },
  ];

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TabContext value={value} sx={{}}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Categorias" value="1" />
            <Tab label="Infraestrutura" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack>
            <Box>
              <Typography mb={1} variant="h6">
                Duplas Femininas
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    maxWidth: "70%",
                    maxHeight: "5rem",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    ProA
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "1px 0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    A
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    B
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    C
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    D
                  </Typography>

                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    Sub14
                  </Typography>

                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    Sub18
                  </Typography>

                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    40+
                  </Typography>

                  <Typography
                    variant="span"
                    sx={{
                      backgroundColor: "orange",
                      padding: "0",
                      width: "4rem",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    50+
                  </Typography>
                </Box>
              </Stack>

              <Typography m={(0, 2)} variant="h6">
                Duplas Masculinas
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    maxWidth: "70%",
                    maxHeight: "5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {Categories.map((category) => (
                    <>
                      <Typography
                        variant="span"
                        sx={{
                          backgroundColor: "orange",
                          padding: "0",
                          width: "4rem",
                          borderRadius: "4px",
                          color: "white",
                        }}
                      >
                        {category}
                      </Typography>
                    </>
                  ))}
                </Box>
              </Stack>

              <Typography m={(0, 2)} variant="h6">
                Duplas Mistas
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    maxWidth: "70%",
                    maxHeight: "5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {Categories.map((category) => (
                    <>
                      <Typography
                        variant="span"
                        sx={{
                          backgroundColor: "orange",
                          padding: "0",
                          width: "4rem",
                          borderRadius: "4px",
                          color: "white",
                        }}
                      >
                        {category}
                      </Typography>
                    </>
                  ))}
                </Box>
              </Stack>
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {infraestrutura.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  bgcolor: item.bgColor,
                  color: "white",
                  fontWeight: "900",
                  width: "80%",
                  borderRadius: "4px",
                }}
              >
                <ListItemIcon>
                  <SportsVolleyballIcon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
