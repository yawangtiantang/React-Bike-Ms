import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Main from '../route1/Main'
import Topics from '../route1/Topics'
import About from '../route1/About'
import Info from './info'
import Home from './Home'
import NoMatch from './NoMatch'
export default class MyRoute extends React.Component{
  render(){
    return(
      <Router>
        <Home>
        <Switch>
          <Route path="/main"  render={()=>
          <Main>
            <Route path="/main/:value" component={Info}></Route>
          </Main>
          }></Route>
          <Route path="/About"  component={About}></Route>
          <Route path="/Topics"  component={Topics}></Route>
          <Route  component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    )
  }
}