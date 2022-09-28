import request from '@/utils/request.js'

/**
 * 获取news数据库列表数据
 */
export const getNewsList = async (classid = 0, page = 1, pagesize = 10) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'list',
			classid,
			page,
			pagesize
		},
	})
	return data
}

/**
 * 获取news数据库详情数据
 */
export const getNewsDetails = async (id) => {
	let data = await request({
		data: {
			mod: 'unity',
			act: 'details',
			id: id
		}
	})
	return data
}

/**
 * 增加资讯文章点赞
 */
export const setNewsLike = async (id) => {
	let data = await request({
		data: {
			mod: 'news',
			act: 'like',
			id
		}
	})
	return data
}
