import http from '../http'
export const getCode = () => {
	return http({
		url: '/user/code',
		method: 'get'
	})
}
export const register = (params) => {
	return http({
		url: '/user/register',
		method: 'get',
		params
	})
}

export const login = (data) => {
	return http({
		url: '/user/login/shop',
		method: 'post',
		data
	})
}
