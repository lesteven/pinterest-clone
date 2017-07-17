import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchData,postInfo} from '../redux/modules/fetchThunk';
import {post} from '../redux/modules/postModule';


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
	deleteButton(data){
		return(
			<button className='delete'
			onClick={()=>{this.props.postInfo('/pin','DELETE',
							data,this.props.post)}}>
			Delete
			</button>
		)
	}
	render(){
		return(
			<div className='grid-item'>
				<img onLoad={this.props.handleLoad}
					src={this.props.url}/>
				<p className='description'>{this.props.description}</p>
				{this.deleteButton(this.data())}
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
		post:(pin)=>dispatch(post(pin))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Pin)