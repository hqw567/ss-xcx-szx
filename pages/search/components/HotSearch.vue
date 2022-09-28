<template>
	<view class="warp-list">
		<view class="search-tip unify-list" v-if="noContent">
			<view class="tit">提示</view>
			<view class="">
				暂时没有关于
				<text style="color: crimson;">{{ ' ' + noContent + ' ' }}</text>
				的内容，请尝试
				<template v-if="searchTipType.length">
					<text style="color: #0092ff;" @click="toChangeType(searchTipType[0].tbname)">
						{{ searchTipType[0].label }}
					</text>
					、
					<text style="color: #0092ff;" @click="toChangeType(searchTipType[1].tbname)">
						{{ searchTipType[1].label }}
					</text>
				</template>
				，或者换个关键词搜索吧！
			</view>
		</view>
		<view
			class="history-list unify-list"
			:style="{ display: isDeleteHistory ? 'none' : '' }"
			v-if="searchHistory.length"
		>
			<view class="history-tit">
				<view class="tit">搜索历史</view>
				<view class="delete-history" @click="deleteHistory">
					<image
						class="img"
						src="../../../static/images/other/delete-history.png"
						mode=""
					></image>
				</view>
			</view>
			<view class="history-box ">
				<view
					class="item"
					v-for="(item, i) in searchHistory"
					:key="i"
					@click="toSearchFn(item)"
				>
					{{ item }}
				</view>
			</view>
		</view>
		<view class="hot-list unify-list" v-if="listHot && listHot.length">
			<view class="tit">热门搜索</view>
			<view class="hot-box">
				<view
					class="item"
					v-for="(item, i) in listHot"
					:key="i"
					@click="toSearchFn(item.keyboard, item.tbname)"
				>
					<text class="num">{{ i + 1 }}</text>
					{{ item.keyboard }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getHotSearch } from '@/api/other.js'
export default {
	name: 'hotSearch',
	props: {
		tbname: {
			type: String,
			default: 'news',
		},
		noContent: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			listHot: [],
			isDeleteHistory: false,
			searchHistory: [],
		}
	},
	created() {
		let _this = this
		getHotSearch().then(({ data }) => {
			this.listHot = data
		})
		uni.getStorage({
			key: 'SEARCH_HISTORY',
			success: res => {
				this.searchHistory = res.data
			},
		})
	},
	methods: {
		deleteHistory() {
			this.isDeleteHistory = true
			uni.removeStorage({
				key: 'SEARCH_HISTORY',
				success: function(res) {
					console.log('success')
				},
			})
		},
		toSearchFn(v, tbname) {
			this.$emit('toSearchFn', v, tbname)
		},
		toChangeType(tbname) {
			this.$emit('toChangeType', tbname)
		},
	},
	computed: {
		searchTipType() {
			let tbname = this.tbname
			if (tbname === 'news') {
				return [
					{
						tbname: 'pt',
						label: '搜学校',
					},
					{
						tbname: 'pz',
						label: '搜专业',
					},
				]
			}
			if (tbname === 'pt') {
				return [
					{
						tbname: 'news',
						label: '搜资讯',
					},
					{
						tbname: 'pz',
						label: '搜专业',
					},
				]
			} else {
				return [
					{
						tbname: 'news',
						label: '搜资讯',
					},
					{
						tbname: 'pt',
						label: '搜学校',
					},
				]
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.warp-list {
}
.unify-list {
	padding: 8px 20px;
	margin-top: 15px;
	.tit {
		display: flex;
		align-items: center;
		font-size: 16px;
		color: #1a1a1a;
		margin-bottom: 15px;
		&:before {
			content: '';
			width: 4px;
			height: 12px;
			border-radius: 5px;
			margin-right: 4px;
			display: block;
			background-color: $szx-color-primary;
		}
	}

	.history-tit {
		display: flex;
		justify-content: space-between;
		.img {
			width: 18px;
			height: 18px;
			display: block;
		}
	}
	.history-box {
		display: flex;
		flex-wrap: wrap;
		margin-top: -14px;
		overflow: hidden;
		$gpadding: 30px;
		.item {
			@include textEllipsis(1);

			max-width: calc(100% - #{$gpadding});
			font-size: 13px;
			padding: 4px 15px;
			margin-right: 12px;
			margin-top: 14px;
			border-radius: 50px;
			background-color: #ececef;
			color: #868897;
		}
	}
	.hot-box {
		font-size: 16px;
		color: #181818;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.num {
			display: inline-block;
			width: 20px;
			font-size: 15px;
			font-weight: 700;
			margin-right: 4px;
			color: #bfbfbf;
		}

		.item:nth-child(-n + 3) .num {
			color: #ff942d;
		}

		.item {
			@include textEllipsis(1);
			flex: 48%;
			margin-bottom: 15px;
			box-sizing: border-box;
		}
	}
}
</style>
