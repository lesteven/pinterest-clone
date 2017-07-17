import React,{Component} from 'react';
import { connect } from 'react-redux';
import Masonry from 'masonry-layout';
import Pin from './pin.jsx';


class Grid extends Component{
	handleLoad(){
		let msnry = new Masonry(grid,{
			itemSelector: '.grid-item',
			columnWidth: 50
		})
	}
	list(){
		//console.log(this.props.data)
		let list;
		list= this.props.data.map(pin=>{
			return <Pin url={pin.url} key={pin._id}
				id ={pin._id}
				owner = {pin.owner}
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

export default Grid;