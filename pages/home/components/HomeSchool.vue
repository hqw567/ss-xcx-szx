<template>
	<view class="container">
		<SchoolList :schoolData="schoolData">
			<template #header>
				<ClassTitle tit="中职学校" path="/pages/school/school" />
			</template>
			<template #footer>
				<ClassMore path="/pages/school/school" />
			</template>
		</SchoolList>
	</view>
</template>

<script>
import ClassTitle from '@/components/library/ClassTitle.vue'
import SchoolList from '@/components/list/SchoolList.vue'
import { getSchoolList } from '@/api/school.js'
import ClassMore from '@/components/library/ClassMore.vue'
export default {
	name: 'HemeSchool',
	components: {
		ClassTitle,
		ClassMore,
		SchoolList,
	},
	data() {
		return {
			schoolData: [],
		}
	},
	created() {
		getSchoolList().then(res => {
			this.schoolData = res.data.rows
		})
	},
}
</script>

<style scoped lang="scss">
.container {
	margin: 20px 0;
}
</style>
