import request from '@/utils/request.js'

/**
 * 提交表单
 */
export const submitSchoolList = async (formData) => {
	let data = await request({
		url: 'https://www.shangzhixiao.com/e/enews/index.php',
		header: {
			 "Content-Type": "application/x-www-form-urlencoded"
		},
		method: 'POST',
		data: {
			enews: 'AddFeedback',
			bid: 2,
			...formData
		},
	})
	return data
}