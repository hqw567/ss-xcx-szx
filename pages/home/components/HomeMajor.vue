<template>
	<view class="container">
		<MajorList :majorData="majorData">
			<template #header>
				<ClassTitle tit="中职专业" path="/pages/major/major" />
			</template>
			<template #footer>
				<ClassMore path="/pages/major/major" />
			</template>
		</MajorList>
	</view>
</template>

<script>
import ClassTitle from '@/components/library/ClassTitle.vue'
import MajorList from '@/components/list/MajorList.vue'
import { getMajorList } from '@/api/major.js'
import ClassMore from '@/components/library/ClassMore.vue'
export default {
	components: {
		MajorList,
		ClassTitle,
		ClassMore,
	},
	data() {
		return {
			majorData: [],
		}
	},
	created() {
		getMajorList().then(res => {
			this.majorData = res.data.rows
		})
	},
}
</script>

<style scoped lang="scss">
.container {
	margin-top: 20px;
}
</style>
