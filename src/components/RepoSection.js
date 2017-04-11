import React from 'react'

const styles = {
	container:{
		width: 730,
		marginTop: 22,
		display: 'inline-block'
	},
	repoHeaderBar:{
		height: 64,
		width: 730,
		border: '1px solid #D1D5DA',
		borderWidth: '0 0 1px 0',
	},
	repoSearchBar:{
		height: 64,
		width: 730,
		border: '1px solid #D1D5DA',
		borderWidth: '0 0 1px 0',
		paddingTop: 16
	},
	headerText:{
		height: 64,
		padding: 22, 
		color: '#24292E',
		display: 'inline-block',
		margin: 0,
		fontSize: 14
	},
	search:{
		height: 34,
		width: 470,
		textIndent: 8,
		fontSize: 14,
		margin: 'auto',
		borderRadius: 5,
		border: '1px solid #D1D5DA',
		marginRight: 24
	},
	selectType:{
		height: 34,
		width: 96,
		marginRight: 4,
		fontSize: 14,
		background: '#F0F4F7',
	},
	selectLanguage:{
		height: 34,
		width: 130,
		fontSize: 14,
		background: '#F0F4F7'
	}

}

class RepoSection extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.container}>
       	<div style={styles.repoHeaderBar}>
       		<div style={styles.headerText}>Overview</div>
       		<div style={styles.headerText}>Repositories</div>
       		<div style={styles.headerText}>Stars</div>
       		<div style={styles.headerText}>Followers</div>
       		<div style={styles.headerText}>Following</div>
       	</div>
       	<div style={styles.repoSearchBar}>
       		<input type="text" name="search" placeholder="Search repositories..." style={styles.search}></input>
       		<select style={styles.selectType}>
			 	<option value="All">All</option>
			  	<option value="Sources">Sources</option>
			  	<option value="Forks">Forks</option>
			  	<option value="Mirrors">Mirrors</option>
			</select>
			<select style={styles.selectLanguage}>
			 	<option value="All">All</option>
			  	<option value="C++">C++</option>
			  	<option value="HTML">HTML</option>
			  	<option value="Javascript">Javascript</option>
			  	<option value="PHP">PHP</option>
			</select>
       	</div>
      </div>
    )
  }
}

export default RepoSection