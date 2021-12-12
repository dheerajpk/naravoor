import React from "react";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <h1 style={{ color: "#69b9ff" }}>Naravoor</h1>
    </Grid>
  );
};

export default Header;
