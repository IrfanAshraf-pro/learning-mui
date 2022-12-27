import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MUIBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge color="primary" variant="dot">
        <Mail />
      </Badge>
      <Badge color="primary" variant="dot" invisible={true}>
        <Mail />
      </Badge>
      <Badge color="primary" badgeContent={3}>
        <Mail />
      </Badge>
      <Badge color="primary" badgeContent={100}>
        <Mail />
      </Badge>
      <Badge color="primary" badgeContent={500} max={999}>
        <Mail />
      </Badge>
      <Badge color="secondary" badgeContent={0}>
        <Mail />
      </Badge>
      <Badge color="success" badgeContent={0} showZero>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MUIBadge;
