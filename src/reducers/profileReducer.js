const initialState = {
	profile: {},
	repos: []
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_USER':
			return { ...state , profile: action.user}
		case 'GET_REPOS':
			return { ...state , repos: [...action.repos]}
		default:
			return state
	}
}