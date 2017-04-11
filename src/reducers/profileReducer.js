const initialState = {
	profile: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_USER':
			return { profile: action.user}
		default:
			return state
	}
}