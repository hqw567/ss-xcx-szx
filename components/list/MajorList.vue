<template>
	<view class="">
		<slot name="header"></slot>
		<view class="major-list">
			<template v-if="majorDataFn && majorDataFn.length">
				<navigator :url="`/pages/details/major?id=${item.id}`" v-for="item in majorDataFn" :key="item.id">
					<view class="list-item" :style="itemStyle">
						<image :src="item.titlepic" mode="" class="item-l"></image>
						<view class="item-r">
							<view class="title">{{ item.title }}</view>
							<view class="info">
								{{ item.smalltext }}
								<view class="tip">[详情]</view>
							</view>
						</view>
					</view>
				</navigator>
			</template>
			<template v-else>
				<ListSkeleton />
			</template>
			<slot name="footer"></slot>
		</view>
	</view>
</template>

<script>
import { websiteUrl } from '@/config/config.js';
import ListSkeleton from '@/components/library/ListSkeleton.vue';
export default {
	props: {
		majorData: {
			type: Array,
			default: () => []
		},
		itemStyle: {
			type: Object,
			default: () => {}
		}
	},
	components: {
		ListSkeleton
	},
	computed: {
		majorDataFn() {
			return this.majorData.map(item => {
				return {
					title: item.title,
					titlepic: websiteUrl + item.titlepic,
					smalltext: item.smalltext.substring(0, 33) + '...',
					id: item.id
				};
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.major-list {
	.list-item {
		display: flex;
		// border-radius: 5px;
		background-color: #fff;
		padding: 14px 20px;
		margin-top: 8px;
		// box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);

		.item-l {
			width: 128rpx;
			height: 128rpx;
			flex-shrink: 0;
			margin-right: 20rpx;
		}

		.item-r {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.title {
			font-weight: 700;
			font-size: 16px;
			color: #101010;
			@include textEllipsis(1);
		}

		.info {
			position: relative;
			font-size: 13px;
			color: #575656;
			@include textEllipsis(2);

			.tip {
				position: absolute;
				bottom: 1px;
				right: 0;
				padding: 0 5px;
				color: #66c0ff;
				background-color: #fff;
				font-size: 13px;
			}
		}
	}
}
</style>
