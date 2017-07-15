import React,{Component} from 'react';
import { connect } from 'react-redux';
import {userLogin} from '../redux/modules/loginModule';
import {fetchData} from '../redux/modules/fetchThunk';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../views/home.jsx';
import MyProfile from '../views/myProfile.jsx';

class NavBar extends Component{
	componentDidMount(){
		this.props.fetchData('/auth/user',this.props.userLogin)
	}
	loggedIn(){
		return(
			<span>
				<Link to ='/profile'>{this.props.user.name}</Link>
				<a href ='/auth/logout'>Log Out</a>
			</span>
		)
	}
	render(){
		return(
			<Router>
			<div>
				<nav className = 'navBar'>
					<Link to ='/'>Home</Link>
					{this.props.user.name?
						this.loggedIn()
						:<a href='/auth/twitter'>Log In</a>}
				</nav>

				<Route exact path = '/' component ={Home}/>
				<Route exact path = '/profile' component={MyProfile}/>
			</div>
			</Router>
		)
	}
}


const mapStateToProps = (state) =>{
	return{
		user:state.user
	};
};

const mapDispatchToProps = (dispatch) =>{
	return{
		fetchData:(url,actFunc)=>dispatch(fetchData(url,actFunc)),
		userLogin:(user) => dispatch(userLogin(user))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);