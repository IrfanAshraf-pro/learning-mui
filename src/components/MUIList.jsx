import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
const MUIList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mail />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="List item 2" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MUIList;
