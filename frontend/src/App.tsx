import React, { useState } from 'react'
import './App.css'
import { Layout, Menu, Typography } from 'antd'
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { DutyList } from './components/DutyList/DutyList'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home')
  const [update, setUpdate] = useState(false)

  const handleMenuClick = (e: any) => {
    setCurrentSection(e.key)
  }

  const handleSave = () => {
    setUpdate(!update)
  }

  const handleDelete = () => {
    setUpdate(!update)
  }

  const menuItems = [
    { label: 'Home', key: 'home', icon: <HomeOutlined /> },
    { label: 'Duties', key: 'duties', icon: <UnorderedListOutlined /> }
  ]

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <div>Welcome to toduties</div>
      case 'duties':
        return <DutyList key={update.toString()} onSave={handleSave} onDelete={handleDelete} />
      default:
        return <div>Welcome to toduties</div>
    }
  }

  return (
    <Layout className="app-layout-general">
      <Sider collapsible>
      <h1 className="app-logo"><img className="app-logo-img" src="/assets/toduties-logo.png" alt="toduties logo" />toduties</h1>
        <div>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['home']}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Title level={2} style={{ margin: '16px 0' }}>
            To-Do List
          </Title>
          {renderContent()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          toduties, a To-Do List ©2024 Created by Francisco Veragua <span role="img" aria-label="skull">💀</span>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App