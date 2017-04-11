import React from 'react'

const styles = {
	profileBlock:{
		margin: 24,
		height: 400,
		width: 230,
		padding: 0
	},
	profilePicture:{
		height: 242,
		width: 230,
		background: 'pink',
		borderRadius: 15,
	},
	profileName:{
		width:230,
		height:74,
		marginTop: 16
	},
	name:{
		fontSize: 24,
	},
	login:{
		fontSize: 20,
		color: '#666666',
	},
	followButton:{
		background: '#F6F8FA',
		borderRadius: 5,
		height: 32,
		width: 230,
		border: 'solid 1px #A4A7AC',
		fontSize: 14,
		fontWeight: 'bold'
	},
	blockReport:{
		height: 50,
		border: 'solid 1px #A4A7AC',
		borderWidth: '0 0 1px 0',
		color: '#666666',
		fontSize: 12,
		lineHeight: '48px'
	}
}

class ProfileBlock extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div style={styles.profileBlock}>
	      	<img src="" alt="" style={styles.profilePicture}/>
	      	<div style={styles.profileName}>
	      		<span style={styles.name}> UserName </span><br />
	     		<span style={styles.login}> UserLogin </span>
	      	</div>
	    	<button type='button' style={styles.followButton}> Follow </button>
	      	<div style={styles.blockReport}> Block or report user </div>
      	</div>
    )
  }
}

export default ProfileBlock