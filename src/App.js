import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";


function App() {
  return (
    <Router>
       <Switch>
          <Route path="/admin" name='Admin' render={(props) => <MasterLayout {...props}/>}  />
        </Switch>
    </Router>
  );
}
export default App;
