import React from 'react';
import { Switch, Route } from "react-router-dom";
import Roster from './Roster';
import Schedule from './Schedule';
import Header from './Header';

const Main = () =>(
  <main>
    <Switch>
      <Route exact path="/" component={Header} ></Route>
      <Route path="/roster" component={Roster} ></Route>
      <Route path="/schedule" component={Schedule} ></Route>
    </Switch>
  </main>
)


export default Main;