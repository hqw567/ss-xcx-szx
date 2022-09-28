<template>
	<view class="">
		<view class=""><SearchInput :keyword="keyboard" /></view>
		<view class="wrap-search-type">
			<view
				class="item"
				:class="{ active: tbname === 'news' }"
				@click="tbnameWwitch('news')"
			>
				搜资讯
			</view>
			<view class="item" :class="{ active: tbname === 'pt' }" @click="tbnameWwitch('pt')">
				搜学校
			</view>
			<view class="item" :class="{ active: tbname === 'pz' }" @click="tbnameWwitch('pz')">
				搜专业
			</view>
		</view>
		<view class="search-list" v-if="!isEmpty">
			<template v-if="newsData && newsData.length">
				<NewsList :newsData="newsData" />
			</template>
			<template v-if="majorData && majorData.length">
				<MajorList :majorData="majorData" />
			</template>
			<template v-if="schoolData && schoolData.length">
				<SchoolList :schoolData="schoolData" />
			</template>
		</view>
		<view class="" v-else>暂无内容</view>
	</view>
</template>

<script>
import SearchInput from '@/pages/search/components/SearchInput.vue'
import { getSearch } from '@/api/other.js'
import NewsList from '@/components/list/NewsList.vue'
import MajorList from '@/components/list/MajorList.vue'
import SchoolList from '@/components/list/SchoolList.vue'
export default {
	data() {
		return {
			newsData: [],
			majorData: [],
			schoolData: [],
			page: 1,
			isEmpty: false,
			tbname: 'news',
			keyboard: '',
		}
	},
	components: {
		SearchInput,
		NewsList,
		MajorList,
		SchoolList,
	},
	onLoad(e) {
		if (e.tbname) this.tbname = e.tbname
		if (e.keyboard) {
			this.keyboard = e.keyboard
		}
		this.getSearchFn()
	},
	methods: {
		tbnameWwitch(v) {
			this.isEmpty = false
			this.newsData = []
			this.majorData = []
			this.schoolData = []
			this.tbname = v
			this.page = 1
			this.getSearchFn()
		},
		getSearchFn() {
			getSearch(this.keyboard, this.page, 10, this.tbname).then(res => {
				if (res.data.rows && res.data.rows.length === 0) {
					this.isEmpty = true
					return
				}
				if (this.tbname === 'news') {
					this.newsData = res.data.rows
				} else if (this.tbname === 'pz') {
					this.majorData = res.data.rows
				} else {
					this.schoolData = res.data.rows
				}
			})
		},
	},
	// 触底加载
	onReachBottom() {
		let page = ++this.page
		// 加载次数递加
		getSearch(this.keyboard, this.page, 10, this.tbname).then(res => {
			if (this.tbname === 'news') {
				if (res.data.rows.length > 0) {
					this.newsData.push(...res.data.rows)
				} else {
					uni.showToast({
						title: '已没有更多了内容了!',
						icon: 'none',
						duration: 2000,
					})
				}
			} else if (this.tbname === 'pz') {
				this.majorData = res.data.rows
				if (res.data.rows.length > 0) {
					this.majorData.push(...res.data.rows)
				} else {
					uni.showToast({
						title: '已没有更多了内容了!',
						icon: 'none',
						duration: 2000,
					})
				}
			} else {
				if (res.data.rows.length > 0) {
					this.schoolData.push(...res.data.rows)
				} else {
					uni.showToast({
						title: '已没有更多了内容了!',
						icon: 'none',
						duration: 2000,
					})
				}
			}
		})
	},
}
</script>

<style lang="scss">
.search-list {
	padding-bottom: 50px;
}
.wrap-search-type {
	display: flex;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	margin-bottom: 15px;
	.item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		font-size: 15px;
		letter-spacing: 0.5px;
		color: #222;
		&.active {
			color: $szx-color-primary;
			font-weight: 700;
		}
	}
}
</style>
