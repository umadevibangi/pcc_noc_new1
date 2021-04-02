import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DatePicker } from "material-ui-pickers";
import CheckCircle from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import AttachFile from "@material-ui/icons/AttachFile";
// import dropdownData from "../../constants";
import { Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import Divider from "@material-ui/core/Divider";

function PccDetailsForm({
  onFileLoad,
  removeFile,
  userImageFile,
  identityFile,
  addressFile,
  onChange,
  onDateChange,
  data,
  errors,
}) {
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
              Proof of Identity
            </label>

            <FormControl error fullWidth>
              <TextField
                select
                inputProps={{
                  name: "idProofType",
                  id: "id-proof-type",
                }}
                value={data.idProofType ? data.idProofType : ""}
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
                margin="Dense"
                InputProps={{ disableUnderline: true }}
              >
                <option value="select">select proof</option>
                <option value="Angular">Aadhar</option>
                <option value="Bootstrap">pan</option>
                <option value="React">others</option>
              </TextField>
              {errors.idProofType ? (
                <FormHelperText>{errors.idProofType}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          {identityFile ? (
            <Grid item md={4} xs={12}>
              <FormControl error fullWidth>
                <label>
                  <Button
                    component="span"
                    color="secondary"
                    variant="contained"
                    style={{
                      margin: "30px 0 0 10px",
                      background: "#DCE0E7",
                      borderRadius: "4px",
                      opacity: "1",
                      color: "#949dae",
                      fontSize: "small",
                      textTransform: "none",
                      width: "40%",
                    }}
                    // variant="fab"
                    // color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      removeFile(e, "IDENTITY");
                    }}
                    aria-label="upload"
                  >
                    <DeleteIcon />
                    Removefile
                  </Button>
                </label>
              </FormControl>
            </Grid>
          ) : (
            <Grid item md={4} xs={12}>
              <FormControl error fullWidth>
                <input
                  accept="image/*"
                  id="upload-identity-fab"
                  style={{ display: "none" }}
                  multiple
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    onFileLoad(e, "IDENTITY");
                  }}
                />
                <label htmlFor="upload-identity-fab">
                  <Button
                    component="span"
                    color="secondary"
                    variant="contained"
                    style={{
                      margin: "30px 0 0 10px",
                      background: "#DCE0E7",
                      borderRadius: "4px",
                      opacity: "1",
                      color: "#949dae",
                      fontSize: "small",
                      textTransform: "none",
                      width: "40%",
                    }}
                    // variant="fab"
                    // color="primary"
                    aria-label="upload"
                  >
                    <AttachFile />
                    AttachFile
                  </Button>
                </label>
              </FormControl>
            </Grid>
          )}
          <Grid item md={4} xs={12}>
            <Typography
              id="proof_of_identityfilename"
              style={{
                margin: "30px 0 0 10px",

                borderRadius: "4px",
                opacity: "1",
                color: "#646D7E",
                fontSize: "small",
                textTransform: "none",
                width: "40%",
              }}
            >
              No File Choosen
            </Typography>
          </Grid>
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
              Address proof type
            </label>

            <FormControl error fullWidth>
              <TextField
                select
                inputProps={{
                  name: "addressProofType",
                  id: "address-proof-type",
                }}
                value={data.addressProofType ? data.addressProofType : ""}
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
                placeholder="addressProofType"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
              >
                {" "}
                <option value="select">selectaddressProof</option>
                <option value="Angular">Aadhar</option>
                <option value="Bootstrap">pan</option>
                <option value="React">others</option>
              </TextField>
            </FormControl>
          </Grid>
          {addressFile ? (
            <Grid item md={4} xs={12}>
              <FormControl error fullWidth>
                <label>
                  <Button
                    component="span"
                    color="secondary"
                    variant="contained"
                    style={{
                      margin: "30px 0 0 10px",
                      background: "#DCE0E7",
                      borderRadius: "4px",
                      opacity: "1",
                      color: "#949dae",
                      fontSize: "small",
                      textTransform: "none",
                      width: "40%",
                    }}
                    // variant="fab"
                    // color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      removeFile(e, "ADDRESS");
                    }}
                    aria-label="upload"
                  >
                    <DeleteIcon />
                    Removefile
                  </Button>
                </label>
              </FormControl>
            </Grid>
          ) : (
            <Grid item md={4} xs={12}>
              <FormControl error fullWidth>
                <input
                  accept="image/*"
                  id="upload-address-fab"
                  style={{ display: "none" }}
                  multiple
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    onFileLoad(e, "ADDRESS");
                  }}
                />
                <label htmlFor="upload-address-fab">
                  <Button
                    component="span"
                    color="secondary"
                    variant="contained"
                    style={{
                      margin: "30px 0 0 10px",
                      background: "#DCE0E7",
                      borderRadius: "4px",
                      opacity: "1",
                      color: "#949dae",
                      fontSize: "small",
                      textTransform: "none",
                      width: "40%",
                    }}
                    // variant="fab"
                    // color="primary"
                    aria-label="upload"
                  >
                    <AttachFile />
                    AttachFile
                  </Button>
                </label>
              </FormControl>
            </Grid>
          )}
          <Grid item md={4} xs={12}>
            <Typography
              id="proof_of_addressfilename"
              style={{
                margin: "30px 0 0 10px",

                borderRadius: "4px",
                opacity: "1",
                color: "#646D7E",
                fontSize: "small",
                textTransform: "none",
                width: "40%",
              }}
            >
              no file choosen
            </Typography>
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
              Pcc Details
            </label>
            <FormControl fullWidth error={errors.purpose ? true : false}>
              <TextField
                select
                inputProps={{
                  name: "purpose",
                  id: "pcc-purpose",
                }}
                value={data.purpose ? data.purpose : ""}
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
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
              >
                <option value="select">selectpccdetails</option>
                <option value="Angular">Aadhar</option>
                <option value="Bootstrap">pan</option>
                <option value="React">others</option>
              </TextField>
              {errors.purpose ? (
                <FormHelperText>{errors.purpose}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <label
            style={{
              color: "#646d7e",
              opacity: "1",
              fontWeight: "600",
              fontSize: "small",
            }}
          >
            Reason for Applying
          </label>
          <FormControl fullWidth>
            <TextField
              id="applying-reason"
              name="applyingReason"
              onChange={onChange}
              value={data.applyingReason}
              style={{
                position: "relative",
                minWidth: "135%",
                background: "#ffffff 0% 0%",
                borderRadius: " 4px",
                height: "90px",
                opacity: "1",
                marginTop: "8px",
                fontSize: "small",
                border: " 1px solid #ccc",
                paddingRight: "24px",
                padding: "3px 14px",
                color: "#a2a2a2",
              }}
              placeholder="Enter your Comments"
              margin="Dense"
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ disableUnderline: true }}
            ></TextField>
            {errors.applyingReason ? (
              <FormHelperText>{errors.applyingReason}</FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
        </Grid>
        <br></br>
        <Divider variant="middle" />
        <br></br>
        <Grid item md={4} xs={12}>
          <Typography
            style={{
              letterSpacing: "0px",
              color: "#3d358f",
              opacity: "1",
              fontSize: "900",
              fontWeight: "600",
            }}
            variant="h6"
            noWrap
          >
            PreviousPCCDetails
          </Typography>
        </Grid>
        <br></br>
        <Grid container direction="row" spacing={3}>
          <Grid item md={4} xs={12}>
            <label
              style={{
                color: "#646d7e",
                opacity: "1",
                fontWeight: "600",
                fontSize: "small",
              }}
            >
              PCC Number
            </label>
            <FormControl fullWidth>
              <TextField
                select
                id="pcc-number"
                name="previousPccNumber"
                onChange={onChange}
                value={data.previousPccNumber}
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
                placeholder="Enter PCC Number"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
              ></TextField>
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
              Data Taken
            </label>
            <FormControl fullWidth>
              <TextField
                disableFuture
                openTo="year"
                views={["year", "month", "day"]}
                placeholder=""
                format="DD/MM/YYYY"
                mask={(value) =>
                  value
                    ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                    : []
                }
                keyboard
                autoOk
                name="previousDateTaken"
                value={data.previousDateTaken ? data.previousDateTaken : null}
                onChange={(date) => onDateChange("previousDateTaken", date)}
                disableOpenOnEnter
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
              {errors.pincode ? (
                <FormHelperText>{errors.pincode}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <label
              style={{
                color: "#646d7e",
                opacity: "1",
                fontWeight: "600",
                fontSize: "small",
              }}
            >
              Previous Reason for Applying
            </label>
            <FormControl fullWidth>
              <TextField
                id="previous-applying-reason"
                name="previousApplyingReason"
                onChange={onChange}
                value={data.previousApplyingReason}
                style={{
                  position: "relative",
                  minWidth: "138%",
                  background: "#ffffff 0% 0%",
                  borderRadius: " 4px",
                  height: "90px",
                  opacity: "1",
                  marginTop: "8px",
                  fontSize: "small",
                  border: " 1px solid #ccc",
                  paddingRight: "24px",
                  padding: "3px 14px",
                  color: "#a2a2a2",
                }}
                placeholder="Enter your Comments"
                margin="Dense"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PccDetailsForm;
