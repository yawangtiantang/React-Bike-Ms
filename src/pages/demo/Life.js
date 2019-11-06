import React from 'react'
import './Life.less'
import { Button } from 'antd'
// import 'antd/dist/antd.css'
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:1
    }
  }
  handleAdd(){
    this.setState({
      count:this.state.count+1
    })
  }
handle=() =>{
  this.setState({
    count:this.state.count+1
  })
}
  render(){
    return <div className="container">
      <Button type="primary">Primary</Button>
      <h1>React生命周期介绍</h1>
      <button onClick={this.handleAdd.bind(this)}>点击一下</button>
      <button onClick={this.handle}>再点一下</button>  
      <p>{this.state.count}</p>
    </div>
  }
}
