import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MUISkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="unsplash"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: "100%", marginTop: "24" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial</Typography>
              <Typography variant="body2">Code Evolutuon</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MUISkeleton;
