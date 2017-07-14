import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../views/home.jsx';
import MyProfile from '../views/myProfile.jsx';

class NavBar extends Component{
	render(){
		return(
			<Router>
			<div>
				<nav className = 'navBar'>
					<Link to ='/'>Home</Link>
					<Link to ='/myprofile'>Profile</Link>
					<a href='/auth/twitter'>Log In</a>
				</nav>

				<Route exact path = '/' component ={Home}/>
				<Route exact path = '/myprofile' component={MyProfile}/>
			</div>
			</Router>
		)
	}
}


export default NavBar;