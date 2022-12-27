import { Alert, AlertTitle, Stack, Button } from "@mui/material";
import { Check } from "@mui/icons-material";
import React from "react";

const MUIAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert>This is a normal alert</Alert>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        action={
          <>
            <Button color="inherit" size="small">
              Undo
            </Button>
            <Button color="inherit" size="small">
              Edit
            </Button>
          </>
        }
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert
        variant="filled"
        severity="warning"
        onClose={() => alert("close ")}
      >
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};

export default MUIAlert;
