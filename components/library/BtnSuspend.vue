<template>
	<navigator url="">
		<button
			class="consult"
			open-type="contact"
			:style="{ bottom: isFavor ? '10px' : '' }"
		>
			<image src="../../static/images/other/service.png" mode="" class="img"></image>
			<text>咨询</text>
		</button>
	</navigator>
</template>

<script>
export default {
	data() {
		return {
			isFavor: true,
		}
	},
	mounted() {
		this.isFavor = getApp().globalData.isFavor
	},
}
</script>

<style lang="scss">
.consult {
	width: 90px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 60px;
	right: 15px;
	border-radius: 50px;
	font-size: 14px;
	color: #fff;
	background: #8e2de2;
	/* fallback for old browsers */
	background: linear-gradient(to right, #4a00e0, #8e2de2);
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	.img {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}
}
</style>
