<template>
	<view class="container">
		<view class="details-skeleton">
			<view class="title"><HomeSkeleton borderRadius="5px" /></view>
			<view class="info">
				<div class="left item"><HomeSkeleton borderRadius="5px" /></div>
				<div class="right item" style="height: 25px; width: 50px;">
					<HomeSkeleton borderRadius="5px" />
				</div>
			</view>
			<view class="guide">
				<HomeSkeleton class="item" borderRadius="5px" width="30%" height="10px" />
				<HomeSkeleton class="item" borderRadius="5px" width="50%" height="10px" />
				<HomeSkeleton class="item" borderRadius="5px" width="80%" height="10px" />
				<HomeSkeleton class="item" borderRadius="5px" height="10px" />
			</view>
			<view class="content">
				<HomeSkeleton class="item" borderRadius="5px" height="12px" />
				<HomeSkeleton class="item" borderRadius="5px" height="12px" />
				<HomeSkeleton class="item" borderRadius="5px" height="12px" />
				<HomeSkeleton class="item" borderRadius="5px" height="12px" />
				<HomeSkeleton class="item" borderRadius="5px" height="12px" />
				<HomeSkeleton class="item" borderRadius="5px" height="12px" />
				<HomeSkeleton
					class="item"
					borderRadius="5px"
					height="100px"
					style="margin-top: 30px;"
				/>
				<HomeSkeleton
					class="item"
					borderRadius="5px"
					height="100px"
					style="margin-top: 30px;"
				/>
			</view>
		</view>
	</view>
</template>

<script>
import HomeSkeleton from '@/components/library/HomeSkeleton.vue'
export default {
	components: {
		HomeSkeleton,
	},
}
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	padding: 10px 15px;
	background-color: #fff;
}
.details-skeleton {
	background-color: #fff;

	.item {
		display: block;
	}
	.guide {
		width: 90vw;
		margin-top: 25px;
		.item {
			margin-top: 5px;
		}
	}
	.content {
		width: 90vw;
		margin-top: 30px;
		.item {
			margin-top: 10px;
		}
	}
	.title {
		width: 100%;
		height: 20px;
		margin-bottom: 10px;
	}
	.info {
		margin-top: 25px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		& > .item {
			width: 100px;
			height: 15px;
		}
	}
}
</style>
