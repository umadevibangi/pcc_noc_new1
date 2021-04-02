import { get as getSession } from "../storage";
import appUrls from "../../config/appUrls";

export function onRequest(config) {
  const customConfig = config;
  const { exist: tokenExist, token } = getSession();
  if (tokenExist && !customConfig.headers.Authorization) {
    customConfig.headers.Authorization = `Token ${token}`;
  } else if (config.token && !tokenExist) {
    window.location = appUrls.LOGIN;
  }
  return config;
}

export function onRequestError(error) {
  return Promise.reject(error);
}
