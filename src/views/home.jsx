import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../redux/modules/fetchThunk';
import {recentPosts} from '../redux/modules/recentModule';
import Grid from '../components/grid.jsx';


class Home extends Component{
	componentDidMount(){
		this.props.fetchData('/recent',this.props.recentPosts)
	}
	render(){
		return(
			<div>
				<h3>Home</h3>
				<Grid data={this.props.recent}/>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		user:state.user,
		recent:state.recent
	};
};

const mapDispatchToProps = (dispatch) =>{
	return{
		fetchData:(url,actFunc)=>dispatch(fetchData(url,actFunc)),
		recentPosts:(recent)=>dispatch(recentPosts(recent))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);