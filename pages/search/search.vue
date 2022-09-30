<template>
	<view class="container-search" :style="{ background: !isSearch ? '#fff' : '' }">
		<view class="wrap-st-searh-perch "></view>
		<view class="wrap-st-searh">
			<view class="wrap-box-search">
				<view class="wrap-search" :class="{ focus: focusState }">
					<input
						:focus="focusState"
						@blur="focusState = false"
						@focus="focusState = true"
						class="ipt-search"
						type="text"
						v-model="value"
						placeholder="请输入搜索关键词"
						confirm-type="search"
						@confirm="tbnameWwitch(tbname)"
						placeholder-style="color:#8a919f;"
					/>
					<image
						v-if="value.length > 0"
						@click="value = ''"
						class="img"
						src="../../static/images/other/input-close.png"
						mode=""
					></image>
					<view class="search-btn" @click="tbnameWwitch(tbname)">搜索</view>
				</view>
			</view>
			<view class="wrap-search-type">
				<view
					class="item"
					:class="{ active: tbname === 'news' }"
					@click="tbnameWwitch('news')"
				>
					搜资讯
				</view>
				<view
					class="item"
					:class="{ active: tbname === 'pt' }"
					@click="tbnameWwitch('pt')"
				>
					搜学校
				</view>
				<view
					class="item"
					:class="{ active: tbname === 'pz' }"
					@click="tbnameWwitch('pz')"
				>
					搜专业
				</view>
			</view>
		</view>
		<view class="" v-if="!isSearch">
			<HotSearch
				:tbname="tbname"
				:noContent="noContent"
				@toSearchFn="toSearchFn"
				@toChangeType="toChangeType"
			/>
		</view>
		<view class="search-list" v-if="isSearch">
			<template v-if="newsData && newsData.length">
				<NewsList :newsData="newsData" />
			</template>
			<template v-if="majorData && majorData.length">
				<MajorList :majorData="majorData" />
			</template>
			<template v-if="schoolData && schoolData.length">
				<SchoolList :schoolData="schoolData" />
			</template>
			<HDivider :text="HDividerText" :isLoad="isLoad" />
		</view>
	</view>
</template>

<script>
import HotSearch from '@/pages/search/components/HotSearch.vue'
import { getSearch } from '@/api/other.js'
import NewsList from '@/components/list/NewsList.vue'
import MajorList from '@/components/list/MajorList.vue'
import SchoolList from '@/components/list/SchoolList.vue'
import HDivider from '@/components/library/HDivider.vue'
export default {
	data() {
		return {
			value: '',
			newsData: [],
			majorData: [],
			schoolData: [],
			page: 1,
			isEmpty: false,
			tbname: 'news',
			keyboard: '',
			isSearch: false,
			noContent: '',
			focusState: true,
			HDividerText: '上职校网',
			isLoad: false,
		}
	},
	components: {
		NewsList,
		MajorList,
		SchoolList,
		HotSearch,
		HDivider,
	},
	onLoad(e) {
		if (e.tbname) this.tbname = e.tbname
		if (e.keyboard) {
			this.value = e.keyboard
			this.getSearchFn()
		}
	},
	methods: {
		toSearchFn(v, tbname = 'news') {
			this.value = v
			this.tbnameWwitch(tbname)
		},
		toChangeType(tbname) {
			this.tbnameWwitch(tbname)
		},
		tbnameWwitch(v) {
			this.tbname = v

			this.isEmpty = false
			this.newsData = []
			this.majorData = []
			this.schoolData = []
			this.page = 1
			this.HDividerText = '上职校网'
			this.getSearchFn()
		},
		getSearchFn() {
			uni.pageScrollTo({
				scrollTop: 0,
			})
			if (!this.value.trim()) {
				this.isSearch = false
				uni.showToast({
					title: '请输入搜索内容',
					icon: 'none',
					duration: 2000,
				})
				return
				uni.setBackgroundColor({
					backgroundColor: '#fff',
				})
			}
			getSearch(this.value, this.page, 10, this.tbname).then(res => {
				if (res.data.rows && res.data.rows.length === 0) {
					this.isEmpty = true
					this.isSearch = false
					this.noContent = this.value
					return
				}
				this.isSearch = true
				let searchHistory = []
				try {
					const value = uni.getStorageSync('SEARCH_HISTORY')
					if (value) {
						searchHistory = value
					}
				} catch (e) {
					console.warn('searchHistory:', e)
				}
				searchHistory.push(this.value)
				uni.setStorage({
					key: 'SEARCH_HISTORY',
					data: [...new Set(searchHistory)],
					success: function() {
						console.log('success')
					},
				})

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
	computed: {
		TipWordFn() {
			let tbname = this.tbname
			if (tbname === 'news') {
				return '资讯'
			}
			if (tbname === 'pt') {
				return '学校'
			} else {
				return '专业'
			}
		},
		searchTip() {
			let tbname = this.tbname
			let restType = []
			if (tbname === 'news') {
				restType = [
					{
						tbname: 'pt',
						label: '学校',
					},
					{
						tbname: 'pz',
						label: '专业',
					},
				]
			}
			if (tbname === 'pt') {
				restType = [
					{
						tbname: 'news',
						label: '资讯',
					},
					{
						tbname: 'pz',
						label: '专业',
					},
				]
			} else {
				restType = [
					{
						tbname: 'news',
						label: '资讯',
					},
					{
						tbname: 'pt',
						label: '学校',
					},
				]
			}
			return `暂时没有关于<text style="color: crimson;">  ${this.noContent}  </text>
			的内容，请尝试搜索<text style="color: #0092ff;" @click="toChangeType(${
				restType[0].tbname
			})">${
				restType[0].label
			}</text>、<text style="color: #0092ff;" @click="toChangeType(${
				restType[1].tbname
			})">${restType[1].label}</text>试试，或者换个关键词搜索吧！`
		},
	},
	// 触底加载
	onReachBottom() {
		if (!this.isSearch) {
			return
		}
		if (this.HDividerText === '我可是有底线的哦') return
		this.isLoad = true
		let page = ++this.page
		// 加载次数递加
		getSearch(this.value, this.page, 10, this.tbname).then(res => {
			this.isLoad = false
			if (this.tbname === 'news') {
				if (res.data.rows.length > 0) {
					this.newsData.push(...res.data.rows)
				} else {
					this.HDividerText = '我可是有底线的哦'
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
					this.HDividerText = '我可是有底线的哦'
					uni.showToast({
						title: '已没有更多了内容了!',
						icon: 'none',
						duration: 2000,
					})
				}
			} else {
				this.HDividerText = '我可是有底线的哦'
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

<style lang="scss" scoped>
.wrap-st-searh-perch {
	height: 55px;
}
.wrap-box-search {
	position: fixed;
	z-index: 999999999;
	width: 100vw;
	left: 0;
	top: 0;
	/* #ifdef H5 */
	top: 44px;
	/* #endif */
}
.search-tip {
	font-size: 16px;
	padding: 10px 20px;
}
.container-search {
	width: 100vw;
	min-height: 100vh;
}
.wrap-box-search {
	box-sizing: border-box;
	background-color: #fff;
	padding: 10px 15px;
}
.wrap-search {
	position: relative;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border: 1px solid #ebebeb;
	height: 34px;
	overflow: hidden;
	padding-right: 0;
	border-radius: 999px;
	background-color: #f6f6f6;
	transition: all 0.5s;
	&.focus {
		border: 1px solid $szx-color-primary;
	}
	.img {
		display: block;
		position: absolute;
		top: 50%;
		right: 80px;
		transform: translateY(-50%);
		width: 18px;
		height: 18px;
	}
	.ipt-search {
		box-sizing: border-box;
		color: #000;
		height: 24px;
		padding: 0px 20px;
		width: 100%;
		font-size: 14px;
		line-height: 24px;
	}
	.search-btn {
		color: #fff;
		background-color: $szx-color-primary;
		margin-left: 12px;
		width: 65px;
		height: 100%;
		border-radius: 0;
		line-height: 32px;
		display: block;
		flex-shrink: 0;
		text-align: center;
		font-size: 14px;
		white-space: nowrap;
	}
}
.search-list {
}
.wrap-search-type {
	display: flex;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
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
