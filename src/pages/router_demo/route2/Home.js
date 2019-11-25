import React from 'react'
import {HashRouter as Router,Link} from 'react-router-dom'
import Main from '../route1/Main'
import Topics from '../route1/Topics'
import About from '../route1/About'
export default class Home extends React.Component{
  render(){
    return(
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/main">Main222</Link>
          </li>                                                                                                                                                                 
          <li>
            <Link to="/about">About222</Link>                                                    
          </li>
          <li>
            <Link to="/topics">Topics222</Link>
          </li>
        </ul>
        <hr/>
        {this.props.children}
        </div>
      </Router>
    )
  }
}