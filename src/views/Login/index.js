import React, { Component, useState } from 'react'
import './index.less'
import LoginForm from '../../component/LoginForm'
import RegisterForm from '../../component/RegisterForm'
function Login() {
	const [formType, setFormType] = useState('login')
	const switchForm = (value) => {
		setFormType(value)
		console.log(value)
	}
	return (
		<div className='login-wrap'>
			{formType === 'login' ? (
				<LoginForm switchForm={switchForm}></LoginForm>
			) : (
				<RegisterForm switchForm={switchForm}></RegisterForm>
			)}
		</div>
	)
}

export default Login
