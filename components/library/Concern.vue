<template>
	<view class="wrap-concern" :style="{ display: isFavor ? '' : 'block', bottom: bottom }">
		<view class="concern">
			<image
				@click="closeFn"
				class="close"
				src="../../static/images/other/concern-close.png"
				mode=""
			></image>
			<image class="logo" src="../../static/images/other/news-logo.png" mode=""></image>
			<view class="msg">{{ msg }}</view>

			<follow-swan
				class="follow-btn"
				type="none"
				@favorstatuschange="favorstatuschange"
			/>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isFavor: true,
		}
	},
	props: {
		bottom: {
			type: String,
			default: '10px',
		},
		msg: {
			type: String,
			default: '关注上职校,掌握学校最新动态',
		},
	},
	created() {
		this.isFavor = getApp().globalData.isFavor
	},
	methods: {
		closeFn() {
			getApp().globalData.isFavor = true
			this.isFavor = true
		},
		favorstatuschange(e) {
			if (e.detail && e.detail.isFavor === true) {
				getApp().globalData.isFavor = true
				this.isFavor = true
				console.log('关注状态：', e.detail.isFavor)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.wrap-concern {
	display: none;
	z-index: 9999;
	box-sizing: border-box;
	position: fixed;
	bottom: 60px;
	width: 100vw;
	height: 40px;
	padding: 0 15px;
}
.concern {
	border-radius: 50px;
	height: 40px;
	padding: 0 8px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	.close {
		flex-shrink: 0;
		width: 18px;
		height: 18px;
		display: block;
		margin: 0 6px 0 8px;
	}
	.logo {
		flex-shrink: 0;
		width: 30px;
		height: 30px;
		display: block;
	}
	.msg {
		width: 100%;
		padding: 0 8px;
		font-size: 12px;
		letter-spacing: 0.5px;
		color: #fff;
		@include textEllipsis(1);
	}
	.follow-btn {
		position: static;
		white-space: nowrap;
		flex-shrink: 0;
		display: block;
		padding: 0;
		width: 70px;
		height: 30px;
		line-height: 30px;
		box-sizing: border-box;
		border-radius: 50px;
		background-color: $szx-color-primary;
		color: #fff;
		border: 0;
		font-size: 14px;
		text-align: center;
		&::after {
			display: none;
		}
	}
}
</style>
