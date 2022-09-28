<template>
	<view
		class="xtx-skeleton"
		:class="{ shan: animated }"
		:style="{ width, height, borderRadius }"
	>
		<view class="block" :style="{ backgroundColor: bg }"></view>
	</view>
</template>

<script>
export default {
	name: 'XtxSkeleton',
	// 使用的时候需要动态设置 高度，宽度，背景颜色，是否闪下
	props: {
		bg: {
			type: String,
			default: '#ebebeb',
		},
		width: {
			type: String,
			default: '100%',
		},
		height: {
			type: String,
			default: '100%',
		},
		borderRadius: {
			type: String,
			default: '0px',
		},
		animated: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style scoped lang="scss">
.xtx-skeleton {
	display: block;
	position: relative;
	overflow: hidden;
	vertical-align: middle;
	width: 100%;
	height: 100%;
	.block {
		width: 100%;
		height: 100%;
	}
}

.shan {
	&::after {
		content: '';
		position: absolute;
		animation: shan 1.5s ease 0s infinite;
		top: 0;
		width: 50%;
		height: 100%;
		background: linear-gradient(
			to left,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.3) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		transform: skewX(-45deg);
	}
}

@keyframes shan {
	0% {
		left: -100%;
	}

	100% {
		left: 120%;
	}
}
</style>
