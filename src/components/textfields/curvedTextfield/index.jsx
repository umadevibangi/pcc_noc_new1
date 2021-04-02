import React from "react";
import propTypes from "prop-types";
import inputStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const CurvedTextfield = props => {
  const {
    disabled,
    value,
    name,
    maxLength,
    type,
    placeholder,
    onChange,
    error,
    classes
  } = props;
  return (
    <div>
      <input
        disabled={disabled}
        value={value}
        name={name}
        maxLength={maxLength}
        className={classes.curvedTextfield}
        type={type}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
      <Typography
        className={classes.errorMessage}
        color="error"
        align="left"
        variant="caption"
        gutterBottom
      >
        {error}
      </Typography>
    </div>
  );
};

CurvedTextfield.propTypes = {
  disabled: propTypes.bool,
  value: propTypes.string,
  name: propTypes.string,
  maxLength: propTypes.number,
  className: propTypes.object,
  type: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func.isRequired,
  error: propTypes.string
};

CurvedTextfield.defaultProps = {
  disabled: false,
  error: ""
};

export default withStyles(inputStyles)(CurvedTextfield);
