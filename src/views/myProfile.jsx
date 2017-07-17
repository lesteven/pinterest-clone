import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData,postInfo} from '../redux/modules/fetchThunk';
import {post} from '../redux/modules/postModule';
import Grid from '../components/grid.jsx';

class MyProfile extends Component{
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
	componentWillReceiveProps(props){
		props.user.name?
		null:
		props.history.push('/');
	}
	postData(){
		let postData ={
			description:this.state.description,
			url:this.state.url
		}
		return postData;
	}
	componentDidMount(){
		this.props.user.name?
		this.props.fetchData('/pin',this.props.post)
		:null
	}
	render(){
		return(
			<div>
				<h3>My Profile</h3>
				<form autoComplete='off' onSubmit={(e)=>{
					e.preventDefault();this.props.postInfo('/pin',
						'POST',this.postData(),this.props.post);
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
				<Grid />
			</div>
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
		fetchData:(url,actFunc)=>dispatch(fetchData(url,actFunc)),
		postInfo:(url,method,data,actFunc)=>dispatch(postInfo(url,method,data,actFunc)),
		post:(pin)=>dispatch(post(pin))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MyProfile);