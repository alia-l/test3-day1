import React from 'react'

import { Switch, Route, HashRouter } from 'react-router-dom'
import User from '../views/User'
import SystemSetting from '../views/SystemSetting'
class ContentForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<Switch>
					<Route component={User} exact path='/user' />
					<Route component={SystemSetting} exact path='/system_setting' />
				</Switch>
			</div>
		)
	}
}

export default ContentForm
