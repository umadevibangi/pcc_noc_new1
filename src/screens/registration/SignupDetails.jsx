import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

// import dropdownData from "../../constants";

const SignupDetails = ({ onChange, data, errors }) => {
  return (
    <>
      <Grid>
        <Grid container direction="row" spacing={3}>
          <Grid item md={4} xs={12}>
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
              User Name
            </label>

            <FormControl error fullWidth>
              <TextField
                id="username"
                name="username"
                onChange={onChange}
                value={data.username ? data.username : ""}
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
                placeholder="User Name"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.username ? (
                <FormHelperText>{errors.username}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <label
              style={{
                color: "#646d7e",
                opacity: "1",
                fontWeight: "600",
                fontSize: "small",
              }}
            >
              Password
            </label>
            <FormControl error fullWidth>
              <TextField
                // style={{ marginTop: 15 }}
                required
                maxLength={30}
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={data.password ? data.password : ""}
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
                placeholder="Password"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.password ? (
                <FormHelperText>{errors.password}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <label
              style={{
                color: "#646d7e",
                opacity: "1",
                fontWeight: "600",
                fontSize: "small",
              }}
            >
              Confirm Password
            </label>
            <FormControl error fullWidth>
              <TextField
                required
                maxLength={30}
                id="confirmPassword"
                type="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={onChange}
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
                placeholder="Confirm Password"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.confirmPassword ? (
                <FormHelperText>{errors.confirmPassword}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupDetails;
