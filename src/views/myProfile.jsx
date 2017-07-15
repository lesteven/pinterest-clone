import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../redux/modules/fetchThunk';


class MyProfile extends Component{
	componentWillReceiveProps(props){
		console.log(props)
		props.user.name?
		null:
		props.history.push('/');
	}
	render(){
		return(
			<div>
			<h3>My Profile</h3>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		user:state.user
	};
};

const mapDispatchToProps = (dispatch) =>{
	return{
		fetchData:(url,actFunc)=>dispatch(fetchData(url,actFunc))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MyProfile);