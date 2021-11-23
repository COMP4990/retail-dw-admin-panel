import React from 'react'
import withContext from "../withContext";
import { Row, Col, Card, Typography } from 'antd'
import { Color } from '../utils'
import NumberCard from './NumberCard'
import LineChart from './LineChart'
import PieChart from './PieChart'

const { Title } = Typography;

function Charts(props) {
  const { totalOrders, topBrands, topProducts } = props.context;

  return (
    <>
    <Row gutter={30} justify={"space-around"} style={{ marginBottom: 10 }}>
      <Col key={1} span={8}>
        <NumberCard {...{icon: 'shopping-cart', color: Color.blue, title: 'Total Orders', value: totalOrders, isNumber: true}} />
      </Col>
      <Col key={2} span={8}>
        <NumberCard {...{icon: 'team', color: Color.grass, title: 'Top Selling Brand', value: topBrands[0].brand, isNumber: false}} />
      </Col>
      <Col key={3} span={8}>
        <NumberCard {...{icon: 'team', color: Color.yellow, title: 'Top Selling Product', value: topProducts[0].product, isNumber: false}} />
      </Col>
    </Row>
    <Row gutter={2} style={{ marginBottom: 10 }}>
      <Col span={24}>
        <Card style={{borderRadius: "15px", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"}}>
          <LineChart/>
        </Card>
      </Col>
    </Row>
    <Row gutter={20} style={{ marginBottom: 10 }}>
      <Col span={12}>
        <Card style={{borderRadius: "15px", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"}}>
          <PieChart data={"brands"}/>
          <Title level={4}>Top Selling Brands</Title>
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{borderRadius: "15px", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"}}>
          <PieChart data={"products"}/>
          <Title level={4}>Top Selling Products</Title>
        </Card>        
      </Col>
    </Row>
    </>
  )
}

export default withContext(Charts);