import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";

import { changeTab } from "./data/actions";

import { styles } from "./styles";
import { Grid } from "@material-ui/core";

class AppbarTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.activeTab !== this.props.activeTab) {
      this.setState({ value: this.props.activeTab });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.changeTab({ value });
  };
  render() {
    const { classes } = this.props;
    return this.props.tabs.length !== 0 ? (
      <Grid>
        <Grid item xs={12}>
          <Typography className={classes.h6} variant="h6" noWrap>
            Manage Passport Requests
          </Typography>
        </Grid>
        <br></br>

        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          classes={{ indicator: classes.indicator }}
          // centered
          // variant="fullWidth"
        >
          {this.props.tabs.map((tab, i) => (
            <Tab
              key={i}
              className={classes.tabStyle}
              classes={{ selected: classes.activeTab }}
              label={tab.name}
            />
          ))}
        </Tabs>
      </Grid>
    ) : (
      ""
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs.tabs,
    activeTab: state.tabs.activeTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (data) => dispatch(changeTab(data)),
  };
}

const styledTabs = withStyles(styles)(AppbarTabs);
export default connect(mapStateToProps, mapDispatchToProps)(styledTabs);
