import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";
import MasterLayout from "./layouts/admin/MasterLayout";


function App() {
  return (
    <Router>
       <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path="/admin" name='Admin' render={(props) => <MasterLayout {...props}/>}  />
        </Switch>
    </Router>
  );
}
export default App;
