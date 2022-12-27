import { Box } from "@mui/material";
import { styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  backgroundColor: theme.status.danger,
}));

const MUIResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            sx: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          backgroundColor: "secondary.main",
        }}
      ></Box>
      <Box
        sx={{
          height: "300px",
          width: {
            sx: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          backgroundColor: "neutral.main",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};

export default MUIResponsiveness;
