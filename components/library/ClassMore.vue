<template>
	<view class="container">
		<navigator :url="path" open-type="switchTab"><button class="class-more">查看更多</button></navigator>
	</view>
</template>

<script>
export default {
	props: {
		path: String,
		default: ''
	},
	created() {}
};
</script>

<style scoped lang="scss">
.container {
	margin-top: 10px;
}

.class-more {
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #a6a4a4;
	font-size: 15px;
	background-color: #fff;
}
</style>
