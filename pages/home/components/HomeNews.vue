<template>
	<view class="container">
		<template>
			<NewsList :newsData="newsData">
				<template #header>
					<ClassTitle tit="中职资讯" path="/pages/news/news" />
				</template>
				<template #footer>
					<ClassMore path="/pages/news/news" />
				</template>
			</NewsList>
		</template>
	</view>
</template>

<script>
import ClassTitle from '@/components/library/ClassTitle.vue'
import NewsList from '@/components/list/NewsList.vue'
import { getNewsList } from '@/api/news.js'
import ClassMore from '@/components/library/ClassMore.vue'
import HomeSkeleton from '@/components/library/HomeSkeleton.vue'
export default {
	name: 'HomeNews',
	components: {
		ClassTitle,
		ClassMore,
		NewsList,
		HomeSkeleton,
	},
	data() {
		return {
			newsData: [],
		}
	},
	created() {
		getNewsList().then(res => {
			this.newsData = res.data.rows
		})
	},
}
</script>

<style scoped lang="scss">
.container {
	margin: 20px 0;
}
</style>
