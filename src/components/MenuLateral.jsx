import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import LOGOBRANCA from "../img/LOGOBRANCA.png";
import { Link } from "react-router-dom";

export default function MenuLateral() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key="Informações" disablePadding>
          {/* <Link to="/vip"> */}
          <ListItemButton href="/informacoes">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Informações" />
          </ListItemButton>
          {/* </Link> */}
        </ListItem>

        {/* <Link to="/"> */}
        <ListItem key="Torneios" disablePadding>
          <ListItemButton href="/torneios">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Torneios" />
          </ListItemButton>
        </ListItem>
        {/* </Link> */}
        {/* <Link to="/"> */}
        <ListItem key="Contato" disablePadding>
          <ListItemButton href="/contato">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItemButton>
        </ListItem>
        {/* </Link> */}
        {/* <Link to="/"> */}
        <ListItem key="Vip" disablePadding>
          <ListItemButton href="/vip">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Vip" />
          </ListItemButton>
        </ListItem>
        {/* </Link> */}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box height={"4em"} sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ flex: 1 }}></Box>

      <Box
        sx={{
          flex: 1,
          background: "#ffa800",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0 0 38px 38px",
        }}
      >
        <a href="/">
          <img src={LOGOBRANCA} style={{ width: "13rem" }} />
        </a>
      </Box>

      <Box
        sx={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <Button onClick={toggleDrawer(true)}>
          <DehazeRoundedIcon sx={{ color: "#ffa800" }} />
        </Button>
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </Box>
  );
}
