import React from 'react'
import {Route,HashRouter,Link,Switch} from 'react-router-dom'
import Main from './Main'
import Topics from './Topics'
import About from './About'
export default class Home extends React.Component{
  render(){
    return(
      <HashRouter>
        <div>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact={true} path="/" component={Main}></Route>
          <Route path="/topics" component={Topics}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        </div>
      </HashRouter>
    )
  }
}