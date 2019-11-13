import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Main from '../route1/Main'
import Topics from '../route1/Topics'
import About from '../route1/About'
import Home from './Home'
export default class MyRoute extends React.Component{
  render(){
    return(
      <Router>
        <Home>
          <Route path="/main"  render={()=>
          <Main>
            <Route path="/main/a" component={About}></Route>
          </Main>
          }></Route>
          <Route path="/About"  component={About}></Route>
          <Route path="/Topics"  component={Topics}></Route>
        </Home>
      </Router>
    )
  }
}