import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MUIAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }}>WB</Avatar>
      </Stack>
      <Stack spacing={1} direction="row">
        <AvatarGroup max={3}>
          <Avatar src="https://randomuser.me/api/portraits/women/19.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/90.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/39.jpg" />
        </AvatarGroup>
      </Stack>
      <Stack spacing={1} direction="row">
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "secondary.light", width: 48, height: 48 }}
        >
          WB
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MUIAvatar;
