import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import  { Edit, FileCopy, Print, Share } from "@mui/icons-material";
const MUISpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation-speeddial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit/>}/>}
    >
      <SpeedDialAction icon={<FileCopy />} tooltipTitle="copy" tooltipOpen onClick={()=>alert('hiihihi')}/>
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MUISpeedDial;
