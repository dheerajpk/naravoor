import React from "react";
import { Paper, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#fff",
    fontSize: "30px",
    fontWeight: "300",
    letterSpacing: "5px",
    textTransform: "uppercase"
  },
  subHeader: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: "3px",
    textTransform: "uppercase"
  },
  p: {
    color: "#6a859c",
    fontSize: "14px"
  }
}));

const PlaceToViistGallery = () => {
  const styleClass = useStyles();
  return (
    <Container
      sx={{
        backgroundColor: "#192024",
        height: "500px",
        width: "100%",
        padding: "80px 10px"
      }}
    >
      <h2 className={styleClass.header}>Places to visit</h2>
      <div className={styleClass.subHeader}>
        This is some text inside of a div block.
      </div>
    </Container>
  );
};

export default PlaceToViistGallery;
