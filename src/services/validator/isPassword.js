export default isPassword =>
  !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(isPassword);
