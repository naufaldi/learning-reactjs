import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component { 
  constructor(props) {
    super(props);
    this.state ={open: false};
  }
  render() {
    return (
      <div className="App">
        <AppBar
        title="Title"
       
        iconClassNameRight = "muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap= {() => this.setState({open: !this.state.open})}
        />
        <Drawer 
        open={this.state.open}
        //make other drawer dark
         docked={false}
         //for  click other and close drawer
         onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem> Menu Item 1 </MenuItem>
          <MenuItem> Menu Item 2 </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
