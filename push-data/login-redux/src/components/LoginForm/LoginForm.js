import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login } from '../redux/reducer'
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={}
    this.onSubmit = this.onSubmit.bind(this);

  }
  render() {
    let {email,password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;   

    return (
      <form action="" onSubmit={this.onSubmit} name="LoginForm">
        <div className="form-group-collection">
          <div className="form-group">
            <label htmlFor="">Email:</label>  
            <input type="email" onChange={ e => this.setState({email: e.target.value})} value={email}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" onChange={e => this.setState({password: e.target.value})} value={password} />
          </div>
        </div>
        <input type="submit" value="login"/>
        <div className="message">
        { isLoginPending && <div> Please wait..</div>}
        { isLoginSuccess && <div> Success</div>}
        { loginError && <div> {loginError.message}</div>}
        </div>
      </form>
    )
  }
  onSubmit(e){
    e.preventDefault();
    let {email,password} = this.state;
    this.props.login(email,password);
    this.setState({
      email:'',
      password:''
    });
  }
  
  
}
const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);