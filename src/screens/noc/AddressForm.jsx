import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const AddressForm = ({
  isSamePermanentAddress,
  onPresentChange,
  onChange,
  data,
  errors,
}) => {
  return (
    <>
      <Grid container spacing={24}>
        <Address
          show
          onChange={onChange}
          data={data}
          errors={errors}
          isPermanent={true}
        />

        <Grid item xs={12}>
          <FormControlLabel
            style={{
              textAlign: "left",

              fontSize: "small",
              // textAlign: "start",
              // justifyContent: "flex-start",
              // marginRight: "70%",
            }}
            control={
              <Checkbox
                style={{
                  letterSpacing: "0px",
                  color: "#3d358f",
                  opacity: "1",
                  fontSize: "900",
                  fontWeight: "600",
                }}
                onChange={onPresentChange}
                color="secondary"
                name="saveAddress"
                checked={isSamePermanentAddress}
              />
            }
            label="Sameaspermanantaddress"
          />
        </Grid>
        <Address
          show={!isSamePermanentAddress}
          onChange={onChange}
          data={data}
          errors={errors}
          isPermanent={false}
        />
      </Grid>
    </>
  );
};
export default AddressForm;
const Address = ({ show, onChange, data, errors, isPermanent }) => {
  return show ? (
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
              House Number
            </label>

            <FormControl error fullWidth>
              <TextField
                id="houseno"
                name={isPermanent ? "permanentHouseNo" : "presentHouseNo"}
                value={
                  isPermanent ? data.permanentHouseNo : data.presentHouseNo
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
                placeholder="House Number"
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
              Street Name
            </label>
            <FormControl error fullWidth>
              <TextField
                // style={{ marginTop: 15 }}
                id="streetname"
                name={isPermanent ? "permanentStreetName" : "presentStreetName"}
                value={
                  isPermanent
                    ? data.permanentStreetName
                    : data.presentStreetName
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
                placeholder="Street Name"
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
              Colony/Local/Area
            </label>
            <FormControl error fullWidth>
              <TextField
                id="area"
                name={isPermanent ? "permanentArea" : "presentArea"}
                value={isPermanent ? data.permanentArea : data.presentArea}
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
                placeholder="Colony/Local/Area"
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
              Village
            </label>
            <FormControl error fullWidth>
              <TextField
                required
                id="village"
                name={isPermanent ? "permanentVillage" : "presentVillage"}
                value={
                  isPermanent ? data.permanentVillage : data.presentVillage
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
                placeholder="village"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {isPermanent ? (
                errors.permanentVillage ? (
                  <FormHelperText>{errors.permanentVillage}</FormHelperText>
                ) : (
                  ""
                )
              ) : errors.presentVillage ? (
                <FormHelperText>{errors.presentVillage}</FormHelperText>
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
              Tehsil/Town/Block
            </label>
            <FormControl error fullWidth>
              <TextField
                id="tehsil"
                name={isPermanent ? "permanentTehsil" : "presentTehsil"}
                value={isPermanent ? data.permanentTehsil : data.presentTehsil}
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
                placeholder="Tehsil"
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
              Country
            </label>
            <FormControl
              fullWidth
              error={
                isPermanent ? errors.permanentCountry : errors.presentCountry
              }
            >
              <TextField
                select
                required
                inputProps={{
                  name: isPermanent ? "permanentCountry" : "presentCountry",
                  id: "country",
                }}
                value={
                  isPermanent ? data.permanentCountry : data.presentCountry
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
                placeholder="Country"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                // autoComplete="landline"
              >
                {" "}
                <option value="none">select gender</option>
                <option value="Angular">male</option>
                <option value="Bootstrap">female</option>
                <option value="React">others</option>
              </TextField>
              {isPermanent ? (
                errors.permanentCountry ? (
                  <FormHelperText>{errors.permanentCountry}</FormHelperText>
                ) : (
                  ""
                )
              ) : errors.presentCountry ? (
                <FormHelperText>{errors.presentCountry}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl errors fullWidth>
              <label
                style={{
                  color: "#646d7e",
                  opacity: "1",
                  fontWeight: "600",
                  fontSize: "small",
                }}
              >
                State
              </label>
              <TextField
                select
                required
                id="state"
                name={isPermanent ? "permanentState" : "presentState"}
                value={isPermanent ? data.permanentState : data.presentState}
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
                placeholder="State"
                // margin="Dense"
                InputProps={{ disableUnderline: true }}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              >
                <option value="select">select state</option>
                <option value="Angular">Andhra</option>
                <option value="Bootstrap">Kerala</option>
                <option value="React">others</option>
              </TextField>
              {isPermanent ? (
                errors.permanentState ? (
                  <FormHelperText>{errors.permanentState}</FormHelperText>
                ) : (
                  ""
                )
              ) : errors.presentState ? (
                <FormHelperText>{errors.presentState}</FormHelperText>
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
              District
            </label>
            <FormControl fullWidth>
              <TextField
                required
                id="district"
                name={isPermanent ? "permanentDistrict" : "presentDistrict"}
                value={
                  isPermanent ? data.permanentDistrict : data.presentDistrict
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
                placeholder="District"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {" "}
              </TextField>
              {isPermanent ? (
                errors.permanentDistrict ? (
                  <FormHelperText>{errors.permanentDistrict}</FormHelperText>
                ) : (
                  ""
                )
              ) : errors.presentDistrict ? (
                <FormHelperText>{errors.presentDistrict}</FormHelperText>
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
              Policestation
            </label>
            <FormControl fullWidth>
              <TextField
                required
                id="police-station"
                name={
                  isPermanent
                    ? "permanentPoliceStation"
                    : "presentPoliceStation"
                }
                value={
                  isPermanent
                    ? data.permanentPoliceStation
                    : data.presentPoliceStation
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
                placeholder="PoliceStation"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {isPermanent ? (
                errors.permanentPoliceStation ? (
                  <FormHelperText>
                    {errors.permanentPoliceStation}
                  </FormHelperText>
                ) : (
                  ""
                )
              ) : errors.presentPoliceStation ? (
                <FormHelperText>{errors.presentPoliceStation}</FormHelperText>
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
              Pincode
            </label>
            <FormControl fullWidth>
              <TextField
                required
                id="pincode"
                name={isPermanent ? "permanentPincode" : "presentPincode"}
                value={
                  isPermanent ? data.permanentPincode : data.presentPincode
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
                placeholder="pincode"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
              ></TextField>
              {isPermanent ? (
                errors.permanentPincode ? (
                  <FormHelperText>{errors.permanentPincode}</FormHelperText>
                ) : (
                  ""
                )
              ) : errors.presentPincode ? (
                <FormHelperText>{errors.presentPincode}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  ) : (
    ""
  );
};
