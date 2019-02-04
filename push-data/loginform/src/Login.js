import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      username:'',
      password:''
    }
  }
  handleClick(event){
    let apiBaseUrl = "http://debug.deliv.co.id:3000/api/distributor/auth/login";
    let self = this;
    let payload = {
      "email" : this.state.username,
      "password": this.state.password
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
            title="Login"
            />
            <TextField
            hintText="Enter your username"
            floatingLabelText="Username"
            onChange= {(event, newValue) => this.setState({username: newValue})}
            />
            <TextField
            hintText="Enter your password"
            floatingLabelText="Password"
            onChange= {(event, newValue) => this.setState({password: newValue})}
            />
            <br/>
            <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={(event) => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
const style ={
  margin: 15,
}

