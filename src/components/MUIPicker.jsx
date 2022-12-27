import { DatePicker } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MUIPicker = () => {
  const [selectedvalue, setSelectedvalue] = useState(null);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedvalue}
        onChange={(newValue) => {
          setSelectedvalue(newValue);
        }}
      />
    </Stack>
  );
};

export default MUIPicker;
