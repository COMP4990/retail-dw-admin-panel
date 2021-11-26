import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Context from "./Context";

import logo from './logo.svg';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  CodeOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Charts from './components/Charts'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  const [collapsed, setCollapsed] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [topBrands, setTopBrands] = useState([{
    "brand": "",
    "quantity": 0
  }]);
  const [topProducts, setTopProducts] = useState([{
    "product": "",
    "quantity": 0
  }]);

  function onCollapse(collapsed) {
    setCollapsed({ collapsed });
  };

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await axios.get(process.env.REACT_APP_API_URL + '/admin/numOfAllOrders');
        setTotalOrders(response.data.count);

        response = await axios.get(process.env.REACT_APP_API_URL + '/admin/topSellingBrand');
        setTopBrands(response.data);

        response = await axios.get(process.env.REACT_APP_API_URL + '/admin/topSellingProduct');
        setTopProducts(response.data);
      } catch(err) {
        console.log(err);
        return { status: 401, message: 'Unauthorized' }
      }
      
    }  
  
    fetchMyAPI();
  }, []);

  return (
    <Context.Provider
        value={{
          totalOrders: totalOrders,
          topBrands: topBrands,
          topProducts: topProducts
        }}
      >
        <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <img src={logo} alt="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Charts
                </Menu.Item>
                <Menu.Item key="2" icon={<CodeOutlined />}>
                  Queries
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Bill is a cat.
                </div> */}
                <Charts/>
              </Content>
              <Footer style={{ textAlign: 'center' }}>E-Commerce ©2021 Created by Jameel Jiwani and Xiaoshuai Geng</Footer>
            </Layout>
          </Layout>
        </div>
      </Context.Provider>
  );
}

export default App;
