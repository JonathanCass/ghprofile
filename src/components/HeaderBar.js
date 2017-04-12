import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.css'

const styles = {
	backgroundColorBar:{
		background: '#24292E',
		height: 54
	},
	headerBar:{
		height: 54,
		display: 'flex',
		justifyContent: 'space-between',
		overflow: 'hidden',
		color: '#C8D0D1',
		background: '#24292E',
		width: 984,
		margin: 'auto'
	},
	icon:{
		color: 'whte',
		fontSize: 38,
		position: 'relative',
		top: 8,
		right: -6
	},
	headerInput:{
		width: 300,
		height: 30,
		margin: '12px 0 0 20px',
		borderRadius: 5,
		fontSize: 14,
		paddingLeft: 5,
		background: '#3F4347',
		border: 0
	},
	headerText:{
		marginLeft: 12,
		fontSize: 15,	
	},
	plus:{
		height:25,
		width: 25,
		marginTop: 14,
		fontSize: 20
	},
}
class HeaderBar extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div style={styles.backgroundColorBar}>
    	<div style={styles.headerBar}>
	      	<div>
	      		<i className="fa fa-github" style={styles.icon} aria-hidden="true"></i>
	      		<input type="text" placeholder="Search GitHub" style={styles.headerInput}></input>
	      		<span style={styles.headerText}> Pull Requests </span>
	      		<span style={styles.headerText}> Issues </span>
	      		<span style={styles.headerText}> Gist </span>
	      	</div>
	      	<div>
	      		<div style={styles.plus}> + </div>
	      	</div>
	    </div>
	    </div>
    )
  }
}

export default HeaderBar