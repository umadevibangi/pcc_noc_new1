import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import AppShell from "./appShell";
import appUrls from "../config/appUrls";
import Login from "../screens/login";
import AppContainers from "./AppContainer";
import Registration from "../screens/registration";
import NavigationDrawer from "../components/navigationDrawer";
import Pcc from "../screens/pcc";
import Noc from "../screens/noc";
import Trackstatus from "../screens/Trackstatus";
import report from "../screens/report";

const Routing = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Login} />
      <Route exact path={appUrls.LOGIN} component={Login} />
      <Route exact path={appUrls.REGISTER} component={Registration} />
      <Route
        exact
        path={appUrls.NAVIGATIONDRAWER}
        component={NavigationDrawer}
      />
      <Route exact path={appUrls.PCC} component={Pcc} />
      <Route exact path={appUrls.NOC} component={Noc} />
      <Route exact path={appUrls.TRACKSTATUS} component={Trackstatus} />
      <Route exact path={appUrls.REPORT} component={report} />
    </Switch>
  );
};
export default Routing;
