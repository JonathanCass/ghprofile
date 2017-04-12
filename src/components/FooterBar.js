import React from 'react'

const styles={
	footContainer:{
		height:100,
		width: 984,
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		lineHeight: '98px',
		fontSize: 12,
	},
	footLink:{
		marginLeft: 14,
		color: '#0379E0'
	},
	icon:{
		lineHeight:'98px',
		fontSize: 24,
		color: '#4F5D95'
	}
}

class FooterBar extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
    	<div style={styles.footContainer}>
      		<div>
      			© 2017 GitHub, Inc. 
      			<a style={styles.footLink} href="https://github.com/site/terms">Terms</a>
      			<a style={styles.footLink} href="https://github.com/site/privacy">Privacy </a>
      			<a style={styles.footLink} href="https://github.com/security">Security</a>
      			<a style={styles.footLink} href="https://status.github.com/">Status</a>
      			<a style={styles.footLink} href="https://help.github.com/">Help</a>
      		</div>
      		<i className="fa fa-github" style={styles.icon} aria-hidden="true"></i>
      		<div>
    			<a style={styles.footLink} href="https://github.com/contact">Contact GitHub</a>
      			<a style={styles.footLink} href="https://developer.github.com/">API</a>
      			<a style={styles.footLink} href="https://training.github.com/">Training</a>
      			<a style={styles.footLink} href="https://shop.github.com/">Shop</a>
      			<a style={styles.footLink} href="https://github.com/blog">Blog</a>
      			<a style={styles.footLink} href="https://github.com/about">About</a>  
      		</div>
    	</div>
    )
  }
}

export default FooterBar