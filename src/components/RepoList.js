import React from 'react'
import {getRepos} from '../api/profile'
import {connect} from 'react-redux' 

const styles ={
	block:{
		width: 726,
		border: "1px solid #E1E4E8",
		borderWidth: '0 0 1px 0',
		padding: '30px 0'
	}
}
class RepoList extends React.Component {
  /*constructor(props) {
    super(props)
  }*/
  componentWillMount(){
  	getRepos()
  }
  render() {
    console.log(this.props)
    return (
      <div>
      	<div style={styles.block}>
        	Start Of Mapping
        </div> 
      </div>
    )
  }
}

function mapStateToProps (appState) {
	return {repos: appState.repos}
}

export default connect(mapStateToProps)(RepoList)
