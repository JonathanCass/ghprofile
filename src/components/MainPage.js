import React from 'react'
import ProfileBlock from './ProfileBlock'
import RepoSection from './RepoSection'

const styles={
  mainContainer:{
    display:'flex',
    width: 984,
    margin: 'auto',
    position: 'relative',
    right: 16
  }
}

class MainPage extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div style={styles.mainContainer}>
	      <ProfileBlock />
	      <RepoSection />
      </div>
    )
  }
}

export default MainPage