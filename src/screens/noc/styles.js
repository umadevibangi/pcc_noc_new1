import red from "@material-ui/core/colors/red";

const styles = (theme) => ({
  root1: {
    flexGrow: 1,
  },
  appBar: {
    position: "relative",
    background: "#74329C",
  },
  fullscreencolor: {
    background: "#F5F6FA",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: "93%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  main: {
    marginTop: "-40px",
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
    border: "none",
    boxShadow: "none",
    height: "150px",
    // background: "#DDE1E8",
    // width: "95%",
    // marginLeft: "30px",
  },
  paper1: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3,
    },
    background: "#DDE1E8 ",
    boxShadow: "none",
    // width: "95%",
    // marginLeft: "30px",
    // marginBottom: "190px",
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    width: "70%",
    color: "#DBE3E9",
    strokeWidth: "30",

    // marginLeft: "-24px",
  },
  stepper1: {
    borderRadius: "-800px",
    borderWidth: "90%",
    strokeWidth: "30",

    // marginLeft: "-24px",
  },
  h6: {
    letterSpacing: "0px",
    color: "#3d358f",
    opacity: "1",
    fontSize: "900",
    fontWeight: "600",
    marginTop: "-20px",
  },
  h5: {
    letterSpacing: "0px",
    color: "#3d358f",
    opacity: "1",
    fontSize: "900",
    fontWeight: "600",
    marginLeft: "20px",
    marginTop: "50px",
  },
  clearAllBtn: {
    margin: "30px 0 0 10px",
    background: "#dce0e7",
    borderRadius: "4px",
    opacity: "1",
    color: "#949dae",
    fontSize: "small",
    textTransform: "none",
    width: "10%",
  },
  SearchBtn: {
    margin: "30px 0 0 10px",
    background: "#3d358f",
    borderRadius: "4px",
    opacity: "1",
    color: "#ffffff",
    fontSize: "small",
    textTransform: "none",
    width: "10%",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "-90px",
    marginRight: "70px",
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
  },
  loginButton: {
    marginTop: theme.spacing.unit * 3,
  },
});

export default styles;
