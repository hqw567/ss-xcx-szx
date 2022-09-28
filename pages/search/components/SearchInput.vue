<template>
	<view class="wrap-box-search">
		<view class="wrap-search">
			<input
				class="ipt-search"
				type="text"
				v-model="value"
				placeholder="搜资讯/学校/专业"
				confirm-type="search"
				@confirm="keycomfirm"
				placeholder-class="ipt-search-place"
			/>
			<button class="search-btn" @click="searchSubmit">搜索</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			tbname: 'news',
		}
	},
	props: ['keyword'],
	created() {
		this.value = this.keyword
	},
	methods: {
		keycomfirm() {
			this.searchSubmit()
		},
		searchSubmit() {
			if (!this.value.trim()) return
			uni.navigateTo({
				url: `/pages/search/list/list?keyboard=${this.value.trim()}&tbname=${
					this.tbname
				}`,
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.wrap-box-search {
	background-color: #fff;
	padding: 10px 15px;
}
.wrap-search {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border: 1px solid #ebebeb;
	height: 34px;
	overflow: hidden;
	padding-right: 0;
	border-radius: 999px;
	background-color: #f6f6f6;

	.ipt-search {
		color: #000;
		height: 24px;
		padding: 10px 20px;
		width: 100%;
		font-size: 14px;
		line-height: 24px;
	}
	.ipt-search-place {
		color: #8a919f;
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
</style>
