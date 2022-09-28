<template>
	<view class="viewider" :style="{ margin: margin, padding: padding }">
		<view class="line"></view>
		<view class="text">
			<view class="spinner" v-if="isLoad">
				<view class="rect1"></view>
				<view class="rect2"></view>
				<view class="rect3"></view>
				<view class="rect4"></view>
				<view class="rect5"></view>
			</view>
			<view v-else>{{ text }}</view>
		</view>
		<view class="line"></view>
	</view>
</template>
<script>
export default {
	name: 'Hviewider',
	props: {
		isLoad: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			default: '上职校网',
		},
		margin: {
			type: String,
			default: '',
		},
		padding: {
			type: String,
			default: '20px 40px',
		},
	},
}
</script>
<style lang="scss" scoped>
.viewider {
	display: flex;
	align-items: center;
}
.line {
	width: 100%;
	border-bottom: 1px solid #ced5d8;
	color: red;
}
.text {
	display: flex;
	align-items: center;
	white-space: nowrap;
	color: #909399;
	font-size: 14px;
	margin: 0 15px;
}
.spinner {
	width: 40px;
	height: 30px;
	text-align: center;
	font-size: 10px;
}

.spinner > view {
	background-color: #a6a9b0;
	background-image: linear-gradient(to right, #b4b7be 0%, #a6a9b0 100%);
	height: 100%;
	width: 6px;
	display: inline-block;

	-webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
	animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
}

.spinner .rect3 {
	-webkit-animation-delay: -1s;
	animation-delay: -1s;
}

.spinner .rect4 {
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
}

.spinner .rect5 {
	-webkit-animation-delay: -0.8s;
	animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
	0%,
	40%,
	100% {
		-webkit-transform: scaleY(0.4);
	}
	20% {
		-webkit-transform: scaleY(1);
	}
}

@keyframes sk-stretchdelay {
	0%,
	40%,
	100% {
		transform: scaleY(0.4);
		-webkit-transform: scaleY(0.4);
	}
	20% {
		transform: scaleY(1);
		-webkit-transform: scaleY(1);
	}
}
</style>
