import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useState } from "react";

const MUIDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-desctiption"
      >
        <DialogTitle id="dialog-title">Submit the form</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-desctiption">
            Are you sure you want to submit the text?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button
            onClick={() => setOpen(false)}
            autoFocus
            variant="contained"
            color="primary"
          >
            send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MUIDialog;
