import React from 'react'
import {getRepos} from '../api/profile'
import {connect} from 'react-redux' 

const styles ={
	block:{
		width: 726,
		border: "1px solid #E1E4E8",
		borderWidth: '0 0 1px 0',
		padding: '30px 0'
	},
  redDot:{
    height: 12,
    width: 12,
    borderRadius: 50,
    backgroundColor: '#E34C26',
    marginRight: 6
  },
  yellowDot:{
    height: 12,
    width: 12,
    borderRadius: 50,
    backgroundColor: '#F1E05A',
    marginRight: 6
    
  },
  languageLine:{
    marginTop: 20,
    display: 'flex',
    fontSize: 12,
    color: '#766C73',
  },
  llText:{
    marginRight: 8
  },
  flatLine:{
    float: 'right',
    width: 152,
    height: 2,
    background: '#D7ECAE'
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
        {this.props.repos.map(repo=>(
          <div key={repo.id} style={styles.block}>
            <a href={repo.svn_url} className="repoLink">{repo.name}</a>
            <div style={styles.languageLine}> 
              <div style={repo.language === "HTML" ? styles.redDot : styles.yellowDot }></div>
              <span style={styles.llText}>{repo.language}</span><span style={styles.llText}>Updated on {repo.updated_at}</span>
            </div>
            <div style={styles.flatLine}></div>
          </div>
        ))} 
        </div>
    )
  }
}

function mapStateToProps (appState) {
	return {repos: appState.repos}
}

export default connect(mapStateToProps)(RepoList)
