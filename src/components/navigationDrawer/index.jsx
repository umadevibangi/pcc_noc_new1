import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MenuList from "@material-ui/core/MenuList";

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PeopleIcon from "@material-ui/icons/People";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import Lock from "@material-ui/icons/LockOutlined";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AppbarTabs from "../appbarTabs/";

import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Passport } from "../../assets/svg/passport";
// import { Logout } from "../../assets/svg/logout";
import { History } from "../../assets/svg/history";
import { PCC } from "../../assets/svg/pcc";
import { NOC } from "../../assets/svg/noc";
import { Report } from "../../assets/svg/report";
import { TrackChanges } from "../../assets/svg/track";
import { Upload } from "../../assets/svg/upload";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import appUrls from "../../config/appUrls";
// import { logout, logoutclicked } from "../../data/session/actions";
// import permissions from "../../config/appUrls";
import getUsertype from "../../services/getUsertype";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./styles";

import Typography from "@material-ui/core/Typography";
import { Hidden } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Assessment from "@material-ui/icons/AssessmentOutlined";
import KpLogoSmall from "../../assets/images/kerala_police_logo_small.png";
import UltsLogoSmall from "../../assets/images/ults-logo-small.png";
import ApplicationforPcc from "../../screens/pcc";
import ApplicationforNoc from "../../screens/noc";
import Trackstatus from "../../screens/Trackstatus";
import report from "../../screens/report";
class NavigationDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleDrawerOpen = () => {
    this.setState({
      ...this.state,
      open: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      ...this.state,
      open: false,
    });
  };
  onLogout = (event) => {
    this.props.navigateTo("/login");
  };
  handleMenuClick1 = () => {
    this.setState({
      ...this.state,
      value: 0,
    });
  };
  handleMenuClick2 = () => {
    this.setState({
      ...this.state,
      value: 1,
    });
  };
  handleMenuClick3 = () => {
    this.setState({
      ...this.state,
      value: 2,
    });
  };
  handleMenuClick4 = () => {
    this.setState({
      ...this.state,
      value: 3,
    });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  onNavClick = (feature, event) => {
    const { navigateTo } = this.props;
    event.preventDefault();
    switch (feature) {
      case "ApplicationforPcc": {
        navigateTo(appUrls.PCC_URL);
        break;
      }
      case "ApplicationforNoc": {
        navigateTo(appUrls.NOC_URL);
        break;
      }
      case "Trackstatus": {
        navigateTo(appUrls.TRACKSTATUS_URL);
        break;
      }
      case "Report": {
        navigateTo(appUrls.REPORT_URL);
        break;
      }
      default:
        return "";
    }
  };
  render() {
    const {
      classes,
      width,
      userInfo,
      handleDrawerOpen,
      handleDrawerClose,
      theme,
      open,
      setOpen,
      isSideDrawerOpen,
    } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          noShadow={true}
          style={{ boxShadow: "none" }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar style={{ boxShadow: "none" }} disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(
                classes.menuButton,
                this.state.open && this.props.classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.h6} variant="h6" noWrap>
              <div className={classes.headerText}>
                {" "}
                Signed in as <span className={classes.span}>PCC/NOC</span>
              </div>
            </Typography>
            <div className={classes.logoutBtn}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <LockOutlinedIcon className={classes.lockIcon} />
                </Grid>
                <Grid item xs>
                  <Button
                    href="/login"
                    onClick={this.onLogout}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    startIcon={<PowerSettingsNewIcon />}
                  >
                    Logout
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
          <Divider variant="middle" />
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img
                  src={KpLogoSmall}
                  className={classes.logoKpoliceSmall}
                  alt="Kerala Police Logo"
                />
              </Grid>
              <Grid item xs className={classes.logoText}>
                KERALA POLICE
              </Grid>
            </Grid>

            <IconButton
              className={classes.rtl}
              onClick={this.handleDrawerClose}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <List className={classes.leftMenu}>
            <MenuList className={classes.leftMenulist}>
              {[
                "ApplicationforPcc",
                "ApplicationforNoc",
                "Trackstatus",
                "Report",
              ].map((text, index) =>
                text === "ApplicationforPcc" ? (
                  <>
                    <MenuItem
                      onClick={(e) => this.handleMenuClick1()}
                      className={classes.leftMenu1}
                    >
                      <InsertDriveFileOutlinedIcon
                        fontSize="small"
                        className={classes.LeftMenuIcons}
                      />
                      Application for PCC
                    </MenuItem>
                    <br></br>
                  </>
                ) : text === "ApplicationforNoc" ? (
                  <>
                    <MenuItem
                      onClick={(e) => this.handleMenuClick2()}
                      className={classes.leftMenu2}
                    >
                      <PublishOutlinedIcon
                        fontSize="small"
                        className={classes.LeftMenuIcons}
                      />
                      Application for NOC
                    </MenuItem>
                  </>
                ) : text === "Trackstatus" ? (
                  <>
                    <MenuItem
                      onClick={(e) => this.handleMenuClick3()}
                      className={classes.leftMenu3}
                    >
                      <PublishOutlinedIcon
                        fontSize="small"
                        className={classes.LeftMenuIcons}
                      />
                      Trackstatus
                    </MenuItem>
                  </>
                ) : text === "Report" ? (
                  <>
                    <MenuItem
                      onClick={(e) => this.handleMenuClick4()}
                      className={classes.leftMenu3}
                    >
                      <PublishOutlinedIcon
                        fontSize="small"
                        className={classes.LeftMenuIcons}
                      />
                      Report
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <ListItem
                      onClick={(e) => this.onNavClick(text, e)}
                      button
                      key={text}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  </>
                )
              )}
            </MenuList>
          </List>
          <div className={classes.footerLogo}>
            <div className={classes.powerdByTextSmall}>
              Powered By
              <img
                src={UltsLogoSmall}
                className={classes.ultsLogoSmall}
                alt="Kerala Police Logo"
              />
            </div>
          </div>
        </Drawer>
        <main
          className={clsx(this.props.classes.content, {
            [this.props.classes.contentShift]: this.state.open,
          })}
        >
          {this.state.value === 0 ? <ApplicationforPcc /> : null}
          {this.state.value === 1 ? <ApplicationforNoc /> : null}
          {this.state.value === 2 ? <Trackstatus /> : null}
          {this.state.value === 3 ? <Report /> : null}

          <div className={this.props.classes.drawerHeader} />
        </main>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  openSideDrawer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    // isLoggedIn: state.auth.isLoggedIn,
    // userInfo: state.auth.info,
    // isLoading: state.auth.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
    // logout: () => dispatch(logout()),
    // logoutclicked: () => dispatch(logoutclicked()),
  };
}

const styledNavigationDrawer = withStyles(styles, { withTheme: true })(
  NavigationDrawer
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledNavigationDrawer);
