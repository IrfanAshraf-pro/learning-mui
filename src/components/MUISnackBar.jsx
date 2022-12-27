import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import React, { useState, forwardRef } from "react";

const snackBarAlert = forwardRef(function snackBarAlert(props, ref) {
  return <Alert elevation={8} ref={ref} {...props} />;
});
const MUISnackBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      /> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <snackBarAlert onClose={handleClose} severity="success">
          Form submitted Successfully
        </snackBarAlert>
      </Snackbar>
    </>
  );
};

export default MUISnackBar;
