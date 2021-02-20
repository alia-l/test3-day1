import React from 'react'
import './App.css'
import { Switch, Route, Router, HashRouter, Link } from 'react-router-dom'
import Login from './views/Login/index'
import '../src/style/normalize.css'
import './app.less'

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
					</Switch>
				</HashRouter>
			</div>
		)
	}
}
const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot
