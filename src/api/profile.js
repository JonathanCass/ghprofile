import store from '../store'
import axios from 'axios'

export function getUser(){
	axios.get('https://api.github.com/users/JonathanCass').then(results=>{
		store.dispatch({
			type: 'GET_USER',
			user: results.data
		})
	})
}

export function getRepos(){
	axios.get('https://api.github.com/users/JonathanCass/repos').then(results=>{
		store.dispatch({
			type: 'GET_REPOS',
			repos: results.data
		})
	})
}