import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Col, Row, Message, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { validate_phone } from '../lib/vilidate'
import { Util } from '../lib/util'
import { login } from '../api'
import './index.less'

function LoginForm(props) {
	const history = useHistory()
	const handleRegister = () => {
		console.log(props)
		props.switchForm('register')
	}
	const onFinish = async (value) => {
		console.log(value)
		let res = await login(value)
		if (res.data.code === 200) {
			console.log(res)
			const token = res.data.data.token
			Util.setSessionStorage('Author', token)
			history.push('/home')
		}
	}

	return (
		<div>
			<div className='login-title'>XXX后台管理系统</div>
			<Form
				name='normal_login'
				className='login-form'
				initialValues={{ remember: true }}
				onFinish={onFinish}>
				<Form.Item
					name='username'
					rules={[
						{ required: true, message: '账号不能为空' },
						{ pattern: validate_phone, message: '手机号格式不正确' }
					]}>
					<Input
						prefix={<UserOutlined className='site-form-item-icon' />}
						placeholder='请输入账号'
						className='username'
					/>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: '密码不能为空' }]}>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='请输入密码'
						className='password'
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						block
						size='large'
						className='login-form-button'>
						登录
					</Button>
					<div className='login-footer'>
						<span style={{ color: 'grey' }}>还没有账号</span>？{' '}
						<span
							style={{ color: '#1890ff', cursor: 'pointer' }}
							onClick={handleRegister}>
							点击注册
						</span>
					</div>
				</Form.Item>
			</Form>
		</div>
	)
}
export default LoginForm
