<template>
	<view class="container">
		<view class="">
			<NavigationBarList :navigationBarTitleText="navigationBarTitleText" tbname="news" />
		</view>
		<!-- tab栏 -->
		<v-tabs
			v-model="currentIndex"
			padding="0 0 2px 0"
			field="label"
			fixed
			activeColor="#0092ff"
			lineColor="#0092ff"
			:tabs="tabs"
			@change="clickTab"
		></v-tabs>
		<template v-if="currentIndex === 3">
			<view class="">
				<v-tabs
					:containerItemClassName="`v-tabs-b`"
					class="v-tabs-b"
					v-model="childrenIndex"
					:tabs="tabs[3].children"
					field="label"
					fixed
					:pills="true"
					pillsBorderRadius="50rpx"
					activeColor="#fff"
					pillsColor="#0092ff"
					@change="childrenClickTab"
				></v-tabs>
			</view>
		</template>

		<!-- 新闻列表 -->
		<view class="list-box">
			<NewsList :newsData="newsData" />
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
import { getClassInfo } from '@/api/other.js'
import { getNewsList } from '@/api/news.js'
import NewsList from '@/components/list/NewsList.vue'
import BtnSuspend from '@/components/library/BtnSuspend.vue'
import Concern from '@/components/library/Concern.vue'
import classInfoData from '@/config/classInfoData.js'
import NavigationBarList from '@/components/library/NavigationBarList.vue'
import HDivider from '@/components/library/HDivider.vue'
export default {
	components: {
		NewsList,
		BtnSuspend,
		Concern,
		NavigationBarList,
		HDivider,
	},
	data() {
		return {
			newsData: [],
			page: 1,
			currentIndex: 0,
			currentClassId: 0,
			childrenIndex: 0,
			HDividerText: '上职校网',
			isLoad: false,
			navigationBarTitleText: '中职资讯',
			tabs: [
				{
					id: 0,
					label: '全部',
				},
				{
					id: 4,
					label: '择校攻略',
				},
				{
					id: 9,
					label: '选专业攻略',
				},
				{
					id: 10,
					label: '地方资讯',
					children: [
						{
							id: 10,
							label: '全部',
						},
						{
							id: 41,
							label: '湖南',
						},
						{
							id: 27,
							label: '长沙',
						},
						{
							id: 28,
							label: '株洲',
						},
						{
							id: 29,
							label: '湘潭',
						},
						{
							id: 30,
							label: '衡阳',
						},
						{
							id: 31,
							label: '邵阳',
						},
						{
							id: 32,
							label: '岳阳',
						},
						{
							id: 33,
							label: '常德',
						},
						{
							id: 34,
							label: '张家界',
						},
						{
							id: 35,
							label: '益阳',
						},
						{
							id: 36,
							label: '郴州',
						},
						{
							id: 37,
							label: '永州',
						},
						{
							id: 38,
							label: '怀化',
						},
						{
							id: 39,
							label: '娄底',
						},
						{
							id: 40,
							label: '湘西',
						},
					],
				},
				{
					id: 11,
					label: '职校百科',
				},
				{
					id: 12,
					label: '政策解读',
				},
			],
		}
	},
	onShow() {
		this.setBdWebtate()
	},
	onLoad(q) {
		if (q.classid) {
			this.tabs.forEach((v, i) => {
				if (v.id == q.classid) {
					this.currentIndex = i
				}
			})
			this.clickTab(this.currentIndex)
		} else {
			getNewsList().then(res => {
				// this.newsData['classid' + this.currentClassId] = res.data.rows
				// this.$set(this.newsData, 'classid' + this.currentClassId, res.data.rows)
				// console.log(this.newsData.classid0)
				this.newsData = res.data.rows
			})
		}
	},
	methods: {
		clickTab(index) {
			this.page = 1
			this.HDividerText = '上职校网'
			this.currentClassId = this.tabs[index].id
			this.childrenIndex = 0
			// let curObjKey = this.newsData['classid' + this.currentClassId]

			getNewsList(this.currentClassId).then(res => {
				// console.log(`this.newsData${this.currentClassId}`)
				// let currentData = 'newsData' + this.currentClassId
				// console.log(this[currentData])
				// this.$set(this.newsData, 'classid' + this.currentClassId, res.data.rows)
				this.newsData = res.data.rows
			})

			uni.pageScrollTo({
				scrollTop: 0,
			})
		},
		childrenClickTab(index) {
			this.page = 1
			this.currentClassId = this.tabs[3].children[index].id
			getNewsList(this.currentClassId).then(res => {
				this.newsData = res.data.rows
			})

			uni.pageScrollTo({
				scrollTop: 0,
			})
		},
		setBdWebtate() {
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '湖南中职中专信息资讯_职高技校相关新闻 - 上职校网',
				keywords: '中职信息资讯,技校相关新闻',
				description:
					'本栏目发布湖南地区各个地级市、县中职学校的相关信息资讯和新闻，涵盖了中专、职高职中、技工学校、五年制大专等地域类行业信息。',
				articleTitle: '湖南中职中专信息资讯_职高技校相关新闻 - 上职校网',
			})

			for (let v of classInfoData) {
				if (v.classid == this.currentClassId) {
					swan.setPageInfo({
						title: v.bname + ' - 上职校网',
						keywords: v.classpagekey,
						description: v.intro,
						articleTitle: v.bname + ' - 上职校网',
						image: ['https://www.shangzhixiao.com/module/images/cont/logo.png'],
					})

					break
				}
			}

			// #endif
		},
	},
	// 触底加载
	onReachBottom() {
		if (this.HDividerText === '我可是有底线的哦') return
		let page = ++this.page
		this.isLoad = true
		// 加载次数递加
		getNewsList(this.currentClassId, page).then(res => {
			this.isLoad = false
			if (res.data.rows.length > 0) {
				this.newsData.push(...res.data.rows)
				// this.$set(this.newsData, 'classid' + this.currentClassId, res.data.rows)
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
		getNewsList(this.currentClassId).then(res => {
			// this.$set(this.newsData, 'classid' + this.currentClassId, res.data.rows)
			this.newsData = res.data.rows
			uni.stopPullDownRefresh()
		})
	},
}
</script>

<style lang="scss" scoped>
.container {
	background-color: #f9f9f9;
}
/deep/ .v-tabs-b {
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	.v-tabs__container-pills {
		height: 20px !important;
	}
}

.list-box {
	background-color: #f9f9f9;
}
</style>
