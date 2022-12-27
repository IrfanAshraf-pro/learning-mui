import { ExpandMoreOutlined } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
} from "@mui/material";
import React from "react";

const heights = [150, 60, 30, 90, 100, 190, 30, 90, 40, 160, 80, 70, 19];
const MUIMasonry = () => {
  return (
    <Box sx={{ width: 500, height: 500 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Paper
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   height,
              border: "1px solid",
            }}
          >
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                Accordion no is {index + 1}
              </AccordionSummary>
              <AccordionDetails>Content of the accordion</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MUIMasonry;
