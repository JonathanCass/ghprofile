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