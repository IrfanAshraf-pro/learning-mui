import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

const MUINavbar = () => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <AppBar static="true">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMON
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Products</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchor}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical:'bottom',
            horizontal:'right'
          }}
          transformOrigin={{
            vertical:'top',
            horizontal:'right'
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MUINavbar;
