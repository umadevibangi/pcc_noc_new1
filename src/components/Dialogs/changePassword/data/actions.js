import requestHandler from "../../../../services/api/requestHandler.js";

import {
  OPEN_CLOSE_CHANGE_PASSWORD_DIALOG,
  CHANGE_PASSWORD,
  RESET_CHANGE_PASSWORD
} from "./constants";

import { CHANGE_PASSWORD_API } from "../../../../config/apiUrls.js";

export function openClosePasswordDialog() {
  return {
    type: OPEN_CLOSE_CHANGE_PASSWORD_DIALOG
  };
}

export function changePassword(data, id) {
  return requestHandler(
    CHANGE_PASSWORD,
    `${CHANGE_PASSWORD_API}${id}/`,
    "PUT",
    { data }
  );
}

export function resetChangePasswordProps() {
  return { type: RESET_CHANGE_PASSWORD };
}
