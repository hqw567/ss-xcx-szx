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
				uni.showModal({
					title: '加载超时,请重试!',
					content: '',
					showCancel: false,
					success: function(res) {
						return
						if (res.confirm) {
							console.log('用户点击确定');
							uni.reLaunch({
								url: '/pages/home/home'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		})
	})


}

export default request
