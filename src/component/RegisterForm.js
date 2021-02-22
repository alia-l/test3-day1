import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Col, Row, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { validate_phone } from '../lib/vilidate'
import { getCode, register } from '../api'
import './index.less'

function RegisterForm(props) {
	const [codeName, setCodeName] = useState('获取验证码')
	const [codeVisible, setCodeVisible] = useState(false)
	const handleCode = async () => {
		let res = await getCode()
		if (res.data.code == 200) {
			message.success('您的验证码是' + res.data.data.code)
			setCodeVisible(true)
			interval()
		}
	}
	const handlelogin = () => {
		props.switchForm('login')
	}
	const onFinish = async (value) => {
		const params = {
			phone: value.username,
			password: value.password,
			code: value.code
		}
		let res = await register(params)
		if (res.data.code === 200) {
			message.success('注册成功')
		}
	}
	const interval = () => {
		let num = 5
		const i = setInterval(() => {
			if (num >= 1) {
				setCodeName(`${num--}秒后发送`)
			} else {
				setCodeVisible(false)
				clearInterval(i)
				setCodeName('重新发送')
			}
		}, 1000)
	}
	return (
		<div>
			<div className='login-title'>XXX后台管理系统</div>
			<Form
				name='normal_login'
				className='login-form'
				onFinish={onFinish}
				initialValues={{ remember: true }}>
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
				<Form.Item
					name='anginPassword'
					rules={[
						{ required: true, message: '请再次输入密码' },
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve()
								}
								return Promise.reject('两次输入密码不一致')
							}
						})
					]}>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='再次输入密码'
						className='password'
					/>
				</Form.Item>
				<Form.Item name='code'>
					<Row gutter={8}>
						<Col className='gutter-row' span={16}>
							<Input placeholder='验证码' className='code' />
						</Col>
						<Col className='gutter-row' span={8}>
							<Button
								block
								className='get-code'
								onClick={handleCode}
								disabled={codeVisible}>
								{codeName}
							</Button>
						</Col>
					</Row>
				</Form.Item>

				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						block
						size='large'
						className='login-form-button'>
						注册
					</Button>
					<div className='login-footer'>
						<span style={{ color: 'grey' }}>注册成功？</span>
						<span
							style={{ color: '#1890ff', cursor: 'pointer' }}
							onClick={handlelogin}>
							去登录
						</span>
					</div>
				</Form.Item>
			</Form>
		</div>
	)
}
export default RegisterForm
