import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

const MUITextField = () => {
  const [valie, setValie] = useState("");
  return (
    <Stack spacing={8}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" />
        <TextField label="Name" variant="standard" />
        <TextField label="Name" variant="filled" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Name" size="small" color="secondary" disabled />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Input"
          size="small"
          color="secondary"
          required
          type="password"
          value={valie}
          onChange={(e) => setValie(e.target.value)}
          helperText={!valie?'Required':'Do not share your password with anyone'}
          error={!valie}
        />
        <TextField label="Name" InputProps={{ readOnly: true }} error />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Amount"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MUITextField;
