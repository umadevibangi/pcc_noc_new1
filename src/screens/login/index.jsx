import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { find } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Link from "@material-ui/core/Link";
import styles from "./styles";
import validator from "../../services/validator/";
import CircularIndeterminate from "../../components/circular/CircularIndeterminate";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Fab from "@material-ui/core/Fab";
// import UltsLogo from "../../assets/images/ults-logo.png";
import appUrls from "../../config/appUrls";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import getUsertype from "../../services/getUsertype";
import CircularProgress from "@material-ui/core/CircularProgress";
// import classNames from "classnames";
import CheckIcon from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import { Paper, Hidden } from "@material-ui/core";
import { Lock, Person } from "@material-ui/icons";
// import Reaptcha from "reaptcha";
import loginImage from "../../assets/images//Login_Image.png";
import KpLogo from "../../assets/images/kerala_police_logo.png";
// import KpLogo from "../../src/assets/images/kerala_police_logo.png";
import UltsLogo from "../../assets/images/ults-logo2.png";
import bg from "../../assets/images/Bg.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      loading: false,
      success: false,
      isVerified: false,
      data: {
        username: "",
        password: "",
        hashcode: "",
      },
      errors: {
        username: "",
        password: "",
        hashcode: "",
      },
      rules: {
        username: {
          required: true,
        },
        password: {
          required: true,
        },
      },
      rules2: {
        hashcode: {
          required: true,
        },
      },
    };
  }
  onSignUp = (event) => {
    this.props.navigateTo("/register");
  };
  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [event.target.name]: event.target.value },
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
      },
    });
  };

  render() {
    const { loading, success, data } = this.state;
    const { classes } = this.props;
    // const buttonClassname = classNames({
    //   [classes.buttonSuccess]: success && data.hashcode,
    //   [classes.verifyButton]: !success,
    // });
    return (
      <div className={classes.root}>
        <Grid container className={classes.loginPage}>
          <Hidden container className={classes.login} xsDown>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.leftContent}
              item
              xs={12}
              md={6}
            >
              <img className={classes.leftImage} src={bg} alt="Bg"></img>
              <img
                className={classes.leftImage1}
                src={loginImage}
                alt="LoginImage"
              />
              <div className={classes.PoweredBy}>Powered by Blockchain.</div>
            </Grid>
          </Hidden>
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            className={classes.rightContent}
          >
            <Grid item xs={12} md={6} className={classes.rightContent1}>
              <img
                src={KpLogo}
                className={classes.keralaPoliceLogo}
                alt="Kerala Police Logo"
              />
              <Typography color="inherit" variant="h3" className={classes.h1}>
                Welcome!
              </Typography>
              <Typography color="inherit" variant="h4" className={classes.h2}>
                Kerala police
              </Typography>
              <form className={classes.form1}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <OutlinedInput
                      // id="outlined-basic"
                      // label="Username"
                      placeholder="Username"
                      // variant="outlined"
                      className={classes.TextField}
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <Person />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <OutlinedInput
                      id="adornment-password"
                      value={this.state.data.password}
                      type={this.state.showPassword ? "text" : "password"}
                      // id="outlined-basic"
                      // label="Password"
                      onChange={(e) => this.handleChange(e)}
                      name="password"
                      placeholder="password"
                      variant="outlined"
                      className={classes.TextField}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <Lock />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <a className={classes.a}>Forgot Your Password?</a>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.marginTOP}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link
                      href="/register"
                      onClick={this.onSignUp}
                      className={classes.dontHaveAccount}
                    >
                      Don't have an account? SignUp
                    </Link>
                    <Typography className={classes.dontHaveAccount1}>
                      Continue as Guest
                    </Typography>
                  </Grid>
                </Grid>
              </form>

              <div className={classes.powerdByText}>
                Powered By
                <img
                  src={UltsLogo}
                  className={classes.ultsLogo}
                  alt="Kerala Police Logo"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}

export const StyledLogin = withStyles(styles)(Login);

export default connect(mapStateToProps, mapDispatchToProps)(StyledLogin);
