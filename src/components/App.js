import React from 'react'
import MainPage from './MainPage'
import {Provider} from 'react-redux'
import store from '../store'
import HeaderBar from './HeaderBar'

export default React.createClass({
  render() {
    return (
    	<Provider store={store}>
    		<div>
    			<HeaderBar/>
      			<MainPage/>
      		</div>
      	</Provider>
    )
  }
})