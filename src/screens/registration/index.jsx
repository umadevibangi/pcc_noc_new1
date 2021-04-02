import React from "react";
// import { connect } from "react-redux";
import StepConnector from "@material-ui/core/StepConnector";
import AdjustSharpIcon from "@material-ui/icons/AdjustSharp";
import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import PersonalDetails from "./PersonalDetails";
import AddressDetail from "./AddressDetail";
import SignupDetails from "./SignupDetails";
import styles from "./styles";
import validator from "../../services/validator/";
import { find } from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import appUrls from "../../config/appUrls";
// import { setHeader, setBackURL } from "../../components/appBar/data/actions";
// import { signUp } from "./data/actions";
// import { showAlert } from "../../components/snackbar/data/actions";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import CircularIndeterminate from "../../components/circular/CircularIndeterminate";
import AlertDialog from "../../components/Dialogs";

const steps = ["Applicant Details", "Applicant Address", "Login Details"];

class Registration extends React.Component {
  state = {
    activeStep: 0,
    // sameasPresent: true,
    data: {
      isPermanentAddress: true,
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
      mobileNumber: "",
      nationality: "",
      landline: "",
      identificationType: "",
      gender: "",
      identificationNumber: "",
      dob: "",
      permanentHouseNo: "",
      permanentStreetName: "",
      permanentArea: "",
      permanentVillage: "",
      permanentTehsil: "",
      permanentCountry: "",
      permanentState: "",
      permanentDistrict: "",
      permanentPoliceStation: "",
      permanentPincode: "",
      presentHouseNo: "",
      presentStreetName: "",
      presentArea: "",
      presentVillage: "",
      presentTehsil: "",
      presentCountry: "",
      presentState: "",
      presentDistrict: "",
      presentPoliceStation: "",
      presentPincode: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    errors: {
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
      mobileNumber: "",
      nationality: "",
      landline: "",
      identificationType: "",
      gender: "",
      identificationNumber: "",
      dob: "",
      permanentHouseNo: "",
      permanentStreetName: "",
      permanentArea: "",
      permanentVillage: "",
      permanentTehsil: "",
      permanentCountry: "",
      permanentState: "",
      permanentDistrict: "",
      permanentPoliceStation: "",
      permanentPincode: "",
      presentHouseNo: "",
      presentStreetName: "",
      presentArea: "",
      presentVillage: "",
      presentTehsil: "",
      presentCountry: "",
      presentState: "",
      presentDistrict: "",
      presentPoliceStation: "",
      presentPincode: "",

      username: "",
      password: "",
      confirmPassword: "",
    },
    detailsRules: {
      firstname: {
        required: false,
      },
      lastname: {
        required: true,
      },
      email: {
        email: true,
      },
      mobileNumber: {
        required: true,
        number: true,
        mobile: true,
      },
      nationality: {
        required: true,
      },
      gender: {
        required: true,
      },
      dob: {
        required: true,
      },
    },
    addressRules: {
      presentVillage: { required: true },
      presentCountry: { required: true },
      presentState: { required: true },
      presentDistrict: { required: true },
      presentPoliceStation: { required: true },
      presentPincode: { required: true },
      permanentVillage: { required: true },
      permanentCountry: { required: true },
      permanentState: { required: true },
      permanentDistrict: { required: true },
      permanentPoliceStation: { required: true },
      permanentPincode: { required: true },
    },
    presentSameAddressRules: {
      permanentVillage: { required: true },
      permanentCountry: { required: true },
      permanentState: { required: true },
      permanentDistrict: { required: true },
      permanentPoliceStation: { required: true },
      permanentPincode: { required: true },
    },
    loginRules: {
      username: {
        required: true,
      },
      password: {
        required: true,
      },
      confirmPassword: {
        required: true,
      },
    },
  };

  validate = (rules, data) => {
    const errors = validator(rules)(data);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };

  handleChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
      },
    });
  };

  handleDateChange = (name, date) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: moment(date).format("YYYY-MM-DD"),
      },
    });
  };
  handleSameAsPermanent = () => {
    if (this.state.data.isPermanentAddress) {
      this.setState((state) => ({
        data: {
          ...state.data,
          isPermanentAddress: !state.data.isPermanentAddress,
          presentHouseNo: "",
          presentStreetName: "",
          presentArea: "",
          presentVillage: "",
          presentTehsil: "",
          presentCountry: "",
          presentState: "",
          presentDistrict: "",
          presentPoliceStation: "",
          presentPincode: "",
        },
      }));
    } else {
      this.setState((state) => ({
        ...this.state,
        data: {
          ...this.state.data,
          isPermanentAddress: !state.data.isPermanentAddress,
        },
      }));
    }
  };

  handlePermanantChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        permanantAddress: {
          ...this.state.data.permanantAddress,
          [event.target.name]: event.target.value,
        },
      },
    });
  };
  onCancel = (event) => {
    this.props.navigateTo("/login");
  };
  handleCancel = (event) => {
    this.props.navigateTo("/login");
  };

  handleNext = () => {
    console.log("uma");
    if (this.state.activeStep === 0) {
      if (this.validate(this.state.detailsRules, this.state.data)) {
        this.setState((state) => ({
          ...this.state,
          activeStep: state.activeStep + 1,
        }));
      }
    } else if (this.state.activeStep === 1) {
      if (this.state.data.isPermanentAddress) {
        if (
          this.validate(this.state.presentSameAddressRules, this.state.data)
        ) {
          this.setState((state) => ({
            ...this.state,
            activeStep: state.activeStep + 1,
            data: {
              ...state.data,
              presentHouseNo: state.data.permanentHouseNo,
              presentStreetName: state.data.permanentStreetName,
              presentArea: state.data.permanentArea,
              presentVillage: state.data.permanentVillage,
              presentTehsil: state.data.permanentTehsil,
              presentCountry: state.data.permanentCountry,
              presentState: state.data.permanentState,
              presentDistrict: state.data.permanentDistrict,
              presentPoliceStation: state.data.permanentPoliceStation,
              presentPincode: state.data.permanentPincode,
            },
          }));
        }
      } else {
        if (this.validate(this.state.addressRules, this.state.data)) {
          this.setState((state) => ({
            ...this.state,
            activeStep: state.activeStep + 1,
          }));
        }
      }
    } else if (this.state.activeStep === 2) {
      const permanentAddressJSON = JSON.stringify({
        permanentHouseNo: this.state.data.permanentHouseNo,
        permanentStreetName: this.state.data.permanentStreetName,
        permanentArea: this.state.data.permanentArea,
        permanentVillage: this.state.data.permanentVillage,
        permanentTehsil: this.state.data.permanentTehsil,
        permanentCountry: this.state.data.permanentCountry,
        permanentState: this.state.data.permanentState,
        permanentDistrict: this.state.data.permanentDistrict,
        permanentPoliceStation: this.state.data.permanentPoliceStation,
        permanentPincode: this.state.data.permanentPincode,
      });
      const presentAddressJSON = JSON.stringify({
        presentHouseNo: this.state.data.presentHouseNo,
        presentStreetName: this.state.data.presentStreetName,
        presentArea: this.state.data.presentArea,
        presentVillage: this.state.data.presentVillage,
        presentTehsil: this.state.data.presentTehsil,
        presentCountry: this.state.data.presentCountry,
        presentState: this.state.data.presentState,
        presentDistrict: this.state.data.presentDistrict,
        presentPoliceStation: this.state.data.presentPoliceStation,
        presentPincode: this.state.data.presentPincode,
      });

      const data = {
        email: this.state.data.email,
        first_name: this.state.data.firstname,
        middle_name: this.state.data.middleName
          ? this.state.data.middleName
          : "",
        last_name: this.state.data.lastname,
        mobile_no: this.state.data.mobileNumber,
        nationality: this.state.data.nationality,
        landline_no: this.state.data.landline,
        id_type: this.state.data.identificationType
          ? this.state.data.identificationType
          : "",
        gender: this.state.data.gender,
        id_number: this.state.data.identificationNumber,
        dob: this.state.data.dob,
        username: this.state.data.username,
        password: this.state.data.password,
        is_superuser: false,
        is_address_same: this.state.data.isPermanentAddress
          ? this.state.data.isPermanentAddress
          : false,
        user_type: 7,
        effective_from_date: moment().format().split("T")[0],
        effective_to_date: null,
        permanent_address: permanentAddressJSON,
        present_address: presentAddressJSON,
      };

      if (this.state.data.password != this.state.data.confirmPassword) {
        console.log("active step");
        console.log(this.state.activeStep);
        this.setState({
          errors: {
            ...this.state.errors,
            confirmPassword: "Passwords do not match",
          },
        });
        return false;
      } else if (this.validate(this.state.loginRules, this.state.data)) {
        // this.props.signUp(data);
        this.setState((state) => ({
          ...this.state,
          activeStep: state.activeStep + 1,
        }));
      }
    }
  };

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.saveRegistration &&
  //     this.props.saveRegistration !== prevProps.saveRegistration
  //   ) {
  //     let messageInfo = {
  //       message: "Registration completed successfully",
  //       variant: "success"
  //     };
  //     this.props.showAlert(messageInfo);
  //     this.setState(state => ({
  //       ...this.state,
  //       activeStep: 3
  //     }));
  //   }
  //   if (this.props.error && this.props.error !== prevProps.error) {
  //     let messageInfo = {
  //       message: this.props.error,
  //       variant: "error"
  //     };
  //     this.props.showAlert(messageInfo);
  //   }
  // }

  handleBack = () => {
    this.setState((state) => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          // <AddressDetail
          //   isSamePermanentAddress={this.state.data.isPermanentAddress}
          //   onPresentChange={this.handleSameAsPermanent}
          //   onChange={this.handleChange}
          //   data={this.state.data}
          //   errors={this.state.errors}
          // />
          <PersonalDetails
            onChange={this.handleChange}
            onDateChange={this.handleDateChange}
            data={this.state.data}
            errors={this.state.errors}
          />
        );
      case 1:
        return (
          <AddressDetail
            isSamePermanentAddress={this.state.data.isPermanentAddress}
            onPresentChange={this.handleSameAsPermanent}
            onChange={this.handleChange}
            data={this.state.data}
            errors={this.state.errors}
          />
        );
      case 2:
        return (
          <SignupDetails
            isSamePermanentAddress={this.state.data.isPermanentAddress}
            onPresentChange={this.handleSameAsPermanent}
            onChange={this.handleChange}
            data={this.state.data}
            errors={this.state.errors}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const QontoConnector = withStyles({
      alternativeLabel: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)",
      },
      Dash: {
        // direction: Axis.vertical,
        length: 130,
        dashLength: 15,
        dashColor: "grey",
      },
      active: {
        "& $line": {
          borderColor: "#65BC6B",
          borderTopWidth: 3,
          borderRadius: 1,

          borderStyle: "solid",
        },
      },
      completed: {
        "& $line": {
          borderTopWidth: 3,
          borderRadius: 1,
          borderColor: "#65BC6B",
          borderStyle: "solid",
        },
      },
      line: {
        // borderColor: "#eaeaf0",

        border: "dashed 1.4px #eaeaf0",
      },
    })(StepConnector);
    const useRadioButtonUncheckedIconStyles = makeStyles({
      root: {
        color: "#eaeaf0",
        display: "flex",
        height: 22,
        alignItems: "center",
      },
      active: {
        color: "#784af4",
      },
      circle: {
        width: 25,
        height: 25,
        borderColor: "black",
        borderRadius: "100%",

        backgroundColor: "#eaeaf0",

        clipPath: "50%",
      },

      completed: {
        color: "white",
        backgroundColor: "#65BC6B",
        // borderRadius:"20"
        // width: "10%",
        // height: "10",
        width: 25,
        height: 25,
        borderRadius: "500%",
        zIndex: 1,
        fontSize: 18,
      },
    });
    function RadioButtonUncheckedIcon(props) {
      const classes = useRadioButtonUncheckedIconStyles();
      const { active, completed } = props;

      return (
        <div
          className={clsx(classes.root, {
            [classes.active]: active,
          })}
        >
          {completed ? (
            <Check className={classes.completed} />
          ) : (
            <div className={classes.circle} />
          )}
        </div>
      );
    }

    RadioButtonUncheckedIcon.propTypes = {
      /**
       * Whether this step is active.
       */
      active: PropTypes.bool,
      /**
       * Mark the step as completed. Is passed to child components.
       */
      completed: PropTypes.bool,
    };

    const ColorlibConnector = withStyles({
      alternativeLabel: {
        top: 22,
      },
      active: {
        "& $line": {
          backgroundImage:
            "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
      },
      completed: {
        "& $line": {
          backgroundImage:
            "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
      },
      line: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
      },
    })(StepConnector);

    const useColorlibStepIconStyles = makeStyles({
      root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 50,
        height: 50,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
      },
      active: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
      completed: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      },
    });

    return (
      <>
        <div className={classes.fullscreencolor}>
          <AppBar position="static" className={classes.appBar}>
            <CssBaseline />
            <Toolbar>
              <IconButton
                href="/login"
                color="inherit"
                aria-label="Close"
                onClick={this.handleCancel}
                // onClick={handleDrawerToggle}
              >
                <CloseIcon className={classes.Closeicon} />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Registration Details
              </Typography>
            </Toolbar>
          </AppBar>
          <main className={classes.layout}>
            <div className={classes.root1}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Stepper
                      connector={<QontoConnector />}
                      activeStep={activeStep}
                      alternativeLabel
                      className={classes.stepper}
                    >
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel
                            className={classes.stepper1}
                            StepIconComponent={RadioButtonUncheckedIcon}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <>
              {activeStep === steps.length ? (
                <>
                  <AlertDialog
                    dialogTitle={"Thank you"}
                    alert={"Your details has been submitted successfully"}
                    isOpen={true}
                    track={"login"}
                  />
                </>
              ) : (
                <>
                  <Typography className={classes.h6} variant="h6" noWrap>
                    Applicant Details
                  </Typography>
                  <Paper className={classes.paper1}>
                    {this.getStepContent(activeStep)}

                    <div className={classes.buttons}>
                      {activeStep == 0 && (
                        <Button
                          href="/login"
                          color="secondary"
                          variant="contained"
                          onClick={this.onCancel}
                          className={classes.clearAllBtn}
                        >
                          clear all
                        </Button>
                      )}
                      {activeStep !== 0 && (
                        <Button
                          onClick={this.handleBack}
                          variant="contained"
                          color="primary"
                          className={classes.clearAllBtn}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.SearchBtn}
                        // color="primary"
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                      </Button>
                    </div>
                  </Paper>
                </>
              )}
            </>
            {this.props.isLoading ? <CircularIndeterminate /> : null}
          </main>
        </div>
      </>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    // showAlert: messageInfo => dispatch(showAlert(messageInfo)),
    // signUp: data => dispatch(signUp(data)),
    // setHeader: data => dispatch(setHeader(data)),
    // setBackURL: data => dispatch(setBackURL(data)),
    navigateTo: (url) => dispatch(push(url)),
  };
}

export const StyledRegistration = withStyles(styles)(Registration);

export default connect(mapStateToProps, mapDispatchToProps)(StyledRegistration);
