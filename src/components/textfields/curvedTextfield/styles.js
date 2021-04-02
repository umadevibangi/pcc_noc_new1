const inputStyles = theme => ({
  curvedTextfield: {
    MozBorderRadius: 18,
    borderRadius: 18,
    border: "1px solid rgb(144, 136, 136)",
    width: "93%",
    padding: 9,
    marginLeft: "auto",
    marginRight: "auto",
    outline: "none",
    display: "block",
    "@media (max-width: 600px)": {
      fontSize: 16
    }
  },
  errorMessage: {
    marginLeft: "5%"
  }
});

export default inputStyles;