<template>
	<view class="">
		<view class="perch"></view>
		<view class="container">
			<navigator class="home min-btn" url="/pages/home/home" open-type="switchTab">
				<image src="@/static/images/other/home.png" class="img"></image>
				<text>首页</text>
			</navigator>
			<button class="share min-btn" open-type="share">
				<image src="../../static/images/other/share.png" mode="" class="img"></image>
				<text>分享</text>
			</button>
			<view class="phone min-btn" @click="onPhone">
				<image src="../../static/images/other/phone.png" class="img"></image>
				<text>电话</text>
			</view>
			<button class="consult btn" open-type="contact">
				<text>咨询</text>
				<image src="../../static/images/other/consult.png" class="img"></image>
			</button>
			<navigator
				:url="`/pages/form/form?schoolName=${schoolName}&majorName=${majorName}`"
				class="apply btn"
			>
				<text>报名</text>
				<image src="../../static/images/other/apply.png" class="img"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
import { phone } from '@/config/config.js'
export default {
	name: 'DetailsSuspend',
	data() {
		return {}
	},
	props: {
		schoolName: {
			type: String,
			default: '',
		},
		majorName: {
			type: String,
			default: '',
		},
	},
	created() {},
	methods: {
		onPhone() {
			uni.makePhoneCall({
				phoneNumber: phone,
				success: function() {
					console.log('拨打电话成功')
				},
				fail() {
					console.log('打电话失败了')
				},
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.perch {
	height: 50px;
	width: 100%;
}
.container {
	box-sizing: border-box;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-around;
	bottom: 0;
	left: 0;
	margin: 0;
	padding: 0 20px;
	width: 100%;
	height: 50px;
	background-color: #f8f8f8;

	.min-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 2;
		font-size: 12px;
		color: #707070;

		.img {
			margin-bottom: 4px;
			width: 16px;
			height: 16px;
		}
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 4%;
		flex: 4;
		height: 60%;
		text-align: center;
		background: #ff416c;
		background: linear-gradient(to right, #ff4b2b, #ff416c);
		border-radius: 50px;
		color: #fff;
		font-size: 14px;

		&.consult {
			background: #f2994a;
			background: linear-gradient(to top, #f2c94c, #f2994a);
		}

		.img {
			margin-left: 5px;
			width: 16px;
			height: 16px;
		}
	}
}
</style>
