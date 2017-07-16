//action
export function post(pin){
	return{
		type:'PIN',
		pin
	}
}

//reducer
export const pin =(state=[],action)=>{
	switch(action.type){
		case 'PIN':
			return action.pin 
		default:
			return state;
	}
}

export default pin;