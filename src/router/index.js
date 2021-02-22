import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import PrivateRouter from '../component/PrivateRouter'
import Login from '../views/Login'
import Home from '../views/Home'
function Main() {
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
export default Main
