import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchData,postInfo} from '../redux/modules/fetchThunk';
import {recentPosts} from '../redux/modules/recentModule';
import {profilePosts} from '../redux/modules/profileModule';
import {Link} from 'react-router-dom';


class Pin extends Component{
	constructor(props){
		super(props)
	}
	data(){
		let data ={
			id:this.props.id
		}
		return data;
	}
	deleteButton(url,data){
		let func;
		if(url === '/pin'){
			func = this.props.profilePosts
		}
		else{
			func = this.props.recentPosts
		}
		return(
			<button className='delete'
			onClick={()=>{this.props.postInfo(url,'DELETE',
							data,func)}}>
			Delete
			</button>
		)
	}
	render(){
		return(
			<div className='grid-item'>
				<img onLoad={this.props.handleLoad}
					src={this.props.url}/>
				<Link to={'/'+ this.props.ownerID} className='owner'>{this.props.owner}</Link>
				<p className='description'>{this.props.description}</p>
				{this.props.user.username===this.props.owner?this.deleteButton(this.props.delete,this.data()):null}
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
		postInfo:(url,method,data,actFunc)=>dispatch(postInfo(url,method,data,actFunc)),
		profilePosts:(profile)=>dispatch(profilePosts(profile)),
		recentPosts:(recent)=>dispatch(recentPosts(recent))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Pin)