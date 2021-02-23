import React, { useState } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd'
// import Home from '../Home'
import './index.less'
import { Link, Route, Switch } from 'react-router-dom'
import PrivateRouter from '../../component/PrivateRouter'
import menu from '../../router'
import User from '../User/index'
import ContentForm from '../../component/ContentForm'
import SystemSetting from '../SystemSetting/index'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const OPTIONS = {
	User,
	SystemSetting
}
function Home() {
	const [collapsed, setCollapsed] = useState(false)
	const onCollapse = (collapsed) => {
		console.log(collapsed)
		this.setState({ collapsed })
	}
	const renderSubMenu = (item) => {
		console.log(item)
		return (
			<SubMenu title={item.title} key={item.key}>
				{item.children &&
					item.children.map((it) => (
						<Menu.Item key={it.key}>
							<Link to={it.router}>{it.title}</Link>
						</Menu.Item>
					))}
			</SubMenu>
		)
	}
	const renderMenu = (item) => {
		return (
			<Menu.Item key={item.key}>
				<Link to={item.router}>{item.title}</Link>
			</Menu.Item>
		)
	}
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div className='logo'>XXX管理系统</div>
				<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
					{menu &&
						menu.map((item) =>
							item.children && item.children.length > 0
								? renderSubMenu(item)
								: renderMenu(item)
						)}
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Header className='site-layout-background' style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					{/* <Route exact path='/home' component={Home} />
						{menu &&
							menu.map((item) =>
								item.children ? (
									item.children.map((i) => (
										<Route
											path={i.router}
											component={OPTIONS[i.component]}
											key={i.key}
										/>
									))
								) : (
									<Route
										path={item.router}
										component={OPTIONS[item.component]}
										key={item.key}
									/>
								)
							)} */}
					<ContentForm></ContentForm>
				</Content>
			</Layout>
		</Layout>
	)
}
export default Home
