import React from "react";
import { Paper, Box, Container } from "@mui/material";
import { getActionOptions } from "../services/actionServcies";
import { makeStyles } from "@mui/styles";
import MapIcon from "@mui/icons-material/Map";
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

const ActionSection = () => {
  const styleClass = useStyles();
  return (
    <Container sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <h2 className={styleClass.header}>what we do</h2>
      <div className={styleClass.subHeader}>
        This is some text inside of a div block.
      </div>
      <Box
        sx={{ display: "flex", marginTop: "50px", justifyContent: "center" }}
      >
        {getActionOptions().map((x) => (
          <Box
            key={x.id}
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "200px",
                height: "250px",
                padding: "15px"
              }
            }}
          >
            <Paper elevation={3}>
              <div style={{ marginTop: "20px" }}>
                <MapIcon
                  sx={{ width: "98px", height: "98px", color: "#69b9ff" }}
                />
                <h3 className={styleClass.subHeader}>{x.name}</h3>
                <p className={styleClass.p}> This service is about</p>
              </div>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ActionSection;
