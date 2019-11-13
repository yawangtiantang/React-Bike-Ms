import React from 'react'
// import {HashRouter as Router,Route,Link} from 'react-router-dom'
export default class Info extends React.Component{
  render(){
    return(
      <div>
         这是动态路由传参,参数值是: {this.props.match.params.value}
      </div>
    )
  }
}