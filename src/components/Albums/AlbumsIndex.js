import React from "react";
import bikes1 from "../../assets/bikes1.jpg";
import wedding1 from "../../assets/wedding1.jpg";
import fest3 from "../../assets/fest3.jpg";
import soldiers1 from "../../assets/soldiers1.jpg";
import sky1 from "../../assets/sky1.jpg";
import gallery from "../../assets/gallery1.jpg";
import troopers from "../../assets/starwars2.jpg";
import { withAuthorisation } from "../Session/SessionIndex";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import "typeface-roboto";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "40px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "auto",
    paddingBottom: "1px",
    textStyle: "typeface-roboto"
  }
});

function Album(props) {
  const { classes } = props;
  return (
    <div>
      <img
        className="albumsImage"
        src={sky1}
        alt="sky"
        width="100%"
        height="100%"
      />

      <div className={classes.root}>
        <h1>Albums</h1>

        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="bikes1.jpg">
                <img src={bikes1} alt="cyclists" width="600" height="400" />
              </a>
              <div className="desc">French Cycling Shoot</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="wedding1.jpg">
                <img src={wedding1} alt="wedding" width="600" height="400" />
              </a>
              <div className="desc">Smith Wedding</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="fest3.jpg">
                <img src={fest3} alt="wedding" width="600" height="400" />
              </a>
              <div className="desc">Glastonbury 2019</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="soldiers1.jpg">
                <img
                  src={soldiers1}
                  alt="soldiers march"
                  width="600"
                  height="400"
                />
              </a>
              <div className="desc">Soldiers' March</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="gallery1.jpg">
                <img src={gallery} alt="art gallery" width="600" height="400" />
              </a>
              <div className="desc">Galleries</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="starwars2.jpg">
                <img
                  src={troopers}
                  alt="storm troopers"
                  width="600"
                  height="400"
                />
              </a>
              <div className="desc">Stag Do</div>
            </Paper>
          </Grid>

          {/* <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="bikes1.jpg">
                <img src={bikes1} alt="cyclists" width="600" height="400" />
              </a>
              <div className="desc">French Cycling Shoot</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="wedding1.jpg">
                <img src={wedding1} alt="wedding" width="600" height="400" />
              </a>
              <div className="desc">Smith Wedding</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="fest3.jpg">
                <img src={fest3} alt="wedding" width="600" height="400" />
              </a>
              <div className="desc">Glastonbury 2019</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="soldiers1.jpg">
                <img
                  src={soldiers1}
                  alt="soldiers march"
                  width="600"
                  height="400"
                />
              </a>
              <div className="desc">Soldiers' March</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="gallery1.jpg">
                <img src={gallery} alt="art gallery" width="600" height="400" />
              </a>
              <div className="desc">Galleries</div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <a target="_blank" href="starwars2.jpg">
                <img
                  src={troopers}
                  alt="storm troopers"
                  width="600"
                  height="400"
                />
              </a>
              <div className="desc">Stag Do</div>
            </Paper>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(withStyles(styles)(Album));
