import React,{Component} from 'react';
import { connect } from 'react-redux';
import Masonry from 'masonry-layout';

class Grid extends Component{
	componentDidMount(){
		
	}
	handleLoad(){
		let msnry = new Masonry(grid,{
			itemSelector: '.grid-item',
			columnWidth: 50
		})
	}
	render(){
		return(
			<div id='grid'>
				<div className='grid-item'>
					<img onLoad={this.handleLoad}
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Nas-04.jpg/220px-Nas-04.jpg'/>
				</div>
				<div className='grid-item'>
					<img onLoad={this.handleLoad}
					src='http://static.highsnobiety.com/wp-content/uploads/2017/01/10162546/asap-rocky-dior-ss17-ad-campaign-0-320x192.jpg'/>
				</div>
				<div className='grid-item'>
					<img  onLoad={this.handleLoad}
					src='http://img.wennermedia.com/social/15-things-you-didnt-know-about-revolver-beatles-7b1c9fc2-7173-486b-b519-2b86e9c58bb9.jpg'/>
				</div>
				<div className='grid-item'>
					<img onLoad={this.handleLoad}
					src='http://okp-cdn.okayplayer.com/wp-content/uploads/2013/02/jimi-hendrix-8150.jpg'/>
				</div>
				<div className='grid-item'>
					<img onLoad={this.handleLoad}
					src='https://s-media-cache-ak0.pinimg.com/736x/6f/52/4e/6f524eb8c90f5ac1037c243887bfaab9--alternative-music-bands-popular-bands.jpg'/>
				</div>
				<div className='grid-item'>
					<img onLoad={this.handleLoad}
					src='http://dazedimg.dazedgroup.netdna-cdn.com/1012/azure/dazed-prod/1150/4/1154856.jpg'/>
				</div>
			</div>
		)
	}
}

export default Grid