import React,{useState} from "react";
import { ExpandMoreSharp } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const MUIAccordion = () => {
    const [expanded, setExpanded] = useState(false)
    const handleChange=(isExpanded,panel)=>{
        setExpanded(isExpanded? panel:false)
    }
 
  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-header"
          expandIcon={<ExpandMoreSharp />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sed
            voluptatem alias quibusdam minima recusandae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel2'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel2')}>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-header"
          expandIcon={<ExpandMoreSharp />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sed
            voluptatem alias quibusdam minima recusandae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel3'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel3')}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-header"
          expandIcon={<ExpandMoreSharp />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sed
            voluptatem alias quibusdam minima recusandae?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MUIAccordion;
