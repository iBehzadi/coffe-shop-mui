import "@fontsource/roboto";
import React from "react";
import Navbar from "./Components/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@mui/material";
import Hero from "./Components/Hero/index.jsx";
import Coffee from "./Components/Coffee";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Coffee />
    </ThemeProvider>
  );
}
