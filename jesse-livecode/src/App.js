import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fusTheme from './fusThemes'
// import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class App extends Component { 
  constructor(props) {
    super(props);
    this.state ={open: false};
  }
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
        <div >
          <AppBar
          title="Title"
          iconClassNameRight = "muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap= {() => 
            this.setState({open: !this.state.open})}
          />
          <Drawer 
          open={this.state.open}
          //make other drawer dark
          docked={false}
          //for  click other and close drawer
          onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem onTouchTap={this.handleClose}> 
              <Link to ='/'> Home </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}> 
              <Link to = '/logos'> Logos </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
            <Link to='/posters'> Posters </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
            <Link to='/letterhead'> Letterhead </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
            <Link to='/share-a-story'> Share a Story </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
            <Link to='/service-request-form'> Service Request For </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
            <Link to='/tutorial'> Tutorial </Link>
            </MenuItem>
            
          </Drawer>
          <Route exact path='/' render={() => <h1> Home View </h1> } />
          <Route
          exact 
          path ='/logos-posters'
          render={()=> <h1> Logos and Posters View</h1> }
          />
          <Route exact path='/logos' render ={()=> <h1> Logos View </h1>} />
          <Route exact path='/posters' render ={()=> <h1>  Posters View </h1>} />
          <Route 
          exact
          path='/letterhead'
          render={()=> <h1> Letter Head View </h1>}
          />
          <Route 
          exact
          path='/share-a-story'
          render={()=> <h1> Share a Story View </h1>}
          />
          <Route 
          exact
          path='/planning-guide'
          render={()=> <h1> Planning Guide View </h1>}
          />
          <Route
          exact
          path='/services'
          render={()=> <h1> Services View </h1>}
          />
          <Route
          exact
          path='/tutorial'
          render={()=> <h1> Tutorial View </h1>}
          />
          
        </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
