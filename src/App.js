import React from 'react'
import './App.css'
import Main from './router'
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
				<Main></Main>
			</div>
		)
	}
}
const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot
