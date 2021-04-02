import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Lock from "@material-ui/icons/LockOutlined";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { push, goBack } from "connected-react-router";
import { styles } from "./styles";
import { logout, logoutclicked } from "../../data/session/actions";
import { resetAppbar } from "./data/actions";
import classNames from "classnames";
import AppbarTabs from "../appbarTabs/";
import { Divider, Hidden } from "@material-ui/core";
import UltsLogo from "../../assets/images/ults-logo.png";
import Tooltip from "@material-ui/core/Tooltip";
import { openClosePasswordDialog } from "../Dialogs/changePassword/data/actions";
import Assessment from "@material-ui/icons/AssessmentOutlined";
import permissions from "../../config/permissions";
import getUsertype from "../../services/getUsertype";
import appUrls from "../../config/appUrls";
import { Passport } from "../../assets/svg/passport";
import { Logout } from "../../assets/svg/logout";
import LOGIN from "../../screens/login";
import { History } from "../../assets/svg/history";
import { PCC } from "../../assets/svg/pcc";
import { NOC } from "../../assets/svg/noc";
import { Report } from "../../assets/svg/report";
import { TrackChanges } from "../../assets/svg/track";
import { Upload } from "../../assets/svg/upload";

class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps) {}

  getIcon = (feature) => {
    switch (feature) {
      case "Apply PCC":
        return <PCC />;
      case "Apply NOC":
        return <NOC />;
      case "Track Application":
        return <TrackChanges />;
      case "PCC":
        return <PCC />;
      case "NOC":
        return <NOC />;
      case "Passport":
        return <Passport />;
      case "History":
        return <History />;
      case "Reports":
        return <Report />;
      case "Daily Report":
        return <Assessment />;
      case "Application Report":
        return <Assessment />;
      case "Passport Upload":
        return <Upload />;
      case "Logout":
        return <Logout />;
      default:
        return "";
    }
  };

  onNavClick = (feature, event) => {
    const { navigateTo, logout, logoutclicked } = this.props;
    event.preventDefault();
    switch (feature) {
      case "Apply PCC": {
        navigateTo(appUrls.PCC);
        break;
      }
      case "Apply NOC": {
        navigateTo(appUrls.NOC);
        break;
      }
      case "Track Application": {
        navigateTo(appUrls.TRACKING_USER);
        break;
      }
      case "PCC": {
        navigateTo(appUrls.PCC_REQUESTS);
        break;
      }
      case "NOC": {
        navigateTo(appUrls.NOC_REQUESTS);
        break;
      }
      case "Passport": {
        navigateTo(appUrls.PASSPORT_REQUESTS);
        break;
      }
      case "History": {
        navigateTo(appUrls.HISTORY);
        break;
      }
      case "Daily Report": {
        navigateTo(appUrls.DAILY_REPORT);
        break;
      }
      case "Application Report": {
        navigateTo(appUrls.APPLICATION_REPORT);
        break;
      }
      case "Passport Upload": {
        navigateTo(appUrls.PASSPORT_DATA_EXPORT);
        break;
      }
      case "login": {
        navigateTo(appUrls.LOGIN);
        break;
      }
      case "Logout": {
        logoutclicked();
        setTimeout(() => {
          logout();
        }, 500);

        break;
      }
      default:
        return "";
    }
  };

  getFeatures = (usertype) => {
    switch (usertype) {
      case "DYSP":
        return permissions.cp;
      case "DSBO":
        return permissions.sho;
      case "DCRB":
        return permissions.cpo;
      case "FVO":
        return permissions.fvo;
      case "ACP":
        return permissions.acp;
      case "DCP":
        return permissions.dcp;
      case "CUSTOMER":
        return permissions.user;
      default:
        return [];
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangePasswordClick = () => {
    this.props.openClosePasswordDialog();
  };

  onLogout = () => {
    this.props.logoutclicked();
    setTimeout(() => {
      this.props.logout();
    }, 500);
  };

  render() {
    const { classes, text, userInfo, width, isSideDrawerOpen } = this.props;
    const features = this.getFeatures(getUsertype(userInfo.user_type));

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          className={
            isWidthUp("sm", width)
              ? classNames(classes.appBar, {
                  [classes.appBarShift]: isSideDrawerOpen,
                })
              : classes.appBar
          }
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.props.openSideDrawer()}
              className={classNames(classes.menuButton, {
                [classes.hide]: isSideDrawerOpen,
              })}
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="go back"
            >
              <ArrowBack />
            </IconButton>

            <section className={classes.headingGrid}>
              {isWidthUp("xs", width) && (
                <Typography
                  variant="h6"
                  // color="textPrimary"
                  noWrap
                  className={isSideDrawerOpen ? classes.headerText : null}
                >
                  <span className={classes.h6}>Signed in as</span>
                </Typography>
              )}
              <div className={classes.poweredByStyle}>
                <Tooltip
                  title="Reset Password"
                  placement="left-start"
                  className={classes.poweredByTextStyle}
                >
                  <IconButton
                    color="default"
                    onClick={() => this.onChangePasswordClick()}
                  >
                    <Lock className={classes.lockIcon} />
                  </IconButton>
                </Tooltip>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={this.onLogout}

                  // startIcon={<PowerSettingsNewIcon />}
                >
                  <PowerSettingsNewIcon className={classes.newicon} />
                  Logout
                </Button>
              </div>
            </section>
          </Toolbar>
          <Divider className={classes.divi} />
          <br></br>

          <AppbarTabs />
        </AppBar>
      </div>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
  openSideDrawer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    header: state.appbar.header,
    userInfo: state.auth.info,
    url: state.appbar.url,
    userId: state.auth.info.user_id,
    path: state.router.location.pathname,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
    logout: () => dispatch(logout()),

    logoutclicked: () => dispatch(logoutclicked()),
    back: () => dispatch(goBack()),
    resetAppbar: () => dispatch(resetAppbar()),
    openClosePasswordDialog: () => dispatch(openClosePasswordDialog()),
  };
}

const styledAppBar = withStyles(styles)(withWidth()(Appbar));

export default connect(mapStateToProps, mapDispatchToProps)(styledAppBar);
