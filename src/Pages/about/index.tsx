import { Layout } from 'antd'
import React from 'react'
const { Header, Footer, Sider, Content } = Layout
const headerStyle: React.CSSProperties = {
  textAlign: 'right',
  backgroundColor: 'white',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  fontSize: 30
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '800px',
  color: '#fff',
  backgroundColor: '#0958d9'
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '800px',
  color: '#fff',
  backgroundColor: '#1677ff'
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff'
}

const layoutStyle = {
  borderRadius: 8
}

const About: React.FC = () => {
  return <Layout style={layoutStyle}>
  <Sider width="15%" style={siderStyle}>
    Sider
  </Sider>
  <Layout>
    <Header style={headerStyle}>
    儿童医院挂号系统

    </Header>
    <Content style={contentStyle}>Content</Content>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
</Layout>
}
export default About
