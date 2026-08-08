import React from "react";
import { Typography, Container, Button, Box, Stack } from "@mui/material";
import esspress from "../../assets/images/coffee.webp";
export default function Hero() {
  // const esspress = "../assets/images/coffee.webp";
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "85vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            padding: "3rem 0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
          >
            Welcome to Coffee Shop
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          >
            Discover the best coffee in town and enjoy a cozy atmosphere.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Order Now
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" }, 
          }}
        >
          <img
            src={esspress}
            alt="Coffee"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
