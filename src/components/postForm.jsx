import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData,postInfo} from '../redux/modules/fetchThunk';
import {profilePosts} from '../redux/modules/profileModule';


class PostForm extends Component{
	constructor(props){
		super(props);
		this.state={
			description:'',
			url:''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.name]:event.target.value})
	}

	postData(){
		let postData ={
			description:this.state.description,
			url:this.state.url
		}
		return postData;
	}
	resetData(){
		let data ={
			description:'',
			url:''
		}
		return data;
	}
	render(){
		return(
			<form autoComplete='off' onSubmit={(e)=>{
				e.preventDefault();this.props.postInfo('/pin',
					'POST',this.postData(),this.props.profilePosts);
					this.setState(resetData());
			}}>
				<input type='text' name = 'description'
					onChange={this.handleChange}
					value={this.state.description}
					placeholder='Description' />
				<br/>
				<input type='text' name = 'url'
					onChange={this.handleChange}
					value={this.state.url}
					placeholder='img url' />
				<br/>
				<input type='submit' value='Post'/>
			</form>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		user:state.user,
		pin:state.pin
	};
};

const mapDispatchToProps = (dispatch) =>{
	return{
		postInfo:(url,method,data,actFunc)=>dispatch(postInfo(url,method,data,actFunc)),
		profilePosts:(profile)=>dispatch(profilePosts(profile))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)