import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
/* material ui */
import {MuiThemeProvider} from 'material-ui/styles';
import fusTheme from './fusThemes'
import SideNav from './SideNav'
/* Import view */
import Glossary from './views/Glossary'
import Home from './views/Home'
import LetterHead from './views/Letterhead'
import Logos from './views/Logos'
import LogosPosters from './views/LogosPosters'
import PlanningGuide from './views/PlanningGuide'
import Posters from './views/Posters'
import ServiceRequest from './views/ServiceRequest'
import Services from './views/Serivices'
import Story from './views/Story'
import Tutorial from './views/Tutorial'
import NotFound from './views/NotFound'
// import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class App extends Component { 
  render(){
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={fusTheme>
          <div>
            <SideNav/>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/logos-posters' component={LogosPosters} />
            <Route exact path='/logos' component ={Logos}/>
            <Route exact path='/posters' component ={Posters} />
            <Route exact path='/letterhead' component = {Letterhead}/> 
            <Route exact path='/share-a-story' component = {Story}/>
            <Route exact path='/planning-guide' component = {PlanningGuide}/>
            <Route exact path='/services' component = {Services}/>
            <Route exact path='/glossary' component ={Glossary}/>
            <Route exact path='/service-request-form' component = {ServiceRequest}/>
            <Route exact path='/tutorial' component = {Tutorial}/>
            <Route component={NotFound}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }

  }


export default App;
