<template>
	<view class="box">
		<view class="perch" :style="perchStyle"></view>
		<view class="warp-box" :style="warpBoxStyle">
			<view class="content-box" :style="navContentStyle">
				<navigator :url="`/pages/search/search?tbname=${tbname}`">
					<image
						src="../../static/images/other/search.svg"
						mode="aspectFill"
						class="ico"
					></image>
				</navigator>
				<view class="title" :style="titleStyle">{{ navigationBarTitleText }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		navigationBarTitleText: {
			type: String,
			default: '上职校网',
		},
		tbname: {
			type: String,
			default: 'news',
		},
	},
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
				padding: `${this.menuButtonInfo.top}px 15px 8px 15px`,
			}
		},
		navContentStyle() {
			return {
				height: this.menuButtonInfo.height + 'px',
			}
		},
		titleStyle() {
			return {
				padding: `0 ${this.menuButtonInfo.width + 15}px`,
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
.content-box {
	height: 32px;
	display: flex;
	align-items: center;
	position: relative;
	.title {
		position: fixed;
		width: 100vw;
		left: 0;
		box-sizing: border-box;
		@include textEllipsis(1);

		font-size: 16px;
		font-weight: 700;
		padding: 0 100px;
		text-align: center;
	}

	.ico {
		position: relative;
		z-index: 99999;
		display: block;
		width: 20px;
		height: 20px;
		margin-left: 10px;
	}
}
</style>
