import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import LinearScale from "@material-ui/icons/LinearScale";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./styles";

class EmptyListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          align="center"
          className={classes.textStyle}
          gutterBottom
          variant="headline"
        >
          {this.props.emptyText}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(EmptyListing);
