import React from "react";
import raquetes from "../img/raquetesbeach1.webp";
import { Box, Button, Stack, Tab, Typography, styled } from "@mui/material";
import { useBreakpoints } from "../hooks/useBreakpoints";
import beach from "../img/pic1.jpg";
import Hometabs from "./Hometabs";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home2Mobile from "./Home2Mobile";

export default function Main() {
  const breakpoints = useBreakpoints();

  return (
    <>
      {breakpoints.md ? (
        <div>
          <Home1 />
          <Home2Mobile />
          <Home3 />
        </div>
      ) : (
        <div>
          <Home1 />

          {/* HOME 2  */}
          <Home2 />

          {/* HOME 3 */}
          <Home3 />

          {/* HOME 4 */}
        </div>
      )}
    </>
  );
}
