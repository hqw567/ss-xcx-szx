import request from '@/utils/request.js'

/**
 * 获取所以栏目信息
 */
export const getClassInfo = async () => {
	let data = await request({
		data: {
			mod: 'other',
			act: 'classinfo'
		}
	})
	return data
}


/**
 * 获取热门搜索
 */
export const getHotSearch = async () => {
	let data = await request({
		data: {
			mod: 'other',
			act: 'hotsearch'
		}
	})
	return data
}

/**
 * 搜索
 */
export const getSearch = async (keyword, page = 1, pagesize = 10, tablename = 'news') => {
	if (!keyword) {
		console.warn('keyword参数不能为空');
	}
	let data = await request({
		data: {
			mod: 'unity',
			act: 'search',
			keyword,
			page,
			pagesize,
			tablename
		}
	})
	return data
}
