import request from '@/utils/request.js'

/**
 * 获取专业数据库列表数据
 */
export const getMajorList = async (ttid = 0, page = 1, pagesize = 10) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'list',
			tablename: 'pz',
			ttid,
			page,
			pagesize
		},
	})
	return data
}

/**
 * 获取专业数据库详情数据
 */
export const getMajorDetails = async (id) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'details',
			tablename: 'pz',
			id: id
		}
	})
	return data
}

/**
 * 获取专业开始学校
 */
export const getMajorOpenSchool = async (id) => {
	let data = await request({
		data: {
			mod: 'major',
			act: 'openschool',
			id
		}
	})
	return data
}
