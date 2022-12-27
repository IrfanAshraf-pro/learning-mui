import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import React from "react";

const MUIBreadCrumbes = () => {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={2}
        // itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Products
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MUIBreadCrumbes;
