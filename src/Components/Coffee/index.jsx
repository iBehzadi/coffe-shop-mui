import React from "react";
import products from "../../assets/coffee.js";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Coffee() {
  return (
    <Box sx={{ my: "5rem" }} id="coffee">
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Featured Coffees
      </Typography>
      <Grid container spacing={3} sx={{ padding: 3, justifyContent: "center" }}>
        {products.map((product) => (
          <Grid item="true" xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, textAlign: "center", padding: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginY: 1 }}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Button variant="contained" color="secondary">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
