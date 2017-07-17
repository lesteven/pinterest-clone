import React,{Component} from 'react';
import { connect } from 'react-redux';
import Masonry from 'masonry-layout';
import Pin from './pin.jsx';
import {fetchData,postInfo} from '../redux/modules/fetchThunk';
import {post} from '../redux/modules/postModule';


class Grid extends Component{
	handleLoad(){
		let msnry = new Masonry(grid,{
			itemSelector: '.grid-item',
			columnWidth: 50
		})
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
	list(){
		//console.log(this.props.data)
		let list;
		list= this.props.data.map(pin=>{
			return <Pin url={pin.url} key={pin._id}
				id ={pin._id}
				description={pin.description}
				handleLoad={this.handleLoad}
				/>
		})
		return list;
	}
	render(){
		return(
			<div id='grid'>
				{this.props.data?this.list():null}
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

export default connect(mapStateToProps,mapDispatchToProps)(Grid)