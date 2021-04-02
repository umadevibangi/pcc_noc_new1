import { SET_HEADER, SET_BACK_URL, RESET_APPBAR } from "./constants";

const initialState = {
  header: "",
  url: ""
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_HEADER:
      return {
        ...state,
        header: payload.header
      };

    case SET_BACK_URL:
      return {
        ...state,
        url: payload.url
      };
    case RESET_APPBAR:
      return {
        header: "",
        url: ""
      };
    default:
      return state;
  }
};
