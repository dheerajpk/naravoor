import React from "react";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "#fff", paddingLeft: "50px" }}
    >
      <h1 style={{ color: "#69b9ff", fontWeight: 300, letterSpacing: "4px" }}>
        Naravoor
      </h1>
    </Grid>
  );
};

export default Header;
