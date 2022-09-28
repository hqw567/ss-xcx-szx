<template>
	<view class="">
		<view class="class-tit">
			<text class="tit">{{ tit }}</text>
			<view @click="onMore()" class="more">
				更多
				<image class="img" src="../../static/images/other/more.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'ClassTitle',
	props: {
		tit: {
			type: String,
			default: '加载中...',
		},
		path: {
			type: String,
			default: 'pages/index/index',
		},
	},
	methods: {
		onMore() {
			uni.switchTab({
				url: this.path,
			})
		},
	},
}
</script>

<style scoped lang="scss">
.class-tit {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	border-bottom: 1px solid #ebebeb;
	// margin: 0 20px;
	position: relative;
	.tit {
		position: relative;
		font-size: 18px;
		font-weight: 700;
		color: #000;

		&::after {
			display: block;
			position: absolute;
			bottom: 2px;
			left: 0;
			z-index: -1;
			content: '';
			width: 100%;
			height: 5px;
			background: #0091ff7d;
		}
	}

	.more {
		font-size: 16px;
		color: #b5b1b1;

		.img {
			margin-left: 3px;
			width: 12px;
			height: 12px;
		}
	}
}
</style>
