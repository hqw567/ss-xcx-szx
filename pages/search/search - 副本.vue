<template>
	<view class="container">
		<view class=""><SearchInput /></view>
		<view class=""><HotSearch /></view>
	</view>
</template>

<script>
import SearchInput from '@/pages/search/components/SearchInput.vue'
import HotSearch from '@/pages/search/components/HotSearch.vue'

export default {
	name: 'search',
	components: {
		SearchInput,
		HotSearch,
	},
	data() {
		return {}
	},
}
</script>

<style lang="scss">
/deep/ page,
.swan-web-view {
	background-color: #fff !important;
}

.container {
	background-color: #fff;
	width: 100%;
	height: 100vh;
}
</style>
