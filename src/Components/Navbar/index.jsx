import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  Button,
  Drawer,
  useMediaQuery,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";

import CoffeIcon from "@mui/icons-material/Coffee";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  const drawerLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
  ];
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container>
          <Toolbar>
            <CoffeIcon className="mx-2" />
            <Typography
              sx={{ flexGrow: 1, fontFamily: "Eagle Lake, sans-serif" }}
              variant="h5"
            >
              Coffe Shop
            </Typography>
            {isMobile && (
              <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
            {!isMobile && (
              <>
                <Button href="#" color="inherit">
                  Home
                </Button>
                <Button href="#coffee" color="inherit">
                  Coffee
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
        >
          <List>
            {drawerLinks.map((linkItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={linkItem.href}
                  araia-label={linkItem.label}
                  onClick={() => toggleDrawer(false)}
                >
                  <ListItemText primary={linkItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
