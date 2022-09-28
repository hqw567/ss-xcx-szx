<template>
	<view class="details-tit">{{ tit }}</view>
</template>

<script>
export default {
	name: 'DetailsTit',
	data() {
		return {}
	},
	props: {
		tit: {
			type: String,
			default: '加载中...',
		},
	},
}
</script>

<style scoped lang="scss">
.details-tit {
	padding: 10px 0 0 15px;
	display: flex;
	align-items: center;
	margin-top: 15px;
	font-weight: 700;
	background-color: #fff;
	font-size: 18px;
	color: #222;
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
</style>
