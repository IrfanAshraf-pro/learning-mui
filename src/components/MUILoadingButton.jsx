import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React, { useState } from "react";

const MUILoadingButton = () => {
  const [loading, setloading] = useState(true);
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined" onClick={() => setloading(!loading)}>
        Click me
      </LoadingButton>
      <LoadingButton variant="outlined" loading={loading}>
        Click me
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="loading....">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingIndicator="loading...."
        loading={loading}
      >
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Icon loading
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
        loading
      >
        Icon loading
      </LoadingButton>
    </Stack>
  );
};

export default MUILoadingButton;
