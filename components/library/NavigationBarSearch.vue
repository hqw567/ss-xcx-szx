<template>
	<view class="box">
		<view class="perch" :style="perchStyle"></view>
		<view class="warp-box" :style="warpBoxStyle">
			<view class="nav-search" :style="navSearchStyle">
				<image class="logo" src="@/static/images/other/logo.png" mode=""></image>
				<navigator url="/pages/search/search" class="input">
					<image
						src="../../static/images/other/search.svg"
						mode="aspectFill"
						class="ico"
					></image>
					<view class="tit"><text class="item">搜一搜</text></view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			menuButtonInfo: {},
		}
	},
	created() {
		this.menuButtonInfo = getApp().globalData.menuButtonInfo
	},
	computed: {
		perchStyle() {
			return { height: this.menuButtonInfo.top + this.menuButtonInfo.height + 8 + 'px' }
		},
		warpBoxStyle() {
			return {
				padding: `${this.menuButtonInfo.top}px ${this.menuButtonInfo.width +
					10}px 8px 15px`,
			}
		},
		navSearchStyle() {
			return {
				height: this.menuButtonInfo.height + 'px',
			}
		},
	},
}
</script>

<style scoped lang="scss">
.perch {
	height: 44px;
}
.warp-box {
	box-sizing: border-box;
	background-color: #fff;
	position: fixed;
	z-index: 99999;
	top: 0;
	left: 0;
	width: 100vw;
	padding: 6px 15px;
}
.nav-search {
	height: 32px;
	display: flex;
	align-items: center;
	.logo {
		flex-shrink: 0;
		display: block;
		height: 100%;
		width: 92px;
	}
	.input {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		padding: 0 10px;
		margin: 0 10px;
		background-color: #f6f6f6;
		font-size: 14px;
		color: #999;
	}
	.tit {
		.item {
			@include textEllipsis(1);
		}
	}
	.ico {
		display: block;
		width: 14px;
		height: 14px;
		margin-right: 5px;
	}
}
</style>
