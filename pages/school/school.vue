<template>
	<view class="container">
		<view class="">
			<NavigationBarList :navigationBarTitleText="navigationBarTitleText" tbname="pt" />
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
			<SchoolList :schoolData="schoolData" />
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
import SchoolList from '@/components/list/SchoolList.vue'
import { getSchoolList } from '@/api/school.js'
import NavigationBarList from '@/components/library/NavigationBarList.vue'
import BtnSuspend from '@/components/library/BtnSuspend.vue'
import Concern from '@/components/library/Concern.vue'
import HDivider from '@/components/library/HDivider.vue'
export default {
	components: {
		SchoolList,
		BtnSuspend,
		Concern,
		NavigationBarList,
		HDivider,
	},
	data() {
		return {
			schoolData: [],
			page: 1,
			current: 0,
			classid: 7,
			navigationBarTitleText: '中职学校',
			HDividerText: '上职校网',
			isLoad: false,
			tabs: [
				{
					name: '全部',
					id: 7,
				},
				{
					name: '长沙',
					id: 13,
				},
				{
					name: '株洲',
					id: 14,
				},
				{
					name: '湘潭',
					id: 15,
				},
				{
					name: '衡阳',
					id: 16,
				},
				{
					name: '邵阳',
					id: 17,
				},
				{
					name: '岳阳',
					id: 18,
				},
				{
					name: '常德',
					id: 19,
				},
				{
					name: '益阳',
					id: 21,
				},
				{
					name: '郴州',
					id: 22,
				},
				{
					name: '永州',
					id: 23,
				},
				{
					name: '怀化',
					id: 24,
				},
				{
					name: '娄底',
					id: 25,
				},
				{
					name: '湘西',
					id: 26,
				},
				{
					name: '张家界',
					id: 20,
				},
			],
		}
	},
	onShow() {
		this.setBdWebtate()
	},
	onLoad() {
		getSchoolList().then(res => {
			this.schoolData = res.data.rows
		})
	},

	methods: {
		changeTab(index) {
			this.page = 1
			this.HDividerText = '上职校网'
			this.classid = this.tabs[index].id
			getSchoolList(this.classid).then(res => {
				this.schoolData = res.data.rows
			})
			uni.pageScrollTo({
				scrollTop: 0,
			})
		},
		setBdWebtate() {
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '湖南中职中专学校排名榜_湖南职高技校一览表  -  上职校网',
				keywords:
					'湖南中职学校排名榜,湖南中等职业学校排名,湖南中职学校有哪些,湖南中职学校一览表,湖南中等职业技术学校,湖南职业中等专业学校',
				description:
					'湖南中职学校有哪些？本站收集了湖南各个地区的中等职业技术专业学校，并整理成了湖南中职学校一览表，和湖南中专、职高、技校等不同类型中等专业学校排名榜，而且每个学校都有详细且图文并茂的介绍。',
				articleTitle: '湖南中职中专学校排名榜_湖南职高技校一览表  -  上职校网',
			})
			// #endif
		},
	},
	// 触底加载
	onReachBottom() {
		if (this.HDividerText === '我可是有底线的哦') return
		let page = ++this.page
		// 加载次数递加
		this.isLoad = true
		getSchoolList(this.classid, page).then(res => {
			this.isLoad = false
			if (res.data.rows.length > 0) {
				this.schoolData.push(...res.data.rows)
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
		getSchoolList(this.classid).then(res => {
			this.schoolData = res.data.rows
			uni.stopPullDownRefresh()
		})
	},
}
</script>

<style lang="scss" scoped>
.list-box {
}
</style>
