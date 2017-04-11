import React from 'react'
import ProfileBlock from './ProfileBlock'
import RepoSection from './RepoSection'

const styles={
  mainContainer:{
    display:'flex'
  }
}

class MainPage extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div style={styles.mainContainer}>
	      <ProfileBlock/>
	      <RepoSection/>
      </div>
    )
  }
}

export default MainPage