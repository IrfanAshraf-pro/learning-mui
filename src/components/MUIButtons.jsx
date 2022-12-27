import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MUIButtons = () => {
  const [format, setFormat] = useState([]);
  const formatChange = (e, updFormats) => {
    setFormat(updFormats);
    console.log(updFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Click me
        </Button>
        <Button variant="contained">Click me</Button>
        <Button variant="outlined">Click me</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" color="secondary">
          Click me
        </Button>
        <Button variant="contained" color="secondary">
          Click me
        </Button>
        <Button variant="outlined" color="secondary">
          Click me
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" color="error">
          Click me
        </Button>
        <Button variant="contained" color="error">
          Click me
        </Button>
        <Button variant="outlined" color="error">
          Click me
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" color="success">
          Click me
        </Button>
        <Button variant="contained" color="success">
          Click me
        </Button>
        <Button variant="outlined" color="success">
          Click me
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" color="info">
          Click me
        </Button>
        <Button variant="contained" color="info">
          Click me
        </Button>
        <Button variant="outlined" color="info">
          Click me
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" color="warning">
          Click me
        </Button>
        <Button variant="contained" color="warning">
          Click me
        </Button>
        <Button variant="outlined" color="warning">
          Click me
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Click me
        </Button>
        <Button variant="contained" size="medium">
          Click me
        </Button>
        <Button variant="contained" size="large">
          Click me
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          onClick={() => alert("clicked")}
        >
          Click me
        </Button>
        <Button
          variant="contained"
          endIcon={<DeleteIcon />}
          disableElevation
          disableRipple
        >
          Click me
        </Button>
        <IconButton aria-label="send" color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          color="secondary"
          size="small"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left clicked")}>Left</Button>
          <Button onClick={() => alert("center clicked")}>Center</Button>
          <Button onClick={() => alert("right clicked")}>Right</Button>{" "}
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>{" "}
        </ButtonGroup>
      </Stack>{" "}
      <Stack direction="row" aria-label="alignment button group">
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>{" "}
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={formatChange}
          size="small"
          color="secondary"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MUIButtons;
