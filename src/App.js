import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teams from './components/Teams/Teams';
import PageNotFound from './components/PageNotFound/PageNotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/teams">
            <Teams/>
          </Route>
          <Route exact path="/">
            <Teams/>
          </Route>
          <Route path="/team/:id">
            <TeamDetails/>
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
