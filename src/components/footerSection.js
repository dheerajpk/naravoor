import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Grid, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  h5: {
    color: "#676770",
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: "4px",
    textTransform: "uppercase",
    textAlign: "left"
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
    fontSize: "14px",
    textAlign: "left"
  }
}));

const FooterSection = () => {
  const styleClass = useStyles();
  return (
    <Container sx={{ padding: "35px 0", backgroundColor: "#edeff2" }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={3}>
            <h5 className={styleClass.h5}>About Naravoor</h5>
            <p className={styleClass.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </Grid>
          <Grid item xs={3}>
            <h5 className={styleClass.h5}>Usefull links</h5>
            <p className={styleClass.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </Grid>
          <Grid item xs={3}>
            <h5 className={styleClass.h5}>Social</h5>
            <p className={styleClass.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterSection;
