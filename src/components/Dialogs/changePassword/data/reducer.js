import { handle } from "redux-pack";

import {
  OPEN_CLOSE_CHANGE_PASSWORD_DIALOG,
  CHANGE_PASSWORD,
  RESET_CHANGE_PASSWORD
} from "./constants";

const initialState = {
  isOpen: false,
  isLoading: false,
  error: null,
  changePasswordSuccess: false,
  message: ""
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_CLOSE_CHANGE_PASSWORD_DIALOG:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case CHANGE_PASSWORD:
      return handle(state, action, {
        start: prevState => {
          return {
            ...prevState,
            isLoading: true,
            error: null,
            changePasswordSuccess: false,
            message: ""
          };
        },
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({
          ...prevState,
          error:
            payload.response !== undefined
              ? payload.response.data.error
              : "Something went wrong. Please try after some time",
          changePasswordSuccess: false
        }),
        success: prevState => {
          return {
            ...prevState,
            message: payload.data.message,
            changePasswordSuccess: true
          };
        }
      });

    case RESET_CHANGE_PASSWORD:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
