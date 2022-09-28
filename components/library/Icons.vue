<template>
	<view class="wrap-icon">
		<image
			class="icon"
			:src="src"
			mode=""
			:style="{
				width: size + 'px',
				height: size + 'px',
				margin: margin,
			}"
		></image>
	</view>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: '',
		},
		size: {
			type: Number,
			default: 48,
		},
		margin: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped lang="scss">
.icon {
	vertical-align: bottom;
}
</style>
