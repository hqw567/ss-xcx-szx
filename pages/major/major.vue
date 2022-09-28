<template>
	<view class="container">
		<view class="">
			<NavigationBarList :navigationBarTitleText="navigationBarTitleText" tbname="pz" />
		</view>
		<!-- tab栏 -->
		<v-tabs
			v-model="current"
			padding="0 0 2px 0"
			field="name"
			fixed
			activeColor="#0092ff"
			lineColor="#0092ff"
			:tabs="tabs"
			@change="changeTab"
		></v-tabs>
		<view class="list-box">
			<MajorList :majorData="majorData" />
			<HDivider :text="HDividerText" :isLoad="isLoad" />
		</view>

		<!-- #ifdef MP-BAIDU -->
		<!-- 悬浮客服按钮 -->
		<BtnSuspend />
		<!-- 关注提示 -->
		<Concern />
		<!-- #endif -->
	</view>
</template>

<script>
import MajorList from '@/components/list/MajorList.vue'
import { getMajorList } from '@/api/major.js'
import BtnSuspend from '@/components/library/BtnSuspend.vue'
import Concern from '@/components/library/Concern.vue'
import NavigationBarList from '@/components/library/NavigationBarList.vue'
import HDivider from '@/components/library/HDivider.vue'
export default {
	components: {
		MajorList,
		BtnSuspend,
		Concern,
		NavigationBarList,
		HDivider,
	},
	data() {
		return {
			majorData: [],
			page: 1,
			current: 0,
			ttid: 0,
			navigationBarTitleText: '中职专业',
			isLoad: false,
			HDividerText: '上职校网',
			tabs: [
				{
					name: '全部',
					id: 0,
				},
				{
					name: '农林牧渔',
					id: 29,
				},
				{
					name: '环境安全',
					id: 30,
				},
				{
					name: '能源材料',
					id: 31,
				},
				{
					name: '装备制造',
					id: 32,
				},
				{
					name: '生物化工',
					id: 33,
				},
				{
					name: '轻纺食品',
					id: 34,
				},
				{
					name: '交通运输',
					id: 35,
				},
				{
					name: '电子信息',
					id: 36,
				},
				{
					name: '医药卫生',
					id: 37,
				},
				{
					name: '财经商贸',
					id: 38,
				},
				{
					name: '旅游服务',
					id: 39,
				},
				{
					name: '文化艺术',
					id: 40,
				},
				{
					name: '新闻传播',
					id: 41,
				},
				{
					name: '教育体育',
					id: 42,
				},
				{
					name: '公共管理',
					id: 43,
				},
				{
					name: '土木水利',
					id: 44,
				},
				{
					name: '公安司法',
					id: 55,
				},
			],
		}
	},
	onShow() {
		this.setBdWebtate()
	},
	onLoad() {
		getMajorList().then(res => {
			this.majorData = res.data.rows
		})
	},

	methods: {
		changeTab(index) {
			this.page = 1
			this.HDividerText = '上职校网'
			this.ttid = this.tabs[index].id
			getMajorList(this.ttid).then(res => {
				this.majorData = res.data.rows
			})
			uni.pageScrollTo({
				scrollTop: 0,
			})
		},
		setBdWebtate() {
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '湖南中职学校中专专业一览表_职高技校专业种类大全 - 上职校网',
				keywords: '中专专业一览表,中专专业分类,中职学校专业目录,技校专业种类大全',
				description:
					'湖南中等职业学校专业目录大全及详细分类，包括中专学校、职业高中、技工院校等中职学校专业种类，每个专业都有详细的介绍，包括专业基本信息、专业课程说明、就业前景、就业方向以及相关学校等等内容。',
				articleTitle: '湖南中职学校中专专业一览表_职高技校专业种类大全 - 上职校网',
			})

			// #endif
		},
	},
	// 触底加载
	onReachBottom() {
		if (this.HDividerText === '我可是有底线的哦') return
		let page = ++this.page
		this.isLoad = true
		// 加载次数递加
		getMajorList(this.ttid, page).then(res => {
			this.isLoad = false
			if (res.data.rows.length > 0) {
				this.majorData.push(...res.data.rows)
			} else {
				this.HDividerText = '我可是有底线的哦'
				uni.showToast({
					title: '已没有更多了内容了!',
					icon: 'none',
					duration: 2000,
				})
			}
		})
	},
	// 下拉刷新
	onPullDownRefresh() {
		getMajorList(this.ttid).then(res => {
			this.listData = res.data.rows
			uni.stopPullDownRefresh()
		})
	},
}
</script>
<style lang="scss" scoped>
.list-box {
}
</style>
