import React from 'react'
import { Row,Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import "../style/common.less"
export default class Admin extends React.Component{
  render(){
    return (
      <div>
        <Row className ="container">
          <Col span={3} className="navLeft">
            <NavLeft/>
          </Col>
          <Col span={21} className="content">
            <Header>这是头部</Header>
            <Row className="mainContent">这是中间内容部分</Row>
            <Footer>这是底部</Footer>
          </Col>
        </Row>
    </div>
    )
  }
}
