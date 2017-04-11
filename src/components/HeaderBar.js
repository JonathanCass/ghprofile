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
}
class HeaderBar extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div style={styles.headerBar}>
	      	<div style={styles.headerLeft}>
	      		<i className="fa fa-github" style={styles.icon} aria-hidden="true"></i>
	      		<input type="text" placeholder="Search GitHub" style={styles.headerInput}></input>
	      		<span style={styles.headerText}> Pull Requests </span>
	      		<span style={styles.headerText}> Issues </span>
	      		<span style={styles.headerText}> Gist </span>
	      	</div>
	      	<div style={styles.headerRight}>
	      		<span > + </span>
	      		<img src="" alt=""/>
	      	</div>
	    </div>
    )
  }
}

export default HeaderBar