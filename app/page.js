'use client'
import React from 'react'
import { Layout, Button } from 'antd'

const { Header, Content, Footer } = Layout

export const runtime = 'edge'

const Home = () => (
  <Layout>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
        Header
    </Header>
    <Content>
      <p>Content</p>
      <Button type="primary">Button</Button>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
)

export default Home