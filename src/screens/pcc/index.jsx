import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import DetailsForm from "./DetailsForm";
import AddressForm from "./AddressForm";
import PccDetailsForm from "./PccDetailsForm";
import styles from "./styles";
import getUsertype from "../../services/getUsertype";
import { push } from "connected-react-router";
import appUrls from "../../config/appUrls";
import { setHeader } from "../../components/appBar/data/actions";
import { connect } from "react-redux";
import validator from "../../services/validator/";
import { find } from "lodash";
import StepConnector from "@material-ui/core/StepConnector";

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

import NavigationDrawer from "../../components/navigationDrawer";
const steps = ["Applicant Details", "Applicant Address", "PCC Details"];

class PccApplication extends React.Component {
  state = {
    applyFor: "self",
    isOpen: true,
    activeStep: 0,
    chosen_image_name: "",
    chosen_image: "",
    data: {
      // isPermanentAddress: true,
      firstName: "",
      middleName: "",
      lastName: "",
      uid: "",
      email: "",
      relationType: "",
      relativeName: "",
      nationality: "",
      mobileNumber: "",
      landline: "",
      identificationType: "",
      identificationNumber: "",
      gender: "",
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

      chosen_file_identity: "",
      chosen_file_identity_name: "",
      chosen_file_address: "",
      chosen_file_address_name: "",
      idProofType: "",
      addressProofType: "",
      pccType: "Without Pic",
      purpose: "",
      applyingReason: "",
      previousPccNumber: "",
      previousDateTaken: "",
      previousApplyingReason: "",
    },
    errors: {
      firstName: "",
      middleName: "",
      lastName: "",
      uid: "",
      email: "",
      relationType: "",
      relativeName: "",
      nationality: "",
      mobileNumber: "",
      landline: "",
      identificationType: "",
      identificationNumber: "",
      gender: "",
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

      idProofType: "",
      addressProofType: "",
      chosen_file_identity: "",
      chosen_file_identity_name: "",
      chosen_file_address: "",
      chosen_file_address_name: "",
      pccType: "",
      purpose: "",
      applyingReason: "",
      previousPccNumber: "",
      previousDateTaken: "",
      previousApplyingReason: "",
    },
    detailsRules: {
      firstName: {
        required: false,
      },
      lastName: {
        required: true,
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
      identificationType: {
        required: true,
      },
      identificationNumber: {
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

    pccDetailsRules: {
      idProofType: { required: true },
      addressProofType: { required: true },
      purpose: { required: true },
      applyingReason: { required: true },
    },
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

  handleRadioButtonChange = (event) => {
    this.setState({
      ...this.state,
      applyFor: event.target.value,
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

  handleNext = () => {
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
      var IdentityField = this.validateIdentityImageField();

      var AddressField = this.validateAddressImageField();
      if (IdentityField && AddressField) {
        const data = new FormData();
        const regex = new RegExp("^(image)");
        if (
          this.state.data.chosen_file_identity &&
          regex.test(this.state.data.chosen_file_identity.type) &&
          this.state.data.chosen_file_address &&
          regex.test(this.state.data.chosen_file_address.type)
        ) {
          data.append(
            "id_proof_image",
            this.state.data.chosen_file_identity,
            this.state.data.chosen_file_identity_name
          );
          data.append(
            "address_proof_image",
            this.state.data.chosen_file_address,
            this.state.data.chosen_file_address_name
          );
          data.append("chosen_image", this.state.chosen_image);
          data.append(
            "data",
            JSON.stringify({
              application_details: this.state.data,
            })
          );
          if (this.validate(this.state.pccDetailsRules, this.state.data)) {
            this.setState((state) => ({
              ...this.state,
              activeStep: state.activeStep + 1,
            }));
          }
        }
      }
    }
  };

  validateIdentityImageField() {
    var identityfilename = document.getElementById("proof_of_identityfilename");

    if (this.state.data.chosen_file_identity === "") {
      identityfilename.innerHTML =
        "<span style='color: red;'>Please select a valid identity proof image file!</span>";

      return false;
    }
    const { chosen_file_identity: file } = this.state.data;

    const regex = new RegExp("^(image)");
    if (!file) return true;

    if (regex.test(file.type)) {
      if (file.size < 2097152) {
        // image should be grater than 2MB
        return true;
      } else {
        identityfilename.innerHTML =
          "<span style='color: red;'>Image should be less than 2MB</span>";

        return false;
      }
    } else {
      identityfilename.innerHTML =
        "<span style='color: red;'>Invalid file type</span>";

      return false;
    }
  }

  validateAddressImageField() {
    var addressfilename = document.getElementById("proof_of_addressfilename");
    if (this.state.data.chosen_file_address === "") {
      addressfilename.innerHTML =
        "<span style='color: red;'>Please select a valid Address proof image file!</span>";
      return false;
    }
    const { chosen_file_address: file } = this.state.data;
    const regex = new RegExp("^(image)");
    if (!file) return true;
    if (regex.test(file.type)) {
      if (file.size < 2097152) {
        // image should be grater than 2MB
        return true;
      } else {
        addressfilename.innerHTML =
          "<span style='color: red;'>Image should be less than 2MB</span>";

        return false;
      }
    } else {
      addressfilename.innerHTML =
        "<span style='color: red;'>Invalid file type</span>";
      return false;
    }
  }

  handleBack = () => {
    this.setState((state) => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleDone = () => {
    this.props.navigateTo(appUrls.TRACKING_USER);
  };

  handleSubmit = () => {
    this.setState((state) => ({
      ...this.state,
      isOpen: false,
    }));
    if (this.state.applyFor === "self") {
      this.props.fetchUserData(this.props.userInfo.user_id);
    }
  };

  onFileLoad = (e, idType) => {
    console.log("zoo");
    var addressfilename = document.getElementById("proof_of_addressfilename");

    var identityfilename = document.getElementById("proof_of_identityfilename");

    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (idType === "IDENTITY") {
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            chosen_file_identity: file,
            chosen_file_identity_name: file.name,
          },
        });
        identityfilename.innerHTML = file.name;
      } else if (idType === "ADDRESS") {
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            chosen_file_address: file,
            chosen_file_address_name: file.name,
          },
        });
        addressfilename.innerHTML = file.name;
      } else if (idType === "USERIMAGE") {
        this.setState({
          ...this.state,
          chosen_image: file,
          data: {
            ...this.state.data,
            pccType: "With Pic",
          },
        });
      }
    }
  };

  removeFile = (e, idType) => {
    var addressfilename = document.getElementById("proof_of_addressfilename");

    var identityfilename = document.getElementById("proof_of_identityfilename");
    if (idType === "IDENTITY") {
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          chosen_file_identity: "",
          chosen_file_identity_name: "",
        },
      });
      identityfilename.innerHTML = "No File Choosen";
    } else if (idType === "ADDRESS") {
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          chosen_file_address: "",
          chosen_file_address_name: "",
        },
      });
      addressfilename.innerHTML = "No File Choosen";
    } else if (idType === "USERIMAGE") {
      this.setState({
        ...this.state,
        chosen_image_name: "",
        chosen_image: "",
        data: {
          ...this.state.data,
          pccType: "Without Pic",
        },
      });
    }
  };

  validate = (rules, data) => {
    const errors = validator(rules)(data);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <DetailsForm
            onChange={this.handleChange}
            onDateChange={this.handleDateChange}
            data={this.state.data}
            errors={this.state.errors}
          />
        );
      case 1:
        return (
          <AddressForm
            isSamePermanentAddress={this.state.data.isPermanentAddress}
            onPresentChange={this.handleSameAsPermanent}
            onChange={this.handleChange}
            data={this.state.data}
            errors={this.state.errors}
          />
        );
      case 2:
        return (
          <PccDetailsForm
            onFileLoad={this.onFileLoad}
            removeFile={this.removeFile}
            imageFile={this.state.data.pcc}
            userImageFile={this.state.chosen_image ? true : false}
            identityFile={
              this.state.data.chosen_file_identity_name
                ? this.state.data.chosen_file_identity_name
                : ""
            }
            addressFile={
              this.state.data.chosen_file_address_name
                ? this.state.data.chosen_file_address_name
                : ""
            }
            onChange={this.handleChange}
            onDateChange={this.handleDateChange}
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
          <main className={classes.layout}>
            <div className={classes.root1}>
              <Grid container spacing={3}>
                <Typography className={classes.h5} variant="h5" noWrap>
                  Application For PCC
                </Typography>
                <Grid item xs={12} className={classes.main}>
                  <Paper className={classes.paper}>
                    <Stepper
                      connector={<QontoConnector />}
                      alternativeLabel
                      activeStep={activeStep}
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
                    dialogTitle={
                      "Your PCC application is successfully registered"
                    }
                    alert={
                      "Your application number is 1234567. You can track your application with the provided application number"
                    }
                    isOpen={true}
                    track={"Track your Application"}
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
                          color="primary"
                          variant="contained"
                          onClick={this.onCancel}
                          className={classes.clearAllBtn}
                        >
                          back
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
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                      </Button>
                    </div>
                  </Paper>
                </>
              )}
            </>
          </main>
          {this.props.isLoading ? <CircularIndeterminate /> : null}

          <Grid justify="center" container></Grid>
        </div>
      </>
    );
  }
}

PccApplication.propTypes = {
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

export const styledPccApplication = withStyles(styles)(PccApplication);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledPccApplication);
