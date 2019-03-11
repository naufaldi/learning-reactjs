import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Redirect,withRouter } from 'react-router-dom';

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100); // fake asye
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100); // fake async
	}
};
const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)}
	/>
);
const AuthButton = withRouter(({history})=>(
	fakeAuth.isAuthenticated ?(
		<p>
			Welcome <button onClick={()=>{
				fakeAuth.signout(()=>history.push('/'))
			}} >Sign Out</button>
		</p>
	):
	<p>You need login</p>
))
class Login extends Component {
	state = {
		redirectToReferer: false
	};
	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({
				redirectToReferer: true
			});
		});
	};
	render() {
		const { redirectToReferer } = this.state;
		if (redirectToReferer == true) {
			return <Redirect to={{
        pathname:"/login",
        state:{
          // {from: props.location}
        }
      }} />;
		}
		return (
			<div>
				<p>You must log in to view the page</p>
				<button onClick={this.login}>Log in</button>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<Router>
				<div>
				<AuthButton/>
					<ul>
						<li>
							<Link to="/public">Public Page</Link>
						</li>
						<li>
							<Link to="/protected">Private Page</Link>
						</li>
					</ul>
					<Route path="/public" component={Public} />
					<Route path="/login" component={Login} />
					<PrivateRoute path="/protected" component={Protected} />
				</div>
			</Router>
		);
	}
}

export default App;
