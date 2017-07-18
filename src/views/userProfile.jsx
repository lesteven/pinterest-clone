import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../redux/modules/fetchThunk';
import {profilePosts} from '../redux/modules/profileModule';
import Grid from '../components/grid.jsx';
import PostForm from '../components/postForm.jsx';

class UserProfile extends Component{
	componentDidMount(){
		this.props.fetchData('/profile',this.props.profilePosts)
	}
	profile(){
		let data = JSON.parse(JSON.stringify(this.props.profile[0]))
		return(
			<div>
				<PostForm />
				<h3>{data.owner || this.props.user.username}</h3>
			</div>
		)
	}
	render(){
		return(
			<div>
				{this.props.profile[0]?this.profile():null}
				<Grid data={this.props.profile} delete='/pin'/>
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