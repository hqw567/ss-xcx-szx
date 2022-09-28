import request from '@/utils/request.js'

/**
 * 获取school数据库列表数据
 */
export const getSchoolList = async (classid = 0, page = 1, pagesize = 10) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'list',
			tablename: 'pt',
			classid,
			page,
			pagesize
		},
	})
	return data
}

/**
 * 获取pt数据库详情数据
 */
export const getSchoolDetails = async (id) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'details',
			tablename: 'pt',
			id: id
		}
	})
	return data
}

/**
 * 获取学校开设专业
 */
export const getzhaoshengzy = async (instrlist) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'list',
			tablename: 'pz',
			instr: 'id',
			instrlist
		}
	})
	return data
}
