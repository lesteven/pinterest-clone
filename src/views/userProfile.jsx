import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../redux/modules/fetchThunk';
import {profilePosts} from '../redux/modules/profileModule';
import Grid from '../components/grid.jsx';


class UserProfile extends Component{
	render(){
		return(
			<div>
				Hello user!
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		user:state.user,
		profile:state.profile
	};
};

const mapDispatchToProps = (dispatch) =>{
	return{
		fetchData:(url,actFunc)=>dispatch(fetchData(url,actFunc)),
		profilePosts:(profile)=>dispatch(profilePosts(profile))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);