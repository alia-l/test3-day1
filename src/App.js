import React from 'react'

import { Switch, Route, HashRouter } from 'react-router-dom'
import PrivateRouter from './component/PrivateRouter'
import Login from '../src/views/Login'
import Home from '../src/views/Home'
import './App.css'
import '../src/style/normalize.css'
import { hot } from 'react-hot-loader/root'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<HashRouter>
					<Switch>
						<Route component={Login} exact path='/' />
						<PrivateRouter component={Home} path='/home' />
					</Switch>
				</HashRouter>
			</div>
		)
	}
}
const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot
