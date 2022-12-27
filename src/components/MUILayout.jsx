import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MUILayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={8}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Code Evolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
          m={2}
        >
          Code Evolution
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={4} columnSpacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="success.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.main" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="secondary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="error.main" p={2}>
            Item 1
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MUILayout;
