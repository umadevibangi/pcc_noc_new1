import { SET_HEADER, SET_BACK_URL, RESET_APPBAR } from "./constants";

export function setHeader(data) {
  return {
    type: SET_HEADER,
    payload: data
  };
}

export function setBackURL(data) {
  return {
    type: SET_BACK_URL,
    payload: data
  };
}

export function resetAppbar() {
  return {
    type: RESET_APPBAR
  };
}
