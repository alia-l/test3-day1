import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Util } from '../lib/util'
const PrivateRouter = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				Util.getSessionStorage('Author') ? (
					<Component {...routeProps} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	)
}
export default PrivateRouter
