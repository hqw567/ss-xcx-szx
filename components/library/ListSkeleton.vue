<template>
	<view class="">
		<view class="news-item" v-for="n in SkeletonData" :key="n">
			<view class="title">
				<HomeSkeleton width="100%" height="21px" bg="#ebebeb" animated />
			</view>
			<view class="list-box">
				<HomeSkeleton
					class="list-left"
					width="110px"
					height="76px"
					bg="#ebebeb"
					animated
				/>
				<view class="list-right">
					<view class="list-smalltext">
						<HomeSkeleton width="100%" height="60px" bg="#ebebeb" animated />
					</view>
					<view class="info">
						<view class="info-left" style="padding: 0; background: transparent;">
							<HomeSkeleton width="80px" height="14px" bg="#ebebeb" animated />
						</view>
						<view class="info-right">
							<HomeSkeleton width="60px" height="14px" bg="#ebebeb" animated />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import HomeSkeleton from '@/components/library/HomeSkeleton.vue'
export default {
	data() {
		return {
			SkeletonData: [1, 2, 3, 4, 5, 6],
		}
	},
	components: {
		HomeSkeleton,
	},
}
</script>

<style lang="scss" scoped>
.news-item {
	// border-radius: 5px;
	background-color: #fff;
	padding: 14px 20px;
	margin-top: 8px;
	// box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);

	.title {
		font-size: 16px;
		font-weight: 700;
		color: #101010;
		margin-bottom: 8px;
	}

	.list-box {
		display: flex;
	}

	.list-left {
		flex-shrink: 0;
		width: 110px;
		height: auto;

		margin-right: 8px;
		border-radius: 3px;
	}

	.list-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;

		.list-smalltext {
			text-align: justify;
			font-size: 14px;
			color: #575656;
			@include textEllipsis(3);
		}

		.info {
			margin-top: 3px;
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			.info-left {
				padding: 0 8px;
				border-radius: 3px;
				background-color: #eaf8f3;
				color: #1cb278;
				@include textEllipsis(1);
				max-width: 90px;
			}

			.info-right {
				color: #a6a4a4;
			}
		}
	}
}
</style>
