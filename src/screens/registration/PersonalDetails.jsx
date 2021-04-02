import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Button from "@material-ui/core/Button";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";
// import MomentUtils from "@date-io/moment";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";

import { DatePicker } from "material-ui-pickers/DatePicker";

// import dropdownData from "../../constants";

const PersonalDetails = ({ onChange, onDateChange, data, errors }) => {
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
              First Name
            </label>

            <FormControl error fullWidth>
              <TextField
                id="fname"
                name="firstname"
                value={data.firstname ? data.firstname : ""}
                onChange={onChange}
                autoComplete="fname"
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
                placeholder="First Name"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.firstname ? (
                <FormHelperText>{errors.firstname}</FormHelperText>
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
              Middle Name
            </label>
            <FormControl error fullWidth>
              <TextField
                // style={{ marginTop: 15 }}
                id="middlename"
                name="middlename"
                value={data.middlename ? data.middlename : ""}
                onChange={onChange}
                autoComplete="middlename"
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
                placeholder="Middle Name"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
              Last Name
            </label>
            <FormControl error fullWidth>
              <TextField
                required
                id="lname"
                name="lastname"
                value={data.lastname ? data.lastname : ""}
                onChange={onChange}
                autoComplete="lname"
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
                placeholder="last name"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.email ? (
                <FormHelperText>{errors.email}</FormHelperText>
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
              Email ID
            </label>
            <FormControl error fullWidth>
              <TextField
                id="email"
                name="email"
                value={data.email ? data.email : ""}
                onChange={onChange}
                autoComplete="email"
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
                placeholder="Email ID"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
              Mobile Number
            </label>
            <FormControl error fullWidth>
              <TextField
                id="mobNum"
                name="mobileNumber"
                value={data.mobileNumber ? data.mobileNumber : ""}
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
                placeholder="Mobile Number"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="mobnumber"
              />
              {errors.mobileNumber ? (
                <FormHelperText>{errors.mobileNumber}</FormHelperText>
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
              Landline Number
            </label>
            <FormControl error fullWidth>
              <TextField
                id="landline"
                name="landline"
                value={data.landline ? data.landline : ""}
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
                placeholder="Landline Number"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="landline"
              />
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl
              fullWidth
              error={errors.nationality ? errors.nationality : ""}
            >
              <label
                style={{
                  color: "#646d7e",
                  opacity: "1",
                  fontWeight: "600",
                  fontSize: "small",
                }}
              >
                Nationality
              </label>
              <TextField
                select
                inputProps={{ "aria-label": "Without label" }}
                id="nationality"
                name="nationality"
                value={data.nationality ? data.nationality : ""}
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
                // placeholder="Nationality"
                // margin="Dense"
                InputProps={{ disableUnderline: true }}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              >
                <option value="select">select nationality</option>
                <option value="Angular">hindu</option>
                <option value="Bootstrap">muslim</option>
                <option value="React">others</option>
              </TextField>
              {errors.nationality ? (
                <FormHelperText>{errors.nationality}</FormHelperText>
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
              Identificatin type
            </label>
            <FormControl fullWidth>
              <TextField
                select
                id="identificationType"
                name="identification-type"
                value={data.identificationType ? data.identificationType : ""}
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
                placeholder="Identificatin type"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {" "}
                <option value="select">select Identificatin type</option>
                <option value="Angular">Adhar</option>
                <option value="Bootstrap">pancard</option>
                <option value="React">others</option>
              </TextField>
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
              Identificatin Number
            </label>
            <FormControl fullWidth>
              <TextField
                id="identificationNumber"
                name="identificationNumber"
                value={
                  data.identificationNumber ? data.identificationNumber : ""
                }
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
                placeholder="Identificatin Number"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
              Gender
            </label>
            <FormControl fullWidth error={errors.gender ? errors.gender : ""}>
              <TextField
                select
                id="gender"
                name="gender"
                value={data.gender ? data.gender : ""}
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
                placeholder="Gender"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
              >
                <option value="none" selected>
                  select gender
                </option>
                <option value="Angular">male</option>
                <option value="Bootstrap">female</option>
                <option value="React">others</option>
              </TextField>
              {errors.gender ? (
                <FormHelperText>{errors.gender}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          {/* <select id="lang">
            <option value="select">Select a technology</option>
            <option value="Angular">Angular</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="React">React</option>
          </select> */}
          <Grid item md={4} xs={12}>
            <label
              style={{
                color: "#646d7e",
                opacity: "1",
                fontWeight: "600",
                fontSize: "small",
              }}
            >
              Date of Birth
            </label>
            <FormControl fullWidth error={errors.dob ? errors.dob : ""}>
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
                  name="to_date"
                  id="date-picker-dialog"
                  placeholder="date of birth*"
                  format="dd/MM/yyyy"
                  disableOpenOnEnter
                  error={errors.to_date ? true : false}
                  value={data.dob ? data.dob : null}
                  onChange={(date) => onDateChange("dob", date)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  InputProps={{ disableUnderline: true }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.dob ? (
                  <FormHelperText>{errors.dob}</FormHelperText>
                ) : (
                  ""
                )}
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalDetails;
