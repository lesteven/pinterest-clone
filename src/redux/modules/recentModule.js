//action
export function recentPosts(recent){
	return{
		type:'RECENT',
		recent
	}
}

//reducer
export const recent =(state=[],action)=>{
	switch(action.type){
		case 'RECENT':
			return action.recent 
		default:
			return state;
	}
}

export default recent;