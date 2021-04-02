import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const AlertDialog = (props) => {
  const {
    dialogTitle,
    track,
    isOpen,
    positiveAction,
    negativeAction,
    alert,
  } = props;

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        disableBackdropClick="true"
      >
        <br></br>
        <CheckCircleOutlineIcon
          style={{
            textAlign: "center",
            marginLeft: "45%",
            height: 40,
            width: "10%",
            color: "#65BC6B",
          }}
        />
        <DialogTitle
          style={{
            textAlign: "center",
            opacity: "1",
            lineHeight: 0.6,
            fontSize: "bold",
            font: "bold ",
            color: "#646D7E",
          }}
        >
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              textAlign: "center",
              fontWeight: "300",
              fontSize: "small",
              color: "#646D7E",
            }}
          >
            {alert}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              textAlign: "center",
              background: "#3d358f",
              borderRadius: "4px",
              opacity: "1",
              color: "#ffffff",
              fontSize: "small",
              textTransform: "none",
              marginRight: "35%",
            }}
          >
            {track}
          </Button>
        </DialogActions>
        <br></br>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
