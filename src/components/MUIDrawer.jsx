import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import React from "react";

const MUIDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel 1
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MUIDrawer;
