const getUsertype = usertype => {
  switch (usertype) {
    case 1:
      return "DYSP";
    case 2:
      return "DSBO";
    case 3:
      return "DCRB";
    case 4:
      return "FVO";
    case 5:
      return "ACP";
    case 6:
      return "DCP";
    case 7:
      return "CUSTOMER";
    default:
      return "";
  }
};

export default getUsertype;
