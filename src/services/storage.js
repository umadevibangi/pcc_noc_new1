import moment from "moment";
import _ from "lodash";

const hasToken = token => token.toString().length > 0;

const checkExpired = (token, tokenExpiry) => {
  const exist = hasToken(token);
  const now = moment();
  const expiry = exist ? moment(tokenExpiry) : moment().subtract(1, "minute");

  return now.isAfter(expiry);
};

export function removeStore() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiry");
  localStorage.removeItem("info");
}

// @TODO: setup refesh token
export function set(token = "", tokenExpiry = "", info = {}) {
  removeStore();
  localStorage.setItem("token", token);
  localStorage.setItem("expiry", tokenExpiry);
  localStorage.setItem("info", JSON.stringify(info));

  return true;
}

export function get() {
  const token = localStorage.getItem("token") || "";
  const tokenExpiry = localStorage.getItem("expiry") || "";
  const info = JSON.parse(localStorage.getItem("info") || "{}");
  const hasExpired = checkExpired(token, tokenExpiry);
  const loginStatus = _.isEmpty(info) ? false : true;

  if (hasExpired) {
    removeStore();

    return {
      exist: false,
      token: "",
      tokenExpiry: "",
      loginStatus,
      info: {},
      lastActivity: ""
    };
  }

  return {
    exist: true,
    token,
    loginStatus,
    tokenExpiry,
    info
  };
}
