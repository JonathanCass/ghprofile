import React from 'react'
import MainPage from './MainPage'
import {Provider} from 'react-redux'
import store from '../store'
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'

export default React.createClass({
  render() {
    return (
    	<Provider store={store}>
    		<div>
    			<HeaderBar/>
      		<MainPage/>
          <FooterBar/>
      	</div>
      </Provider>
    )
  }
})