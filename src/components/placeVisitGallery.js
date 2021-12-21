import React from "react";
import { Paper, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { getPlaceToVisitGallery } from "../services/actionServcies";

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
      <Box
        sx={{
          width: "100%",
          height: "300px"
        }}
      >
        <ImageList
          sx={{ width: "100%", height: "300px" }}
          cols={3}
          rowHeight={164}
        >
          {getPlaceToVisitGallery().map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ height: "208px" }}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.subTitle}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default PlaceToViistGallery;
