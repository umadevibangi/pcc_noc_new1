import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { connect } from "react-redux";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import {
  openClosePasswordDialog,
  changePassword,
  resetChangePasswordProps
} from "./data/actions";
import { showAlert } from "../../snackbar/data/actions";
import CircularIndeterminate from "../../circular/CircularIndeterminate";
import validator from "../../../services/validator/";
import { find } from "lodash";

class ChangePasswordDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showNewConfirmedPassword: false,
      showConfirmPassword: false,
      data: {
        password: "",
        newPassword: "",
        confirmPassword: ""
      },
      errors: {
        password: "",
        newPassword: "",
        confirmPassword: ""
      },
      rules: {
        password: { required: true },
        newPassword: { required: true },
        confirmPassword: { required: true }
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.error && this.props.error !== prevProps.error) {
      let messageInfo = {
        message: this.props.error,
        variant: "error"
      };
      this.props.showAlert(messageInfo);
    }
    if (
      this.props.changePasswordSuccess &&
      this.props.changePasswordSuccess !== prevProps.changePasswordSuccess
    ) {
      this.setState({});
      console.log("Inside condition");
      let messageInfo = {
        message: this.props.message,
        variant: "success"
      };
      this.props.showAlert(messageInfo);
      this.props.resetChangePasswordProps();
      this.resetState();
    }
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(state => ({
      showConfirmPassword: !state.showConfirmPassword
    }));
  };

  handleClickShowNewPassword = () => {
    this.setState(state => ({
      showNewConfirmedPassword: !state.showNewConfirmedPassword
    }));
  };

  handleChange = event => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
      errors: {
        ...this.state.errors,
        [event.target.name]: ""
      }
    });
  };

  validate = (rules, data) => {
    const errors = validator(rules)(data);
    const hasErrors = find(errors, error => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };

  submitClickHandler = event => {
    event.preventDefault();
    if (this.validate(this.state.rules, this.state.data)) {
      if (this.state.data.newPassword === this.state.data.confirmPassword) {
        const data = {
          current_password: this.state.data.password,
          new_password: this.state.data.newPassword
        };
        this.props.changePassword(data, this.props.userId);
      } else {
        let messageInfo = {
          message: "Passwords don't match!",
          variant: "warning"
        };
        this.props.showAlert(messageInfo);
      }
    }
  };

  cancelClickHandler = event => {
    event.preventDefault();
    this.resetState();
    this.props.openClosePasswordDialog();
  };

  resetState = () => {
    this.setState({
      showPassword: false,
      showNewConfirmedPassword: false,
      showConfirmPassword: false,
      data: {
        password: "",
        newPassword: "",
        confirmPassword: ""
      },
      errors: {
        password: "",
        newPassword: "",
        confirmPassword: ""
      }
    });
  };

  render() {
    const {
      data,
      errors,
      showPassword,
      showNewConfirmedPassword,
      showConfirmPassword
    } = this.state;
    const { classes, isOpen } = this.props;
    return (
      <div>
        <Dialog
          open={isOpen}
          aria-labelledby="alert-dialog-title"
          disableBackdropClick={true}
          disableRestoreFocus={true}
        >
          <DialogTitle>Change Password</DialogTitle>
          <DialogContent>
            <Grid className={classes.inputfieldGrid}>
              <FormControl
                error={errors.password ? true : false}
                className={classes.textField}
              >
                <InputLabel htmlFor="adornment-password">
                  Current Password
                </InputLabel>
                <Input
                  id="adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  name="password"
                  onChange={e => this.handleChange(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password ? (
                  <FormHelperText>{errors.password}</FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
            <Grid className={classes.inputfieldGrid}>
              <FormControl
                error={errors.newPassword ? true : false}
                className={classes.textField}
              >
                <InputLabel htmlFor="adornment-password">
                  New Password
                </InputLabel>
                <Input
                  id="adornment-password"
                  type={showNewConfirmedPassword ? "text" : "password"}
                  value={data.newPassword}
                  name="newPassword"
                  onChange={e => this.handleChange(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowNewPassword}
                      >
                        {showNewConfirmedPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.newPassword ? (
                  <FormHelperText>{errors.newPassword}</FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
            <Grid className={classes.inputfieldGrid}>
              <FormControl
                error={errors.confirmPassword ? true : false}
                className={classes.textField}
              >
                <InputLabel htmlFor="adornment-password">
                  Confirm Password
                </InputLabel>
                <Input
                  id="adornment-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={e => this.handleChange(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.confirmPassword ? (
                  <FormHelperText>{errors.confirmPassword}</FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.cancelClickHandler} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitClickHandler} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
          {this.props.isLoading ? <CircularIndeterminate /> : null}
        </Dialog>
      </div>
    );
  }
}

ChangePasswordDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.changePasswordDialog.isLoading,
    changePasswordSuccess: state.changePasswordDialog.changePasswordSuccess,
    message: state.changePasswordDialog.message,
    error: state.changePasswordDialog.error,
    userId: state.auth.info.user_id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openClosePasswordDialog: () => dispatch(openClosePasswordDialog()),
    changePassword: (data, id) => dispatch(changePassword(data, id)),
    showAlert: messageInfo => dispatch(showAlert(messageInfo)),
    resetChangePasswordProps: () => dispatch(resetChangePasswordProps())
  };
}

const styledChangePasswordDialog = withStyles(styles)(ChangePasswordDialog);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledChangePasswordDialog);
