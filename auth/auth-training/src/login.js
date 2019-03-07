
import React, { Component } from 'react'
import {   Redirect} from 'react-router-dom'

export default class Login extends Component {
  state={
    redirectToReferer: false
  }
  login = ()=>{
    fakeAuth.authenticate(()=>{
      this.setState({
        redirectToReferer: true
      })
    })
  }
  render() {
    const {redirectToReferer} = this.state;
    if(redirectToReferer == true){
      return <Redirect to='/'/>
    }
    return (
      <div>
          Login        
      </div>
    )
  }
}
