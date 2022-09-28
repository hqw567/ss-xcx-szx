<script>
export default {
	globalData: {
		isFavor: false,
		menuButtonInfo: {},
	},
	onLaunch: function() {
		// #ifdef MP
		let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		this.globalData.menuButtonInfo = menuButtonInfo
		// #endif

		// 应用更新
		const updateManager = uni.getUpdateManager()

		updateManager.onCheckForUpdate(function(res) {
			// 请求完新版本信息的回调
		})

		updateManager.onUpdateReady(function(res) {
			uni.showModal({
				title: '更新提示',
				content: '新版本已经准备好，是否重启小程序？',
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate()
					}
				},
			})
		})

		updateManager.onUpdateFailed(function(res) {
			// 新的版本下载失败
		})
		// 获取应用信息
		uni.getSystemInfo({
			success: function(res) {},
		})
		// #ifdef MP-BAIDU
		// 获取用户是否关注
		swan.getFavorStatus({
			success: res => {
				if (res.isFavor === '1') {
					this.globalData.isFavor = true
				}
			},
			fail: err => {
				this.globalData.isFavor = true
				console.log('getFavorStatus fail', err)
			},
		})
		// #endif
	},
	onShow: function() {},
	onHide: function() {},
}
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uview-ui/index.scss';
page {
	background-color: #f8f8f8;
}
</style>
