import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const MUIRating = () => {
  const [value, setvalue] = useState(null);
  const [values, setvalues] = useState(3);

  const handleChange = (e, newValue) => {
    setvalue(newValue);
  };
  console.log({ value });
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
      />
       <Rating
        value={values}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
        readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MUIRating;
