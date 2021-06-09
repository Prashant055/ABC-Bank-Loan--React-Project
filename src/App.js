import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { UserLogin } from "./component/UserLogin";
import { AdminLogin } from "./component/AdminLogin";
import { Registration } from "./component/Registration";
// vehicle
function App() {
  return (
    <Router>
      <AppNavBar></AppNavBar>
      {/** */}
      <Switch>
        <Route path="/userlogin" exact>
          <UserLogin />
        </Route>
        <Route path="/adminlogin" exact>
          <AdminLogin />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
