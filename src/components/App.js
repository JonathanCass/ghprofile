import React from 'react'

const styles = {
	headerBar:{
		height: 54,
		display: 'flex',
		justifyContent: 'space-between',
		overflow: 'hidden',
		color: '#C8D0D1',
		background: '#24292E'
	},
	headerLeft:{
		marginLeft: 220
	},
	headerRight:{
		marginRight:220
	},
	icon:{
		color: 'red',
		fontSize: 22
	},
	headerInput:{
		width: 300,
		height: 26,
		marginTop: 10,
		borderRadius: 5,
		fontSize: 14,
		paddingLeft: 5,
		background: '#3F4347',
		border: 0
	},
	headerText:{
		marginLeft: 12,
		fontSize: 15,
		textAlign: 'center'
	},
	profileBlock:{
		margin: '24px 0 0 220px',
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
	},
	followButton:{
		width:230,
		height: 32
	}
}

export default React.createClass({
  render() {
    return (
    	<div>
      		<div style={styles.headerBar}>
      			<div style={styles.headerLeft}>
      				<i className="fa fa-github" style={styles.icon} aria-hidden="true"></i>
      				<input type ="text" placeholder="Search GitHub" style={styles.headerInput}></input>
      				<span style={styles.headerText}> Pull Requests </span>
      				<span style={styles.headerText}> Issues </span>
      				<span style={styles.headerText}> Gist </span>
      			</div>
      			<div style={styles.headerRight}>
      				<span > + </span>
      				<img src="" alt=""/>
      			</div>
      		</div>
      		<div style={styles.profileBlock}>
      			<img src="" alt="" style={styles.profilePicture}/>
      			<div style={styles.profileName}>
      				<span> UserName </span>
      				<span> UserLogin </span>
      			</div>
      			<button type='button' style={styles.followButton}> Follow </button>
      			<span> Block or report user </span>
      		</div>
      	</div>
    )
  }
})