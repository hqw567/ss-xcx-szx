<template>
	<view class="">
		<view class="content">
			<slot name="header"></slot>
			<template v-if="newsListFn && newsListFn.length">
				<navigator :url="`/pages/details/news?id=${item.id}`" class="news-skip" v-for="item in newsListFn" :key="item.id">
					<view class="news-item" :style="itemStyle">
						<view class="title">{{ item.title }}</view>
						<view class="list-box">
							<image v-if="item.titlepic" class="list-left" :src="item.titlepic" mode=""></image>
							<view class="list-right">
								<view class="list-smalltext">{{ item.smalltext }}</view>
								<view class="info">
									<view class="info-left" v-if="item.classname">{{ item.classname }}</view>
									<view class="info-right">{{ item.newstime | getDate }}</view>
								</view>
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
import { getNewsList } from '@/api/news.js';
import { getClassInfo } from '@/api/other.js';
import { websiteUrl } from '@/config/config.js';
import ListSkeleton from '@/components/library/ListSkeleton.vue';
import classInfoData from '@/config/classInfoData.js';
export default {
	name: 'NewsList',
	data() {
		return {};
	},
	components: {
		ListSkeleton
	},
	props: ['newsData', 'itemStyle'],
	created() {},
	computed: {
		newsListFn() {
			return this.newsData.map(item => {
				let classinfo = classInfoData;
				let classtopname;
				let classname;
				for (let i = 0; i < classinfo.length; i++) {
					if (classinfo[i].classid == item.classid) {
						classname = classinfo[i].classname;
						if (classinfo[i].bclassid == 0) {
							classtopname = classinfo[i].classname;
							// break
						} else {
							for (let j = 0; j < classinfo.length; j++) {
								if (classinfo[j].classid == classinfo[i].bclassid) {
									classtopname = classinfo[j].classname;
									// break
								}
							}
						}
					}
				}
				if (item.titlepic) {
					item.titlepic = websiteUrl + item.titlepic;
				}
				return {
					title: item.title,
					titlepic: item.titlepic,
					newstime: item.newstime,
					smalltext: item.smalltext,
					id: item.id,
					classname,
					classtopname
				};
			});
		}
	},
	filters: {
		getDate(dateTimeStamp) {
			//???????????????????????????
			let rawTime = dateTimeStamp;
			var result;
			var time = Date.parse(rawTime.replace(/-/g, '/'));
			var nowTime = new Date().getTime();
			var timeDifference = nowTime - time;
			var minTime = 60000;
			var hourTime = minTime * 60;
			var dayTime = hourTime * 24;
			var weektTime = dayTime * 7;
			var monthTime = dayTime * 30;
			var yearTime = dayTime * 365;

			if (parseInt(timeDifference / yearTime) >= 1) {
				// result = parseInt(timeDifference / yearTime) + '??????';
				result = rawTime;
			} else if (parseInt(timeDifference / monthTime) >= 1) {
				result = parseInt(timeDifference / monthTime) + '??????';
			} else if (parseInt(timeDifference / weektTime) >= 1) {
				result = parseInt(timeDifference / weektTime) + '??????';
			} else if (parseInt(timeDifference / dayTime) >= 1) {
				result = parseInt(timeDifference / dayTime) + '??????';
			} else if (parseInt(timeDifference / hourTime) >= 1) {
				result = parseInt(timeDifference / hourTime) + '?????????';
			} else if (parseInt(timeDifference / minTime) >= 1) {
				result = parseInt(timeDifference / minTime) + '?????????';
				if (parseInt(timeDifference / minTime) <= 5) {
					//????????????????????????
					result = '??????';
				}
			}
			return result;
		}
	}
};
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
		width: 220rpx;
		height: auto;

		margin-right: 16rpx;
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
