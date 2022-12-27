import { Box ,FormControlLabel,Switch,FormGroup, Typography} from '@mui/material'
import React,{useState} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const MUISwitch = () => {
    const [checked, setchecked] = useState(false)
    const [skills, setSkills] = useState([]);
    console.log(checked);
    const handleChange=(e)=>{
        setchecked(e.target.checked )
    }
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
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>}/>
        <Box>
            {checked? <LightModeIcon color='info'/>:<DarkModeIcon color="secondary"/>}
        </Box>
        <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Switch
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Switch
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Switch
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <Box>
            <Typography>Selected values</Typography>
            {
                skills.map((item,index)=>(
                    <Typography>{item}</Typography>
                ))
            }
          </Box>
    </Box>
  )
}

export default MUISwitch