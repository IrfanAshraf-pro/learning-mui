import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  FormLabel,
  FormGroup,
  FormControl,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MUICheckBox = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setTermsAndConditions(e.target.checked);
  console.log({ termsAndConditions });

  };
  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox checked={termsAndConditions} onChange={handleChange} />
          }
        />
        <Typography>state is {termsAndConditions}</Typography>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={termsAndConditions}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MUICheckBox;
