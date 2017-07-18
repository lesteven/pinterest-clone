import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchData,postInfo} from '../redux/modules/fetchThunk';
import {post} from '../redux/modules/postModule';
import {recentPosts} from '../redux/modules/recentModule';

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
			func = this.props.post
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
				<button className='owner'>{this.props.owner}</button>
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
		post:(pin)=>dispatch(post(pin)),
		recentPosts:(recent)=>dispatch(recentPosts(recent))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Pin)