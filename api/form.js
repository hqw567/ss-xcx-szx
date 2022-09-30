import request from '@/utils/request.js'

/**
 * 提交表单
 */
export const submitSign = async (formData,fromPath) => {
	let data = await request({
		url: 'https://www.shangzhixiao.com/e/enews/index.php',
		header: {
			 "Content-Type": "application/x-www-form-urlencoded"
		},
		method: 'POST',
		data: {
			enews: 'AddFeedback',
			bid: 2,
			...formData,
			frompath:fromPath
		},
	})
	return data
}

export const submitRegInfo = async (title,content) => {
	let data = await request({
		url: 'https://www.pushplus.plus/send',
		method: 'POST',
		data: {
			token: '586f635d1cdd41db84277674e785f7ed',
			channel: 'wechat',
			template: 'html',
			title,
			content
		},
	})
	return data
}