export const styles = (theme) => ({
  root: {
    width: "100%",
  },
  h6: {
    fontSize: "80%",
    letterSpacing: "0px",
    color: " #98a1b2",
    fontWeight: "normal",
    marginLeft: "25px",
  },
  divi: {
    width: "96%",
    marginLeft: "20px",
  },

  button: {
    background: "#3d358f",
    margin: "right",
    backgroundRepeat: "no-repeat",
    letterSpacing: "0px",
    color: "#ffffff",
    opacity: "1",
    fontSize: "16px",
    textTransform: "none",
    marginRight: "20px",
  },
  newicon: {
    marginRight: "10px",
  },
  lockIcon: {
    color: "#98a1b2",
    marginTop: "5px",
    marginRight: "10px",
  },
  headerText: {
    fontSize: "40",
    letterSpacing: "0px",
    color: " #98a1b2",
    fontWeight: "normal",
  },
  span1: {
    letterSpacing: "0px",
    color: "#3d358f",
    textTransform: "uppercase",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 12,
      marginRight: 12,
      background: "#3d358f",
    },
  },
  hide: {
    display: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#ffffff",
  },
  appBarShift: {
    width: `calc(100% - 240px)`,
    marginLeft: 240,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  tabStyle: {
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.common.white,
  },
  disabledIcon: {
    color: theme.palette.action.disabled,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  poweredByStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  poweredByLogoStyle: {
    width: theme.spacing.unit * 9,
    marginTop: -theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing.unit * 2,
    },
  },
  poweredByTextStyle: {
    marginRight: "16px",
  },
  headingGrid: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#3d358f",
  },
  headingTextStyle: {
    paddingLeft: theme.spacing.unit * 2,
  },
});
