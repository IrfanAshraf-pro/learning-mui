import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";

const MUIChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chip) => {
    setChips(chips.filter((c) => c !== chip));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="secondary" size="small" />
      <Chip label="icon" color="secondary" size="small" icon={<Face />} />
      <Chip
        label="chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>a</Avatar>}
      />
      <Chip
        label="click"
        color="success"
        size="small"
        onClick={() => alert("Clicked")}
      />
      <Chip
        label="delete"
        color="success"
        size="small"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("deleted")}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="success"
          size="small"
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default MUIChip;
