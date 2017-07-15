//action thunk
export function fetchData(url,actFunc){
	return(dispatch)=>{
		fetch(url,{credentials:'same-origin'})
			.then(response=> response.json())
			.then(data=>{
				actFunc(data)
			})
	}
}