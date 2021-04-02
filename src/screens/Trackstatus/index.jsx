import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { styles } from "./styles";
import getUsertype from "../../services/getUsertype";
import { push } from "connected-react-router";
import appUrls from "../../config/appUrls";
import { setHeader } from "../../components/appBar/data/actions";
import { connect } from "react-redux";
import validator from "../../services/validator/";
import { find } from "lodash";
import StepConnector from "@material-ui/core/StepConnector";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import OtpInput from "react-otp-input";
import StepContent from "@material-ui/core/StepContent";

import { showAlert } from "../../components/snackbar/data/actions";
import CircularIndeterminate from "../../components/circular/CircularIndeterminate";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import AlertDialog from "../../components/Dialogs";
// import IReactOtpInputProps from "./IReactOtpInputProps";
import NavigationDrawer from "../../components/navigationDrawer";
import EmptyListing from "../../components/emptyListing";

class Trackstatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearotp = this.clearotp.bind(this);
  }
  handleChange = (otp) => {
    this.setState({ otp });
    console.log(otp);
  };
  clearotp = () => {
    this.setState({ otp: "" });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();
    function getSteps() {
      return ["Select campaign settings", "Create an ad group", "Create an ad"];
    }
    const Connector = withStyles({
      //   alternativeLabel: {
      //     top: 10,
      //     left: "calc(-50% + 16px)",
      //     right: "calc(50% + 16px)",
      //   },
      Dash: {
        // direction: Axis.vertical,

        length: 130,
        dashLength: 15,
        dashColor: "grey",
      },
      //   active: {
      //     "& $line": {
      //       borderColor: "#65BC6B",
      //       borderTopWidth: 3,
      //       borderRadius: 1,

      //       borderStyle: "solid",
      //     },
      //   },
      //   completed: {
      //     "& $line": {
      //       borderTopWidth: 3,
      //       borderRadius: 1,
      //       borderColor: "#65BC6B",
      //       borderStyle: "solid",
      //     },
      //   },
      verticalLine: {
        // borderColor: "#eaeaf0",

        border: "dashed",
      },
    })(StepConnector);

    return (
      <>
        <div className={classes.dashboardContent}>
          <Grid item xs={12}>
            <Typography className={classes.h6} variant="h6" noWrap>
              Track status
            </Typography>
          </Grid>

          <div className={classes.cctnResults}>
            {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
            <Grid xs={12} md={12}>
              <div className={classes.cctnsearchBox}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      InputProps={{ disableUnderline: true }}
                      onKeyDown={this.keyDown}
                      //   id="outlined-full-width"
                      //   style={{ margin: 8 }}
                      placeholder="Search here"
                      //   fullWidth
                      margin="normal"
                      placeholder="Enter Tracking ID"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.selectEmpty}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon className={classes.SearchIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      className={classes.clearSearchBtn}
                      variant="contained"
                      // color="primary"
                    >
                      Clear search
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.cctnsearchBox}>
                <div>
                  <OtpInput
                    inputStyle={{
                      width: "2rem",
                      height: "2rem",
                      margin: "10px 0.5rem",
                      fontSize: "2rem",
                      borderRadius: 4,
                      border: "2px solid rgba(0,0,0,0.3)",
                    }}
                    onChange={this.handleChange}
                    numInputs={6}
                    shouldAutoFocus
                    value={this.state.otp}
                    isInputNum={true}
                  />
                  <Button
                    onClick={this.clearotp}
                    className={classes.clearAllBtn}
                    color="secondary"
                    variant="contained"
                  >
                    Resentotp
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.SearchBtn}
                  >
                    submit
                  </Button>
                </div>
              </div>
            </Grid>
            {/* <Grid item xs={12}>
              <div className={classes.cctnsearchBox}>
                <Stepper
                  connector={<Connector />}
                  className={classes.cctnsearchBox1}
                  activeStep={activeStep}
                  orientation="vertical"
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        classes={{
                          iconContainer: classes.iconContainer,
                        }}
                      ></StepLabel>
                      <StepContent>
                        <Paper className={classes.papercontent}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              8/03/2029, 10:00
                            </Grid>

                            <Grid item xs={12}>
                              Physical verification completed
                            </Grid>
                          </Grid>
                        </Paper>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </Grid> */}
          </div>
        </div>
      </>
    );
  }
}

Trackstatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    // userInfo: state.auth.info,
    // isLoading: state.pcc.isLoading,
    // error: state.pcc.error,
    // message: state.pcc.message,
    // applicationNumber: state.pcc.applicationNumber,
    // savePCC: state.pcc.savePCC,
    // fetchUserDetails: state.pcc.fetchUserDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // setHeader: (data) => dispatch(setHeader(data)),
    // navigateTo: (url) => dispatch(push(url)),
    // applyPCC: (data) => dispatch(applyPCC(data)),
    // fetchUserData: (data) => dispatch(fetchUserData(data)),
    // showAlert: (messageInfo) => dispatch(showAlert(messageInfo)),
  };
}

export const styledTrackstatus = withStyles(styles)(Trackstatus);

export default connect(mapStateToProps, mapDispatchToProps)(styledTrackstatus);
