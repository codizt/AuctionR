import { Box, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}
    >
      <Typography
        variant="h2"
        color="primary"
        sx={{ fontWeight: "bold", textShadow: " 2px 1px 2px grey" }}
      >
        AuctionR
      </Typography>
      <Typography variant="caption" color="secondary">
        Auctions, Simplified.
      </Typography>
    </Box>
  );
};

export default Logo;
