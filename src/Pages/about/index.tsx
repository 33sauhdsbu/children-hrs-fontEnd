import { Layout } from 'antd'
import React from 'react'
const { Footer, Content } = Layout

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '800px',
  color: '#fff',
  backgroundColor: '#0958d9'
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff'
}

const About: React.FC = () => {
  return <Layout>
    <Content style={contentStyle}>about</Content>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
}
export default About
