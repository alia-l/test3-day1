import React, { Component } from 'react'
import './index.less'
import LoginForm from '../../component/LoginForm'
import RegisterForm from '../../component/RegisterForm'
class Login extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className='login-wrap'>
				<LoginForm></LoginForm>
				<RegisterForm></RegisterForm>
			</div>
		)
	}
}
export default Login
