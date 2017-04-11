import React from 'react'
import HeaderBar from './HeaderBar'
import ProfileBlock from './ProfileBlock'

class MainPage extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div>
    		<HeaderBar/>
	      	<ProfileBlock/>
      	</div>
    )
  }
}

export default MainPage