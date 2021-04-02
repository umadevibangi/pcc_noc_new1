import React from "react";
import Routing from "./AppRoutes";
import { Provider } from "react-redux";
import store, { history } from "../store/configureStore";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";
// import MomentUtils from "@date-io/moment";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";
// import MomentUtils from "@date-io/moment";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routing />
      </Router>
    </Provider>
  );
};
export default App;
