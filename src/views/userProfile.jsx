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
	componentWillReceiveProps(newprops){
		//console.log(newprops.location.pathname)
		if(this.props.location.pathname !== newprops.location.pathname){
			this.props.fetchData('/profile',this.props.profilePosts)
		}
	}
	profile(){
		let data = JSON.parse(JSON.stringify(this.props.profile[0]))
		return(
			<div>
				<h3>{data.owner}</h3>
			</div>
		)
	}
	render(){
		return(
			<div>
				{this.props.user.username?<PostForm />:null}
				{this.props.profile[0]?this.profile():null}
				{this.props.profile?<Grid data={this.props.profile} delete='/pin'/>:null}
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