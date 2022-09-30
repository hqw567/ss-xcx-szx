<template>
	<view class="">
		<view class="container" v-if="schoolData && schoolData.title">
			<view class="header">
				<view class="top">
					<image :src="schoolData.titlepic" mode="" class="logo"></image>
					<view class="name">
						<view class="title">
							<text user-select selectable>{{ schoolData.title }}</text>
						</view>
						<view class="tags">
							<view class="item" v-for="item in tags" :key="item">{{ item }}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="info unifycase">
				<view class="tit">基本信息</view>
				<view class="box">
					<view class="item">
						举办者：
						<text user-select selectable>{{ schoolData.jubanzhe }}</text>
					</view>
					<view class="item">
						建校时间：
						<text user-select selectable>{{ schoolData.jianxiaoshijian }}</text>
					</view>
					<view class="item">
						招生代码：
						<text user-select selectable>{{ schoolData.zhaoshengdaima }}</text>
					</view>
					<view class="item">
						在校生人数：
						<text user-select selectable>{{ schoolData.xueshengrenshu }}</text>
					</view>
					<view class="item">
						学校面积：
						<text user-select selectable>{{ schoolData.xuexiaomianji }}</text>
					</view>
					<view class="item">
						教学设备价值：
						<text user-select selectable>{{ schoolData.shebeijiazhi }}</text>
					</view>
					<view class="item">
						教职工总数：
						<text user-select selectable>{{ schoolData.xueshengrenshu }}</text>
					</view>
					<view class="item">
						挂靠大专学校：
						<text user-select selectable>{{ schoolData.guahaodazhuan }}</text>
					</view>
					<view class="item">
						学校地址：
						<text user-select selectable>{{ schoolData.xuexiaodizhi }}</text>
					</view>
					<view class="item" v-if="schoolData.xuexiaogw">
						学校官网：
						<text user-select selectable>{{ schoolData.xuexiaogw }}</text>
					</view>
				</view>
			</view>
			<view class="zhaoshengzy unifycase" v-if="zhaoshengzy.length">
				<view class="tit">学校招生专业</view>
				<view class="box">
					<navigator class="item" :style="zszyStyle" :url="`/pages/details/major?id=${item.id}`" v-for="item in zhaoshengzy" :key="item.id">{{ item.title }}</navigator>
				</view>
			</view>
			<view class="content unifycase">
				<view class="tit">学校介绍及优势</view>
				<view class="box"><mp-html ref="content" domain="https://www.shangzhixiao.com" :content="contentData" /></view>
			</view>
			<view class="environment unifycase">
				<view class="tit">学校环境</view>
				<view class="box" if="environmentData">
					<mp-html
						ref="environment"
						domain="https://www.shangzhixiao.com"
						:content="environmentData"
						:tag-style="{
							img: 'display:block;margin:10px 0 4px 0;'
						}"
					/>
				</view>
			</view>
		</view>
		<template v-else>
			<DetailsSkeleton />
		</template>

		<!-- 相关资讯 -->
		<template v-if="relatNews.length">
			<view class="">
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
						<DetailsTit tit="学校招生专业" />
					</template>
				</MajorList>
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
						<DetailsTit tit="相关学校" />
					</template>
				</SchoolList>
			</view>
		</template>

		<DetailsSuspend :schoolName="schoolData.title" />
	</view>
</template>

<script>
import { getSchoolDetails, getzhaoshengzy, getSchoolList } from '@/api/school.js';
import { getSearch } from '@/api/other.js';
import DetailsSuspend from '@/components/library/DetailsSuspend.vue';
import DetailsSkeleton from '@/components/library/DetailsSkeleton.vue';
import { websiteUrl } from '@/config/config.js';
import DetailsTit from '@/components/library/DetailsTit.vue';
import SchoolList from '@/components/list/SchoolList.vue';
import MajorList from '@/components/list/MajorList.vue';
import NewsList from '@/components/list/NewsList.vue';
import { randomsort } from '@/utils/uitls.js';
export default {
	data() {
		return {
			id: null,
			requestTask: null,
			schoolData: {},
			environmentData: '',
			contentData: '',
			zhaoshengzy: [],
			tags: [],
			relatSchool: [], // 相关学校
			relatNews: [], // 相关资讯
			relatMajor: []
		};
	},
	components: {
		DetailsSuspend,
		DetailsSkeleton,
		SchoolList,
		MajorList,
		DetailsTit,
		NewsList
	},
	onLoad(e) {
		if (!e.id) {
			uni.switchTab({
				url: '/pages/home/home'
			});
			return;
		}
		this.id = e.id;
		this.requestTask = getSchoolDetails(this.id);
	},
	onShow() {
		if (Object.keys(this.schoolData).length === 0) {
			this.requestTask.then(({ data }) => {
				if (data.pzid.trim()) {
					const separator = /,|，|、|\|/;
					let fmtPzid = data.pzid.split(separator).join(',');
					getzhaoshengzy(fmtPzid).then(res => {
						this.zhaoshengzy = res.data.rows;
						this.relatMajor = res.data.rows;
						console.log(this.relatMajor);
					});
				}

				if (data.titlepic.indexOf(websiteUrl) === -1) {
					data.titlepic = websiteUrl + data.titlepic;
				}
				this.contentData = data.newstext;
				this.environmentData = data.huanjing;
				this.schoolData = data;
				this.tags = [...data.xuexiaoxingzhi.split('|'), ...data.pttags.split('|'), data.xuexiaoleixing].filter(item => item.length > 0);
				uni.setNavigationBarTitle({
					title: data.title
				});
				this.setBdWebtate();
				this.getSchoolListFn();
				this.getSearchNewsFn();
			});
		}
	},
	methods: {
		setBdWebtate() {
			// #ifdef MP-BAIDU
			let schoolData = this.schoolData;
			let imageList = [schoolData.titlepic];
			if (schoolData.titlepic.indexOf(websiteUrl) === -1 && schoolData.titlepic) {
				imageList = [websiteUrl + schoolData.titlepic];
			}
			swan.setPageInfo({
				title: schoolData.seotitle + ' - 上职校网',
				keywords: schoolData.keyboard,
				description: schoolData.smalltext,
				releaseDate: schoolData.newstime,
				articleTitle: schoolData.seotitle + ' - 上职校网',
				image: imageList
			});
			// #endif
		},
		// 获取相关学校列表
		getSchoolListFn() {
			getSchoolList(this.schoolData.classid, 1, 8).then(res => {
				let rows = res.data.rows;
				rows = rows.filter(item => {
					return item.id !== this.schoolData.id;
				});
				this.relatSchool = rows.sort(randomsort);
			});
		},
		// 获取相关资讯
		getSearchNewsFn() {
			let title = this.schoolData.title;
			title = title.slice(0, 5);
			getSearch(title, 1, 8).then(res => {
				this.relatNews = res.data.rows;
			});
		}
	},
	computed: {
		zszyStyle() {
			if (this.zhaoshengzy.length < 5) {
				return {
					width: '44%'
				};
			}
			return {};
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
			title: this.schoolData.title,
			path: currentPage,
			imageUrl: this.schoolData.titlepic,
			content: this.schoolData.smalltext,
			desc: this.schoolData.smalltext
		};
	}
};
</script>

<style lang="scss" scoped>
.container {
	.header {
		margin: 15px 12px;
		padding: 10px;
		background: #68e0cf;
		background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
		border-radius: 10px;

		.top {
			display: flex;
			align-items: center;
		}

		.logo {
			flex-shrink: 0;
			margin-right: 16rpx;
			width: 160rpx;
			height: 160rpx;
		}
		.name {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		.title {
			font-size: 21px;
			line-height: 30px;
			color: #fff;
			font-weight: 600;
		}

		.tags {
			margin-top: 4px;
			display: flex;
			flex-wrap: wrap;
			& .item {
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

.unifycase {
	margin-top: 15px;
	padding: 20px 15px;
	background-color: #fff;
	border-radius: 10px;
}

.info {
	.box {
		padding-left: 15px;
	}

	.item {
		font-size: 16px;
		margin-top: 8px;
		color: #222;
	}
}
.zhaoshengzy {
	.box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		&::after {
			content: '';
			width: 32%;
			height: 0px;
		}
		.item {
			@include textEllipsis(1);
			width: 28%;
			padding: 5px;
			height: 40px;
			text-align: center;
			margin-top: 8px;
			line-height: 40px;
			display: block;
			border: 1px solid $szx-color-primary;
			background-color: #f7fcff;
			border-radius: 5px;
			color: $szx-color-primary;
			transition: all 0.3s;
			&:hover {
				background-color: $szx-color-primary;
				color: #fff;
			}
		}
	}
}
.content {
	font-size: 16px;
	line-height: 30px;
	color: #222;
	text-align: justify;
	letter-spacing: 0.2px;
}

.environment {
	background-color: #fff;
	margin-top: 20px;
	padding: 25px 0;
	font-size: 14px;
	text-align: center;
	.tit {
		padding-left: 15px;
		color: #000;
	}
}

.tit {
	display: flex;
	align-items: center;
	font-weight: 700;
	height: 18px;
	font-size: 18px;
	margin-bottom: 10px;

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
