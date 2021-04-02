import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const userDetails = (userInfo, toProfile) => {
  const { classes } = this.props;

  return (
    <Grid container className={classes.userData} onClick={toProfile}>
      <Grid
        container
        alignContent="left"
        className={classes.master}
        direction="column"
      >
        <Avatar className={classes.avatar}>
          {userInfo.full_name.substring(0, 2).toUpperCase()}
        </Avatar>
        <Grid direction="column">
          <Typography className={classes.fullName} variant="h6">
            {userInfo.full_name}
          </Typography>
          <Typography variant="body2" className={classes.name}>
            {userInfo.email}
            <ChevronRight className={classes.chevron} />
          </Typography>
          <Typography variant="body2" className={classes.nameText}>
            {userInfo.company}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(userDetails);
