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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DateRange from "@material-ui/icons/DateRange";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormHelperText from "@material-ui/core/FormHelperText";
class report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to: null,
      reportId: "",
    };

    // handleChangeStartDate = (event) => {
    //   this.setState({
    //     ...this.state,
    //     Data: {
    //       ...this.state.Data,
    //       from_date: moment(event).format("YYYY-MM-DD"),
    //     },
    //   });
    // };
    // handleChangeReturnDate = (event) => {
    //   this.setState({
    //     ...this.state,
    //     employeeData: {
    //       ...this.state.employeeData,
    //       to_date: moment(event).format("YYYY-MM-DD"),
    //     },
    //   });
    // };
  }
  handleDateChange = (name, date) => {
    this.setState({
      [name]: moment(date).format("YYYY-MM-DD"),
    });
  };
  handleComboChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.dashboardContent}>
          <Grid item xs={12}>
            <Typography className={classes.h6} variant="h6" noWrap>
              History
            </Typography>
          </Grid>

          <div className={classes.cctnResults}>
            {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
            <Grid xs={12} md={12}>
              <div className={classes.cctnsearchBox}>
                <Grid container direction="row" spacing={3}>
                  <Grid item md={3} xs={12}>
                    <label
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                        // textAlign: "start",
                        // justifyContent: "flex-start",
                        // marginRight: "70%",
                      }}
                    >
                      Report ID
                    </label>

                    <TextField
                      autoComplete="reportid"
                      style={{
                        position: "relative",
                        minWidth: "95%",
                        background: "#ffffff 0% 0%",
                        borderRadius: " 4px",
                        opacity: "1",
                        marginTop: "8px",
                        fontSize: "small",
                        border: " 1px solid #ccc",
                        paddingRight: "24px",
                        padding: "3px 14px",
                        color: "#a2a2a2",
                      }}
                      placeholder="Enter Report ID"
                      margin="Dense"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      id="report-id"
                      name="reportId"
                      onChange={this.handleComboChange("reportId")}
                      value={this.state.reportId}
                    />
                  </Grid>
                  <Grid item md={3} xs={12}>
                    <label
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                      }}
                    >
                      From
                    </label>
                    <FormControl fullWidth>
                      <MuiPickersUtilsProvider
                        style={{ color: "#ffd500" }}
                        utils={DateFnsUtils}
                      >
                        <KeyboardDatePicker
                          style={{
                            position: "relative",
                            minWidth: "95%",
                            background: "#ffffff 0% 0%",
                            borderRadius: " 4px",
                            opacity: "1",
                            marginTop: "8px",
                            fontSize: "small",
                            border: " 1px solid #ccc",
                            paddingRight: "24px",
                            padding: "4.5px 14px",
                            color: "#a2a2a2",
                            height: "130%",
                          }}
                          margin="dense"
                          disableToolbar
                          name="from"
                          value={this.state.from}
                          onChange={(date) =>
                            this.handleDateChange("from", date)
                          }
                          id="date-picker-dialog"
                          placeholder="Start Date*"
                          format="dd/MM/yyyy"
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                  </Grid>
                  <Grid item md={3} xs={12}>
                    <label
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                      }}
                    >
                      To
                    </label>
                    <FormControl fullWidth>
                      <MuiPickersUtilsProvider
                        style={{ color: "#ffd500" }}
                        utils={DateFnsUtils}
                      >
                        <KeyboardDatePicker
                          style={{
                            position: "relative",
                            minWidth: "95%",
                            background: "#ffffff 0% 0%",
                            borderRadius: " 4px",
                            opacity: "1",
                            marginTop: "8px",
                            fontSize: "small",
                            border: " 1px solid #ccc",
                            paddingRight: "24px",
                            padding: "4.5px 14px",
                            color: "#a2a2a2",
                            height: "130%",
                          }}
                          margin="dense"
                          disableToolbar
                          id="date-picker-dialog"
                          placeholder="Start Date*"
                          format="dd/MM/yyyy"
                          name="To"
                          value={this.state.to}
                          onChange={(date) => this.handleDateChange("to", date)}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <label
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                      }}
                    >
                      Report Type
                    </label>
                    <TextField
                      select
                      autoComplete=" Report Type"
                      style={{
                        position: "relative",
                        minWidth: "95%",
                        background: "#ffffff 0% 0%",
                        borderRadius: " 4px",
                        opacity: "1",
                        marginTop: "8px",
                        fontSize: "small",
                        border: " 1px solid #ccc",
                        paddingRight: "24px",
                        padding: "3px 14px",
                        color: "#a2a2a2",
                      }}
                      placeholder="select report type "
                      margin="Dense"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {" "}
                      <option>select reporttype</option>
                      <option>normal</option>
                      <option>previous</option>
                      <option>others</option>
                    </TextField>
                  </Grid>
                  <Grid item md={3} xs={12}>
                    <label
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                      }}
                    >
                      Status
                    </label>
                    <TextField
                      select
                      autoComplete="status"
                      style={{
                        position: "relative",
                        minWidth: "95%",
                        background: "#ffffff 0% 0%",
                        borderRadius: " 4px",
                        opacity: "1",
                        marginTop: "8px",
                        fontSize: "small",
                        border: " 1px solid #ccc",
                        paddingRight: "24px",
                        padding: "3px 14px",
                        color: "#a2a2a2",
                      }}
                      placeholder="select status"
                      margin="Dense"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {" "}
                      <option selected>select gender</option>
                      <option>completed</option>
                      <option>pending</option>
                    </TextField>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        // color="primary"
                        className={classes.clearAllBtn}
                      >
                        Clear
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.SearchBtn}
                        variant="contained"
                        color="primary"
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.cctnsearchBox}>
                <Grid item xs={12}>
                  <Grid
                    container
                    className={classes.passportRequestBg}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid xs={12} md={12}>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <FolderOpenIcon className={classes.folderIcon} />
                          <Typography className={classes.heading}>
                            Report ID : 1
                          </Typography>
                          <FiberManualRecordIcon
                            fontSize="small"
                            className={classes.completedGreen}
                          />
                          <Typography className={classes.subHeading}>
                            {" "}
                            Completed
                          </Typography>
                        </ExpansionPanelSummary>
                        <Divider />
                        <ExpansionPanelDetails>
                          <Grid
                            container
                            direction="row"
                            spacing={3}
                            justify="flex-start"
                            alignItems="center"
                          >
                            <Grid item xs={12} md={3}>
                              <Typography className={classes.ContentsText}>
                                Created By
                              </Typography>
                              <Typography className={classes.ContentsText}>
                                Jinesh
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Typography className={classes.ContentsText}>
                                Created On
                              </Typography>
                              <Typography className={classes.ContentsText}>
                                21-02-2019
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Typography className={classes.ContentsText}>
                                Last Modified By
                              </Typography>
                              <Typography className={classes.ContentsText}>
                                Aksash
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Typography className={classes.ContentsText}>
                                Last Modified On
                              </Typography>
                              <Typography className={classes.ContentsText}>
                                23-02-2019
                              </Typography>
                            </Grid>
                          </Grid>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions className={classes.button}>
                          <Button
                            className={classes.button1}
                            variant="contained"
                            color="secondary"
                          >
                            View Application
                          </Button>
                          <Button
                            className={classes.button1}
                            variant="contained"
                            color="primary"
                          >
                            View Log
                          </Button>
                          <Button
                            className={classes.button1}
                            variant="contained"
                            color="secondary"
                          >
                            Verification Report
                          </Button>
                        </ExpansionPanelActions>
                      </ExpansionPanel>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

report.propTypes = {
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

export const styledreport = withStyles(styles)(report);

export default connect(mapStateToProps, mapDispatchToProps)(styledreport);
