<template>
	<view class="">
		<slot name="header"></slot>
		<template v-if="schoolListFn && schoolListFn.length">
			<navigator
				:url="`/pages/details/school?id=${item.id}`"
				class="school-skip"
				v-for="item in schoolListFn"
				:key="item.id"
			>
				<view class="school-item" :style="itemStyle">
					<image :src="item.titlepic" mode="aspectFit" class="img"></image>
					<view class="item-mid">
						<view class="title">{{ item.title }}</view>
						<view class="tags">
							<view class="tag-item" v-for="sub in item.tagsArr" :key="sub">
								{{ sub }}
							</view>
						</view>
						<view class="info">学校类型：{{ item.xuexiaoleixing }}</view>
					</view>
				</view>
			</navigator>
		</template>
		<template v-else>
			<ListSkeleton />
		</template>
		<slot name="footer"></slot>
	</view>
</template>

<script>
import { websiteUrl } from '@/config/config.js'
import ListSkeleton from '@/components/library/ListSkeleton.vue'
export default {
	name: 'SchoolList',
	data() {
		return {}
	},
	props: ['schoolData', 'itemStyle'],
	components: {
		ListSkeleton,
	},
	computed: {
		schoolListFn() {
			return this.schoolData.map(item => {
				return {
					title: item.title,
					titlepic: websiteUrl + item.titlepic,
					id: item.id,
					xuexiaoleixing: item.xuexiaoleixing,
					tagsArr: [
						item.xuexiaodiqu,
						...item.xuexiaoxingzhi.split('|'),
						...item.pttags.split('|'),
					].filter(item => item.length > 0),
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.school-item {
	display: flex;
	// border-radius: 5px;
	background-color: #fff;
	padding: 14px 20px;
	margin-top: 8px;
	// box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
	.item-mid {
		width: 75%;
		margin-left: 8px;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.img {
		width: 80px;
		height: 80px;
		flex-shrink: 0;
	}
	.title {
		font-weight: 700;
		font-size: 16px;
		color: #101010;
		@include textEllipsis(1);
	}
	.tags {
		font-size: 12px;
		color: #78c8ff;
		display: flex;
		flex-wrap: wrap;
		height: 20px;
		overflow: hidden;
		& > .tag-item {
			border: 1px solid #78c8ff;
			border-radius: 10px;
			padding: 0 8px;
			height: 17.5px;
			line-height: 17.5px;
			margin-bottom: 5px;
			white-space: nowrap;
			margin-right: 5px;
		}
	}
	.info {
		font-size: 13px;
		color: #575656;
	}
}
</style>
