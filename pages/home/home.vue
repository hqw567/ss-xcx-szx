<template>
	<view class="container">
		<!-- 导航栏搜索 -->
		<NavigationBarSearch />
		<!-- 顶部 -->
		<HomeTop />
		<!-- 中职资讯 -->
		<HomeNews />
		<!-- 中职学校 -->
		<HomeSchool />
		<!-- 中职专业 -->
		<HomeMajor />
		<!-- #ifdef MP-BAIDU -->
		<!-- 悬浮客服按钮 -->
		<BtnSuspend />
		<!-- 关注提示 -->
		<Concern />
		<!-- #endif -->
	</view>
</template>

<script>
import Concern from '@/components/library/Concern.vue'
import NavigationBarSearch from '@/components/library/NavigationBarSearch.vue'
import HomeTop from './components/HomeTop.vue'
import HomeNews from './components/HomeNews.vue'
import HomeSchool from './components/HomeSchool.vue'
import HomeMajor from './components/HomeMajor.vue'
import BtnSuspend from '@/components/library/BtnSuspend.vue'
import HDivider from '@/components/library/HDivider.vue'
export default {
	data() {
		return {}
	},
	onShow() {
		// #ifdef MP-BAIDU
		swan.setPageInfo({
			title: '上职校网 - 湖南中职中专学校、职高技校招生信息平台',
			keywords: '中职学校,中专,职校,职高,技校',
			description:
				'上职校网是湖南地区中等职业学校招生资讯平台，也是一家囊括中专、职高、技工院校等学校信息的综合新媒体网站，响应国家提倡中职教育的政策，为初三升学中职学校的学生及其家长解惑答疑。',
			articleTitle: '上职校网 - 湖南中职中专学校、职高技校招生信息平台',
			image: ['https://www.shangzhixiao.com/module/images/cont/logo.png'],
		})
		// #endif
	},
	components: {
		NavigationBarSearch,
		HomeTop,
		HomeNews,
		HomeSchool,
		HomeMajor,
		BtnSuspend,
		Concern,
		HDivider,
	},
}
</script>

<style lang="scss" scoped>
.container {
	// padding: 5px 10px;
}
</style>
