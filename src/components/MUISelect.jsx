import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MUISelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };
  const handleCountries=(e)=>{
    let value=e.target.value
    setCountries(typeof(value)==='string'? value.split(','):value)
    console.log(countries);
  }
  return (
    <>
      <Box width="250px">
        <TextField
          label="select a country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="UAE">UAE</MenuItem>
          <MenuItem value="TUR">Turkey</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="select a country"
          select
          value={countries}
          onChange={handleCountries}
          fullWidth
          SelectProps={{
             multiple:true
          }}
          size='small'
          color="secondary"
          helperText='Please select your country'
        >
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="UAE">UAE</MenuItem>
          <MenuItem value="TUR">Turkey</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MUISelect;
