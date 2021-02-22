const Util = {
	getLocalStorage(value) {
		return window.localStorage.getItem(value) || ''
	},
	getSessionStorage(value) {
		return window.sessionStorage.getItem(value) || ''
	},

	setLocalStorage(k, value) {
		window.localStorage.setItem(k, value)
	},
	setSessionStorage(k, value) {
		window.sessionStorage.setItem(k, value)
	},

	removeLocalStorage(k) {
		window.localStorage.removeItem(k)
	},
	removeSessionStorage(k) {
		window.sessionStorage.removeItem(k)
	}
}
export { Util }
