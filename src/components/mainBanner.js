import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import bannerImag from "../static/banner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",

    borderBottom: "4px solid #69b9ff",
    "&::before": {
      content: "",
      backgroundImage: `url(${bannerImag})`,
      backgroundSize: "cover",
      opacity: 0.75
    }
  }
}));
//border-bottom: 4px solid #69b9ff;
const MainBanner = () => {
  const styleClass = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styleClass.root}
    >
      <h1>Naravoor</h1>
      <span>We are welcome to our small village Narvoor</span>
    </Grid>
  );
};

export default MainBanner;
