import "@fontsource/roboto";
import React from "react";
import Navbar from "./Components/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home, Products, Auth, NotFound, About } from "./Pages";
import { getAuth } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./Pages/ProductDetails";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@mui/material";

export default function App() {
  const { token } = getAuth();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/auth"
            element={token ? <Navigate to={"/"} /> : <Auth />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={!token ? <Auth /> : <Products />} />
          <Route
            path="/product-details/:id/:title"
            element={<ProductDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Toaster />
    </ThemeProvider>
  );
}
