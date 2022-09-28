import {
	websiteUrl
} from '@/config/config.js'
const request = (params) => {

	const baseURL = websiteUrl + 'ecmsapi'

	return new Promise((resolve, reject) => {

		uni.request({
			url: params.url || baseURL,
			method: params.method || 'GET',
			header: params.header || {},
			data: params.data || '',
			success: res => {

				resolve(res.data)
			},
			fail: err => {
				uni.hideLoading()
				uni.hideToast()
				uni.switchTab({
					url: '/pages/home/home'
				})
				uni.showToast({
					title: '加载超时,请重试!',
					icon: 'none',
					duration: 2000,
				})
			}
		})
	})
}

export default request
