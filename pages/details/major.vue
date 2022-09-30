<template>
	<view class="">
		<view class="container" v-if="detailsData.title">
			<view class="header case">
				<view class="header-t">
					<image :src="detailsData.titlepic" mode="" class="logo"></image>
					<view class="header-t-r">
						<view class="title">
							<text user-select selectable>{{ detailsData.title }}</text>
						</view>
						<view class="tags">
							<view class="item" v-for="item in tags" :key="item">{{ item }}</view>
						</view>
					</view>
				</view>
				<view class="header-b">{{ detailsData.smalltext }}</view>
			</view>
			<view class="info case">
				<view class="tit"><text class="tit-name">基本信息</text></view>
				<view class="box">
					<view class="item">
						基本学制：
						<text user-select selectable>{{ detailsData.jibenxuezhi }}</text>
					</view>
					<view class="item">
						现专业代码：
						<text user-select selectable>{{ detailsData.zhuanyedaima }}</text>
					</view>
					<view class="item">
						原专业代码：
						<text user-select selectable>{{ detailsData.yzydm }}</text>
					</view>
					<view class="item">
						原专业名称：
						<text user-select selectable>{{ detailsData.yzymc }}</text>
					</view>
					<view class="item">
						对口高职专业：
						<text user-select selectable>{{ detailsData.duikougaozhi }}</text>
					</view>
					<view class="item">
						对口本科专业：
						<text user-select selectable>{{ detailsData.duikoubenke }}</text>
					</view>
					<view class="item">
						培养人才目标专业：
						<text user-select selectable>{{ detailsData.peiyangmubiao }}</text>
					</view>
				</view>
			</view>
			<view class="vista case" v-if="vistaData">
				<view class="tit"><text class="tit-name">就业前景</text></view>
				<view class="content"><mp-html domain="https://www.shangzhixiao.com" :content="vistaData"></mp-html></view>
			</view>
			<view class="introduce case" v-if="introduceData">
				<view class="tit"><text class="tit-name">详情介绍</text></view>
				<view class="content"><mp-html domain="https://www.shangzhixiao.com" :content="introduceData"></mp-html></view>
			</view>
		</view>
		<template v-else>
			<DetailsSkeleton />
		</template>

		<!-- 相关资讯 -->
		<template v-if="relatNews.length">
			<view class="list-box">
				<NewsList
					:newsData="relatNews"
					:itemStyle="{
						'margin-top': 0,
						'border-bottom': '1px solid #eee'
					}"
				>
					<template #header>
						<DetailsTit tit="相关资讯" />
					</template>
				</NewsList>
			</view>
		</template>

		<!-- 相关学校 -->
		<template v-if="relatSchool.length">
			<view class="">
				<SchoolList
					:schoolData="relatSchool"
					:itemStyle="{
						'margin-top': 0,
						'border-bottom': '1px solid #eee'
					}"
				>
					<template #header>
						<DetailsTit tit="专业开设学校" />
					</template>
				</SchoolList>
			</view>
		</template>

		<!-- 相关专业 -->
		<template v-if="relatMajor.length">
			<view class="list-box">
				<MajorList
					:majorData="relatMajor"
					:itemStyle="{
						'margin-top': 0,
						'border-bottom': '1px solid #eee'
					}"
				>
					<template #header>
						<DetailsTit tit="相关专业" />
					</template>
				</MajorList>
			</view>
		</template>

		<DetailsSuspend :majorName="detailsData.title" />
	</view>
</template>

<script>
import DetailsSkeleton from '@/components/library/DetailsSkeleton.vue';
import { getMajorDetails, getMajorList, getMajorOpenSchool } from '@/api/major.js';
import { getSearch } from '@/api/other.js';
import DetailsSuspend from '@/components/library/DetailsSuspend.vue';
import { websiteUrl } from '@/config/config.js';
import DetailsTit from '@/components/library/DetailsTit.vue';
import MajorList from '@/components/list/MajorList.vue';
import NewsList from '@/components/list/NewsList.vue';
import SchoolList from '@/components/list/SchoolList.vue';
import { randomsort } from '@/utils/uitls.js';
export default {
	data() {
		return {
			id: null,
			requestTask: null,
			detailsData: {},
			tags: [],
			vistaData: null,
			introduceData: null,
			relatMajor: [],
			relatNews: [],
			relatSchool: [],
			ttData: [
				{
					ttid: 29,
					name: '农林牧渔大类'
				},
				{
					ttid: 30,
					name: '资源环境与安全大类'
				},
				{
					ttid: 31,
					name: '能源动力与材料大类'
				},
				{
					ttid: 32,
					name: '装备制造大类'
				},
				{
					ttid: 33,
					name: '生物与化工大类'
				},
				{
					ttid: 34,
					name: '轻纺食品大类'
				},
				{
					ttid: 35,
					name: '交通运输大类'
				},
				{
					ttid: 36,
					name: '电子信息大类'
				},
				{
					ttid: 37,
					name: '医药卫生大类'
				},
				{
					ttid: 38,
					name: '财经商贸大类'
				},
				{
					ttid: 39,
					name: '旅游服务大类'
				},
				{
					ttid: 40,
					name: '文化艺术大类'
				},
				{
					ttid: 41,
					name: '新闻传播大类'
				},
				{
					ttid: 42,
					name: '教育与体育大类'
				},
				{
					ttid: 43,
					name: '公共管理与服务大类'
				},
				{
					ttid: 44,
					name: '土木水利大类'
				}
			]
		};
	},

	components: {
		DetailsSuspend,
		DetailsSkeleton,
		MajorList,
		NewsList,
		DetailsTit,
		SchoolList
	},
	onLoad(e) {
		if (!e.id) {
			uni.switchTab({
				url: '/pages/home/home'
			});
			return;
		}
		this.requestTask = getMajorDetails(e.id);
	},
	onShow() {
		if (Object.keys(this.detailsData).length === 0) {
			this.requestTask.then(({ data }) => {
				if (data.titlepic.indexOf(websiteUrl) === -1) {
					data.titlepic = websiteUrl + data.titlepic;
				}
				let currTtData = this.ttData.find(v => {
					return v.ttid === Number(data.ttid);
				});
				this.tags = [currTtData.name, ...data.zyshuxing.split('|').filter(item => item.length > 0)];
				this.vistaData = data.zhuanyeqianjing;
				this.introduceData = data.newstext;
				this.detailsData = data;
				uni.setNavigationBarTitle({
					title: data.title
				});
				this.setBdWebtate();
				this.getMajorListFn();
				this.getSearchNewsFn();
				this.getMajorOpenSchoolFn();
			});
		}
	},
	methods: {
		setBdWebtate() {
			let detailsData = this.detailsData;
			// #ifdef MP-BAIDU
			let imageList = [detailsData.titlepic];
			if (detailsData.titlepic.indexOf(websiteUrl) === -1 && detailsData.titlepic) {
				imageList = [websiteUrl + detailsData.titlepic];
			}
			swan.setPageInfo({
				title: detailsData.seotitle + ' - 上职校网',
				keywords: detailsData.keyboard,
				description: detailsData.smalltext,
				releaseDate: detailsData.newstime,
				articleTitle: detailsData.seotitle + ' - 上职校网',
				image: imageList
			});
			// #endif
		},
		// 获取相关专业列表
		getMajorListFn() {
			getMajorList(this.detailsData.ttid, 1, 9).then(res => {
				let rows = res.data.rows;
				rows = rows.filter(item => {
					return item.id !== this.detailsData.id;
				});
				this.relatMajor = rows.sort(randomsort);
			});
		},
		getSearchNewsFn() {
			let title = this.detailsData.title;
			title = title.slice(0, 5);
			getSearch(title, 1, 8).then(res => {
				this.relatNews = res.data.rows;
			});
		},
		getMajorOpenSchoolFn() {
			getMajorOpenSchool(this.detailsData.id).then(res => {
				this.relatSchool = res.data.rows;
			});
		}
	},
	// 点击分享按钮
	onShareAppMessage(res) {
		if (res.from === 'button') {
			console.log(res.target);
		}
		let pages = getCurrentPages(); // 获取栈实例
		let currentRoute = pages[pages.length - 1].route; // 获取当前页面路由
		let currentPage = pages[pages.length - 1]['$page'].fullPath;
		return {
			title: this.detailsData.title,
			path: currentPage,
			imageUrl: this.detailsData.titlepic,
			content: this.detailsData.smalltext,
			desc: this.detailsData.smalltext
		};
	}
};
</script>

<style lang="scss" scoped>
/deep/ page,
.swan-web-view {
}
.container {
	// padding: 20px 15px;
	padding-bottom: 0;
}

.header {
	margin: 15px 10px !important;
	padding: 10px;
	background: #68e0cf;
	background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
	.header-t {
		display: flex;
		.logo {
			width: 128rpx;
			height: 128rpx;
			border-radius: 50%;
			margin-right: 16rpx;
		}

		.header-t-r {
			display: flex;
			flex-direction: column;
			justify-content: center;
			.title {
				font-weight: 600;
				font-size: 21px;
				line-height: 30px;
				color: #fff;
			}

			.tags {
				margin-top: 4px;
				display: flex;
				flex-wrap: wrap;
				.item {
					margin-top: 4px;
					display: inline-block;
					border-radius: 20px;
					font-size: 12px;
					height: 18px;
					line-height: 18px;
					padding: 0 8px;
					color: #fff;
					border: 1px solid #fff;
					margin-right: 8px;
				}
			}
		}
	}

	.header-b {
		margin-top: 15px;
		font-size: 14px;
		color: #fff;
		text-align: justify;
		letter-spacing: 0.2px;
		line-height: 20px;
	}
}

.case {
	border-radius: 10px;
	margin-top: 15px;
	background-color: #fff;
	padding: 20px 15px;
}

.tit {
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
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

.info {
	.box {
		padding-left: 15px;
		.item {
			font-size: 16px;
			color: #222;
			margin-top: 8px;
		}
	}
}

.content {
	font-size: 16px;
	color: #222;
	line-height: 30px;
	letter-spacing: 0.2px;
	text-align: justify;
}
</style>
