<template>
	<view class="container">
		<view class="">
			<view class="main" v-if="newsDetailsData.title">
				<view class="title">{{ newsDetailsData.title }}</view>
				<view class="info">
					<view class="info-left">
						<image class="img" src="@/static/images/other/news-logo.png"></image>
						<view class="">
							<text class="tit">上职校网</text>
							<view class="wr-nt">
								<view class="newstime">
									{{ newsDetailsData.newstime | formatNewsTime }}
								</view>
								<text class="writer" decode="true">
									{{ newsDetailsData.writer | formatWriter }}
								</text>
							</view>
						</view>
					</view>
					<view class="info-right">
						<!-- #ifdef MP-BAIDU -->
						<follow-swan
							v-if="!isFavor"
							size="default"
							type="primary"
							@favorstatuschange="favorstatuschange"
						/>
						<!-- #endif -->
					</view>
				</view>

				<view class="guide">
					<image
						class="img"
						src="../../static/images/other/quote-start.png"
						mode=""
					></image>
					<view class="p">{{ newsDetailsData.smalltext }}</view>
					<image
						class="img"
						src="../../static/images/other/quote-end.png"
						mode=""
					></image>
				</view>
				<view class="content">
					<mp-html
						ref="article"
						:tag-style="{
							img: 'border-radius:5px;display:block;',
							sup: 'color:#a0a0a0; font-size:12px;',
						}"
						:selectable="true"
						:lazy-load="true"
						:scroll-table="true"
						domain="https://www.shangzhixiao.com"
						:content="html"
					/>
				</view>
				<view class="like-box">
					<view class="like" @click="setNewsLikeFn" :class="{ like5: like5 }">
						<Icons
							:class="{ 'pulsate-bck': like5 }"
							:size="24"
							:src="
								`../../static/images/other/${like5 ? 'news-like-fill' : 'news-like'}.png`
							"
							margin="0 5px 0 0"
						/>
						<text class="like-tit">{{ like === 0 ? '点赞' : like }}</text>
					</view>
				</view>
			</view>
			<template v-else>
				<DetailsSkeleton />
			</template>
			<!-- 相关学校 -->
			<template v-if="relatSchool.length">
				<view class="list-box-school">
					<SchoolList
						:schoolData="relatSchool"
						:itemStyle="{
							'margin-top': 0,
							'border-bottom': '1px solid #eee',
						}"
					>
						<template #header>
							<DetailsTit tit="相关学校" />
						</template>
					</SchoolList>
				</view>
			</template>

			<!-- 相关专业 -->
			<template v-if="relatMajor.length">
				<view class="list-box-major">
					<MajorList
						:majorData="relatMajor"
						:itemStyle="{
							'margin-top': 0,
							'border-bottom': '1px solid #eee',
						}"
					>
						<template #header>
							<DetailsTit tit="相关专业" />
						</template>
					</MajorList>
				</view>
			</template>

			<!-- 相关资讯 -->
			<template v-if="relatNews.length">
				<view class="list-box-news">
					<NewsList
						:newsData="relatNews"
						:itemStyle="{
							'margin-top': 0,
							'border-bottom': '1px solid #eee',
						}"
					>
						<template #header>
							<DetailsTit tit="相关资讯" />
						</template>
					</NewsList>
				</view>
			</template>

			<DetailsSuspend />
		</view>
	</view>
</template>

<script>
import { getNewsDetails, setNewsLike } from '@/api/news.js'
import { getSearch } from '@/api/other.js'
import DetailsSuspend from '@/components/library/DetailsSuspend.vue'
import DetailsTit from '@/components/library/DetailsTit.vue'
import DetailsSkeleton from '@/components/library/DetailsSkeleton.vue'
import NewsList from '@/components/list/NewsList.vue'
import SchoolList from '@/components/list/SchoolList.vue'
import MajorList from '@/components/list/MajorList.vue'
import { websiteUrl } from '@/config/config.js'
import Icons from '@/components/library/Icons.vue'
let observer = null
export default {
	components: {
		DetailsSuspend,
		DetailsTit,
		DetailsSkeleton,
		NewsList,
		SchoolList,
		MajorList,
		Icons,
	},
	data() {
		return {
			id: '',
			requestTask: null,
			relatNews: [],
			relatMajor: [],
			relatSchool: [],
			newsDetailsData: {},
			html: '',
			disabled: null,
			appear: false,
			like: 0,
			like5: false,
			isFavor: false,
		}
	},
	filters: {
		formatWriter(value) {
			// #ifdef MP-WEIXIN
			return value.split('&#')[0]
			// #endif
			return value
		},
		formatNewsTime(value) {
			return value.slice(5)
		},
	},

	onLoad(e) {
		this.isFavor = getApp().globalData.isFavor
		if (!e.id) {
			uni.switchTab({
				url: '/pages/home/home',
			})
			return
		}
		this.id = e.id
		this.requestTask = getNewsDetails(e.id)
	},
	onShow() {
		if (Object.keys(this.newsDetailsData).length === 0) {
			this.requestTask.then(res => {
				this.newsDetailsData = res.data
				this.like = Number(res.data.diggtop)
				this.html = res.data.newstext
				let ctx = this.$refs.article
				uni.setNavigationBarTitle({
					title: res.data.title,
				})

				this.setBdWebtate()
				this.getSchoolListFn()
				this.getMajorListFn()
				this.getInformation()
			})
		}
	},
	onUnload() {
		if (observer) {
			observer.disconnect()
		}
	},
	methods: {
		favorstatuschange(e) {
			console.log(e)
			if (e.detail && e.detail.isFavor === true) {
				this.disabled = false
				console.log(e.detail.isFavor)
			}
		},
		//设置百度web态 TDK
		setBdWebtate() {
			// #ifdef MP-BAIDU
			let newsDetailsData = this.newsDetailsData
			let imageList = [newsDetailsData.titlepic]
			if (
				newsDetailsData.titlepic.indexOf(websiteUrl) === -1 &&
				newsDetailsData.titlepic
			) {
				imageList = [websiteUrl + newsDetailsData.titlepic]
			}
			swan.setPageInfo({
				title: newsDetailsData.title + ' - 上职校网',
				keywords: newsDetailsData.keyboard,
				description: newsDetailsData.smalltext,
				releaseDate: newsDetailsData.newstime,
				articleTitle: newsDetailsData.title + ' - 上职校网',
				likes: newsDetailsData.istop + 1,
				image: imageList,
			})
			// #endif
		},
		//相关资讯
		getInformation() {
			if (!this.relatNews.length) {
				let newsDetailsData = this.newsDetailsData
				let keyboard = newsDetailsData.keyboard
				const separator = /,|，|、|\|/
				let kbArr = keyboard.split(separator)
				if (newsDetailsData.tuijianydbt1.trim()) {
					kbArr.push(newsDetailsData.tuijianydbt1.trim())
				}
				if (newsDetailsData.tuijianydbt2.trim()) {
					kbArr.push(newsDetailsData.tuijianydbt2.trim())
				}
				if (newsDetailsData.tuijianydbt3.trim()) {
					kbArr.push(newsDetailsData.tuijianydbt3.trim())
				}
				if (newsDetailsData.tuijianydbt4.trim()) {
					kbArr.push(newsDetailsData.tuijianydbt4.trim())
				}
				if (newsDetailsData.tuijianydbt5.trim()) {
					kbArr.push(newsDetailsData.tuijianydbt5.trim())
				}
				let searchKeyWord = kbArr.join(',')
				getSearch(searchKeyWord, 1, 9).then(res => {
					let rows = res.data.rows
					rows = rows.filter(item => {
						return item.id !== this.newsDetailsData.id
					})
					this.relatNews = rows
				})
			}
		},
		// 获取相关学校列表
		getSchoolListFn() {
			let title = this.newsDetailsData.title
			title = title && title.slice(0, 5)
			getSearch(title, 1, 8, 'pt').then(res => {
				this.relatSchool = res.data.rows
			})
		},
		// 获取相关专业
		getMajorListFn() {
			let title = this.newsDetailsData.title
			let hasZY = title.indexOf('专业')
			if (hasZY > -1) {
				title = title.slice(0, hasZY)
			}

			title = title && title.slice(0, 5)
			getSearch(title, 1, 8, 'pz').then(res => {
				this.relatMajor = res.data.rows
			})
		},
		// 点赞
		setNewsLikeFn() {
			if (this.like5) {
				uni.showToast({
					title: '您已点赞5次啦',
					icon: 'none',
				})
				return
			}
			this.like++

			if (this.like === Number(this.newsDetailsData.diggtop) + 5) {
				this.like5 = true
			}
			setNewsLike(this.id).then()
		},
	},

	onShareAppMessage(res) {
		if (res.from === 'button') {
			console.log(res.target)
		}
		let pages = getCurrentPages() // 获取栈实例
		let currentRoute = pages[pages.length - 1].route // 获取当前页面路由
		let currentPage = pages[pages.length - 1]['$page'].fullPath
		return {
			title: this.newsDetailsData.title,
			path: currentPage,
			imageUrl: websiteUrl + this.newsDetailsData.titlepic,
			content: this.newsDetailsData.smalltext,
			desc: this.newsDetailsData.smalltext,
		}
	},
}
</script>

<style lang="scss" scoped>
/deep/ page,
.swan-web-view {
	background-color: #fff !important;
}
.list-box {
	background-color: #f8f8f8;
}
.main {
	background-color: #fff;
	padding: 12px 15px 0px 15px;

	.title {
		font-size: 21px;
		line-height: 30px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		height: 35px;
		color: #8b8b8b;
		.info-left {
			display: flex;
			.img {
				display: block;
				width: 35px;
				height: 35px;
				margin-right: 8px;
			}
			.tit {
				display: block;
				font-size: 15px;
				color: #222;
				font-weight: 700;
			}
			.wr-nt {
				display: flex;
				.writer {
					display: flex;
					align-items: center;
					&::before {
						content: '';
						display: block;
						margin: 0 8px;
						height: 70%;
						width: 1px;
						background-color: #c7c7c7;
					}
				}
			}
		}
	}

	.guide {
		margin-top: 20px;
		.p {
			font-size: 16px;

			line-height: 28px;
			text-align: justify;
			letter-spacing: 0.62px;
			margin: 5px 0;
			color: #595959;
		}
		.img {
			width: 12px;
			height: 9px;
			display: block;
			&:last-child {
				margin-left: auto;
			}
		}
	}

	.content {
		color: #222;
		font-size: 18px;
		text-align: justify;
		line-height: 29px;
		letter-spacing: 0.2px;
	}
	.like-box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80px;
		width: 100%;
		.like {
			width: 100px;
			height: 40px;
			border-radius: 50px;
			border: 2px solid $szx-color-primary;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.5s;
			.pulsate-bck {
				animation: pulsate-bck 0.5s ease-in-out infinite both;
			}
			@keyframes pulsate-bck {
				0% {
					transform: scale(1);
				}
				50% {
					transform: scale(0.9);
				}
				100% {
					transform: scale(1);
				}
			}
			.like-tit {
				font-size: 14px;
				font-weight: 700;
				color: $szx-color-primary;
			}
			&.like5 {
				border: 0;
				background-color: $szx-color-primary;
				background-image: linear-gradient(
					to right,
					#1fa2ff 0%,
					#12d8fa 51%,
					#1fa2ff 100%
				);
				box-shadow: 0 0 20px #eee;
				transition: 0.5s;
				text-transform: uppercase;
				background-size: 200% auto;

				&:hover {
					background-position: right center; /* change the direction of the change here */
					text-decoration: none;
				}

				.like-tit {
					color: #fff;
				}
			}
		}
	}
}
</style>
