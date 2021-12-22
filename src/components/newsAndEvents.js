import React from "react";
import Stack from "@mui/material/Stack";
import {
  Face,
  Newspaper,
  LibraryBooks,
  LocalGroceryStore,
  School
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Paper, Grid, Container } from "@mui/material";
import { getUseFullServicesTags } from "../services/actionServcies";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#676770",
    fontSize: "30px",
    fontWeight: "300",
    letterSpacing: "5px",
    textTransform: "uppercase"
  },
  subHeader: {
    color: "#8e8e9c",
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

const NewsAndEvents = () => {
  const styleClass = useStyles();

  function getChipIcon(iconType) {
    switch (iconType) {
      case "NEWS":
        return <Newspaper />;
      case "LIBRARY":
        return <LibraryBooks />;
      case "SHOPS":
        return <LocalGroceryStore />;
      case "SCHOOLS":
        return <School />;
      default:
        return <Face />;
    }
  }

  return (
    <Container sx={{ padding: "80px 10px", backgroundColor: "#dddddd" }}>
      <h1 className={styleClass.header}>Upcoming Events</h1>
      <span className={styleClass.subHeader}>
        Latest announcements, news and upcoming events
      </span>
      <Stack
        direction="row"
        spacing={1}
        sx={{ marginTop: "40px" }}
        justifyContent="center"
        alignItems="center"
      ></Stack>
    </Container>
  );
};
export default NewsAndEvents;
