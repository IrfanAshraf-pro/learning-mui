import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText
} from "@mui/material";

const MUIRadioButton = () => {
  const [age, setAge] = useState("");
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <Box>
      <FormControl error={!age}>
        <FormLabel id="job-experiece-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experiece-group"
          aria-label="job-experiece-group"
          value={age}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary"/>}label="0-2" value="0-2" />
          <FormControlLabel control={<Radio  size="large" color="success"/>} label="3-10" value="3-10" />
          <FormControlLabel control={<Radio size="large" color="error"/>} label="11-20" value="11-20" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
      <Typography variant="body2">Selected Value is : {age}</Typography>
    </Box>
  );
};

export default MUIRadioButton;
