import axios from 'axios'
import { message, Message } from 'antd'

const http = axios.create({
	baseURL: '/shop-service/v1'
})
http.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		let token = sessionStorage.token
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token
		}
		return config
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
http.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		if (response.data.code != 200) {
			if (response.data.code == 401) {
				message.error('登录超时，请重新登录')
			} else {
				message.error(response.data.msg)
			}
		}
		return response
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)
export default http
