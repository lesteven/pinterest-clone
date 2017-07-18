//action
export function profilePosts(profile){
	return{
		type:'profile',
		profile
	}
}

//reducer
export const profile =(state=[],action)=>{
	switch(action.type){
		case 'profile':
			return action.profile 
		default:
			return state;
	}
}

export default profile;