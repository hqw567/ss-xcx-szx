<template>
	<view class="search-container">
		<view class="search-box">
			<picker :value="index" :range="array" @change="bindPickerChange">
				<view class="select">
					<view class="picker select-tit">{{ array[index] }}</view>
					<image src="@/static/images/other/arrow-down.png" mode="" class="img"></image>
				</view>
			</picker>
			<input
				class="search-input"
				type="text"
				v-model="value"
				confirm-type="search"
				placeholder="请输入搜索关键词"
				@confirm="bindKeycomfirm"
				placeholder-class="placeholderclass"
			/>
			<view class="submit-btn" @click="hotSubmit">搜索</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			array: ['资讯', '学校', '专业'],
			index: 0,
			value: '',
		}
	},
	props: {
		selectIndex: {
			default: 0,
		},
	},
	created() {
		if (this.selectIndex) this.index = this.selectIndex

		// console.log(this.index)
	},
	methods: {
		bindPickerChange(e) {
			this.index = e.detail.value
		},
		bindKeycomfirm(e) {
			this.hotSubmit()
		},
		hotSubmit() {
			if (!this.value.trim()) return
			let tbname
			if (this.index === 0) {
				tbname = 'news'
			} else if (this.index === 1) {
				tbname = 'pt'
			} else {
				tbname = 'pz'
			}

			uni.redirectTo({
				url: `/pages/search/list/list?keyboard=${this.value.trim()}&tbname=${tbname}&selectindex=${
					this.index
				}`,
			})

			this.value = ''
		},
	},
}
</script>

<style lang="scss" scoped>
.search-container {
	background-color: #fff;
	padding: 10px 15px;
}
.search-box {
	box-sizing: border-box;
	border-radius: 50px;
	background-color: #f3f4f6;
	display: flex;
	height: 30px;
	align-items: center;
	font-size: 14px;
	overflow: hidden;

	.select {
		display: flex;
		align-items: center;
		height: 50px;
		padding-left: 10px;
		width: 50px;
		.img {
			display: inline-block;
			width: 16px;
			height: 16px;
		}
	}
}

.submit-btn {
	padding: 0 10px;
	height: 50px;
	white-space: nowrap;
	line-height: 50px;
	background-color: #0092ff;
	color: #fff;
}

.search-input {
	width: 100%;
	padding: 0 12px;
	font-size: 14px;
	color: #000;
}

/deep/ .placeholderclass {
	color: #8590a6;
}
</style>
