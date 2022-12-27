import { Stack, Autocomplete, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const skills = ["html", "css", "opp"];

const oskills = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MUIAutocomplete = () => {
  const [value, setvalue] = useState(null);
  const [skill, setSkill] = useState([]);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={(e, value) => setvalue(value)}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Typography>{value}</Typography>
      <Autocomplete
        options={oskills}
        value={skill}
        onChange={(e, value) => setSkill(value)}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Typography>{skill.id}</Typography>
      <Typography>{skill.label}</Typography>


    </Stack>
  );
};

export default MUIAutocomplete;
