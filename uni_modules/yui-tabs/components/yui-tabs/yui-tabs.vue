<template>
	<view class="yui-tabs" :class="[tabsClass]">
		<!-- 依赖元素，用于处理滚动吸顶所需 -->
		<view class="depend-wrap"></view>
		<!-- 标签区域 -->

		<view class="yui-tabs__wrap" :style="[innerWrapStyle,wrapStyle]">
			<!-- scrollX为true，表示允许横向滚动 -->
			<scroll-view class="yui-tabs__scroll" :class="[scrollX?'enable-sroll':'']" :scroll-x="scrollX"
				:scroll-anchoring="true" enable-flex :scroll-left="scrollLeft"
				:scroll-into-view="!scrollToCenter?scrollId:''" scroll-with-animation :style="[scrollStyle]">
				<view class="yui-tabs__nav" :class="[navClass]" :style=[navStyle]>
					<view class="yui-tab" v-for="(tab,index) in tabList" :key="index"
						@tap.stop="handleClick(index,true)" :id="`tab_${index}`" :class="[tabClass(index, tab)]"
						:style="[tabStyle(tab)]">
						<view class="yui-tab__text">
							<slot :name="tab.titleSlot">{{tab.label}}</slot>
							<text :class="[infoClass(tab)]" v-if="tab.badge || tab.dot">{{tab.badge}}</text>
						</view>
					</view>
					<view v-if="isLine" class="yui-tabs__line" :style="[lineStyle,lineAnimatedStyle]"></view>
				</view>
			</scroll-view>
			<!-- 标签栏额外内容 -->
			<view class="yui-tabs__extra">
				<slot name="extra"></slot>
			</view>
		</view>
		<view v-if="isFixed" class="yui-tabs__placeholder" :style="[{height:placeholderHeight+'px'}]"></view>
		<!-- 标签内容：普通实现 -->
		<view v-if="!swiper" class="yui-tabs__content" :class="{'yui-tabs__content--animated':animated}">
			<view class="yui-tabs__track" :style="[trackStyle]">
				<view class="yui-tab__pane" :class="[paneClass(index,tab)]" v-for="(tab,index) in tabList" :key="index"
					:style="[tab.paneStyle]" @touchstart="touchStart" @touchmove="touchMove($event,index)"
					@touchend="touchEnd($event,index)">
					<view v-if="tab.rendered ? true :value == index">
						<slot :name="tab.slot"></slot>
					</view>
				</view>
			</view>
		</view>

		<!-- 标签内容：使用swiper组件实现左右滑动 -->
		<swiper v-if="swiper" class="yui-tabs__swiper" :current="current" :duration="swiperDuration"
			@change="onSwiperChange">
			<swiper-item class="yui-tabs__swiper--item" v-for="(tab,index) in tabList" :key="index"
				@touchmove="stopTouchMove">
				<view class="yui-tabs__swiper--wrap" v-if="tab.rendered ? true :value == index">
					<slot :name="tab.slot"></slot>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// 1.优化滑动切换与上下滚动互相影响的bug。
	// 2.考虑是否增加滚动导航
	// * 微信小程序中调试基础库为2.25.0
	import {
		isNull,
		addUnit,
		isDef,
		isObject,
		getDirection
	} from "../yui-tabs/utils/uitls"
	import {
		emits,
		props,
		valueField
	} from "../yui-tabs/utils/const"
	export default {
		name: "yui-tabs",
		emits,
		// shared:表示页面 wxss 样式将影响到自定义组件
		options: {
			styleIsolation: 'shared'
		},
		props,
		data() {
			return {
				tabList: [], //标签页数据
				scrollId: 'tab_0', //值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
				scrollLeft: 0, //设置横向滚动条位置
				extraWidth: 0, //标签栏右侧额外区域宽度
				contentWidth: 0, //标签内容宽度
				trackStyle: null, //标签内容滑动轨道样式
				touchInfo: {
					inited: false, //标记左右滑动时的初始化状态
					startX: null, //记录touch位置的横坐标
					startY: null, //记录touch位置的纵坐标
					moved: false, //用来判断是否是一次移动
					deltaX: 0, //记录拖动的横坐标距离
					isLeftSide: false, //标记是否为左滑
				},
				// 标签栏底部线条动画相关
				lineAnimated: false, //是否开启标签栏底部线条动画（首次不开启）
				lineAnimatedStyle: {
					transform: `translateX(-100%) translateX(-50%)`,
					transitionDuration: `0s`
				}, //标签栏底部线条动画样式
				isFixed: false, //是否吸顶
				current: this[valueField], //当前显示的滚动卡片
				isTabClick: false, //是否为标签标题点击
				placeholderHeight: 0, //标题栏占位高度
			}
		},
		computed: {
			// 样式风格是否为line
			isLine() {
				return this.type === "line"
			},
			// 标签页容器class
			tabsClass() {
				return `yui-tabs--${this.type} ${this.visible?'yui-tabs--visible':''} ${this.fixed || this.isFixed?'yui-tabs--fixed':''} ${this.swiper?'yui-tabs--swiper':''} `
			},
			// 标签栏class
			navClass() {
				return `yui-tabs__nav--${this.type}`
			},
			// 标签栏style
			navStyle() {
				const style = {}
				if (this.type === "card") style.borderColor = this.color
				return style
			},
			// 标签栏包裹层样式
			innerWrapStyle() {
				const style = {
					background: this.background,
				}
				// 滚动吸顶下
				if (this.fixed || this.isFixed) {
					style.top = this.offsetTop + "px"
					style.zIndex = this.zIndex
				}
				return style
			},
			// 滚动区域样式
			scrollStyle() {
				return {
					width: `calc(100% - ${this.extraWidth}px)`
				}
			},
			// 标签栏底部线条样式
			lineStyle() {
				const {
					lineWidth,
					lineHeight,
					duration
				} = this;
				const lineStyle = {
					width: addUnit(lineWidth),
					backgroundColor: this.color,
				}

				if (isDef(lineHeight)) {
					const height = addUnit(lineHeight);
					lineStyle.height = height;
					lineStyle.borderRadius = height;
				}
				return lineStyle
			},
			// 是否允许横向滚动
			scrollX() {
				return !this.ellipsis && this.type !== "card" && this.tabs.length > this.scrollThreshold
			},
			// 标签数量
			dataLen() {
				return this.tabList.length
			},
			// swiper组件滑动动画时长
			swiperDuration() {
				return this.animated ? this.duration * 1000 : 0
			},
		},
		watch: {
			// 监听tabs变化，重新初始化tabList
			tabs: {
				handler(val) {
					this.updateTabList(); //更新tabList
				},
				deep: true
			},
		},
		created() {
			// 监听选中标识符变化
			this.$watch(valueField, (val, oldVal) => {
				this.current = val
				this.tabChange(val, oldVal) //标签切换
				this.changeStyle() // 样式切换
			})

			this.initTabList() // 初始化tabList
		},
		mounted() {
			this.$nextTick(() => {
				this.init() //初始化操作
				this.listenEvent(); //监听事件
			})
		},
		methods: {
			getNode(select) {
				let query
				// #ifdef MP-ALIPAY
				query = uni.createSelectorQuery()
				// #endif
				// #ifndef MP-ALIPAY
				query = uni.createSelectorQuery().in(this)
				// #endif
				return query.select(select)
			},
			// 获取元素位置信息
			getRect(select) {
				return new Promise((res, rej) => {
					if (!select) rej('Parameter is empty');
					this.getNode(select).boundingClientRect(rect => res(rect)).exec();
				})
			},
			// 标签项class
			tabClass(index, tab) {
				return `yui-tab_${index} ${tab.active?'yui-tab--active':''} ${this.ellipsis && !this.scrollX?'yui-tab__ellipsis':''}`
			},
			// 标签内容class
			paneClass(index, tab) {
				return `yui-tab_pane${index} ${tab.active?'yui-pane--active':''}`
			},
			// 标签项style
			tabStyle(tab) {
				let activeColor = this.titleActiveColor
				let inactiveColor = this.titleInactiveColor
				let background = ""
				let borderColor = ""
				// type="line" 时
				if (this.type === "line") {
					if (isNull(activeColor)) activeColor = "#646566"
					if (isNull(inactiveColor)) inactiveColor = "#323233"
				}

				// type="text" 时，选中时使用主题色
				if (this.type === "text") {
					if (isNull(activeColor)) activeColor = this.color
					if (isNull(inactiveColor)) inactiveColor = "#323233"
				}

				// type="card" 时，未选中则使用主题色
				if (this.type === "card") {
					background = this.color
					if (isNull(activeColor)) activeColor = "#fff"
					if (isNull(inactiveColor)) inactiveColor = this.color
				}

				// type="button" 时
				if (this.type === "button") {
					background = this.color
					if (isNull(activeColor)) activeColor = "#fff"
					if (isNull(inactiveColor)) inactiveColor = "#323233"
				}

				// type="line-button" 时
				if (this.type === "line-button") {
					borderColor = this.color
					if (isNull(activeColor)) activeColor = this.color
					if (isNull(inactiveColor)) inactiveColor = "#323233"
				}
				return {
					color: tab.active ? activeColor : inactiveColor,
					background: tab.active ? background : "",
					borderColor: tab.active ? borderColor : "",
				}
			},
			// 标题右上角信息class
			infoClass(tab) {
				return ` yui-tab__info ${tab.dot?'yui-tab__info--dot':''}`
			},
			// 监听事件
			listenEvent() {
				const that = this
				// 粘性定位布局下的吸顶处理
				if (that.sticky) {
					uni.$on('onPageScroll', function(e) {
						that.getNode('.depend-wrap').boundingClientRect(rect => {
							that.isFixed = rect.bottom - that.stickyThreshold <= that.offsetTop
							// 	滚动时触发，仅在 sticky 模式下生效,{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }
							that.$emit("scroll", {
								scrollTop: e.scrollTop,
								isFixed: that.isFixed
							})
						}).exec()
					})
				}
			},
			// 初始化操作 
			async init() {
				//获取额外区域的宽度
				let rect = await this.getRect('.yui-tabs__extra')
				this.extraWidth = rect ? rect.width : 0

				//获取标签内容区域的宽度
				rect = await this.getRect('.yui-tabs__content')
				this.contentWidth = rect ? rect.width : 0


				rect = await this.getRect('.yui-tabs__wrap')
				const halfWrapWidth = rect ? rect.width / 2 : 0
				this.placeholderHeight = rect ? rect.height : 0

				//获取标签容器距离视口左侧的left值
				rect = await this.getRect('.yui-tabs')
				const parentLeft = rect ? rect.left : 0
				// 保存每个tab的translateX
				this.tabList.forEach(async (tab, index) => {
					const rect = await this.getRect('.yui-tab_' + index);
					tab.translateX = rect ? rect.left + rect.width / 2 - parentLeft : 0
					tab.scrollLeft = tab.translateX - halfWrapWidth
					if (tab.scrollLeft < 0) tab.scrollLeft = 0
					if (index === this[valueField]) {
						this.tabChange(this[valueField], -1) //标签切换
						this.changeStyle(); //样式切换
					}
				})
			},
			// 初始化tabList
			initTabList() {
				const tabs = this.tabs.filter(o => !isNull(o))
				this.tabList = tabs.map((item, index) => {
					const isCurr = this[valueField] == index
					const tab = {
						label: '', //标签名称
						slot: 'pane' + index, //标签内容的插槽名称，默认以"pane"+标签下标命名
						titleSlot: 'title' + index, //标签标题的插槽名称，默认以"title"+标签下标命名
						disabled: false, //是否禁用标签
						active: false, //是否选中
						rendered: !this.isLazyRender, //标记是否渲染过
						show: false, // 是否显示内容
						dot: false, //是否在标题右上角显示小红点
						translateX: 0, //底部线条translateX值，
						scrollLeft: 0, //当前标签对应的横向滚动条位置
					}

					tab.paneStyle = this.animated ? {
						visibility: tab.show ? 'visible' : 'visible',
						height: tab.show ? 'auto' : '0px'
					} : {
						display: tab.show ? 'block' : 'none'
					};
					// 读取标签对象值
					if (isObject(item)) {
						tab.label = item.label
						tab.slot = isNull(item.slot) ? tab.slot : item.slot
						tab.titleSlot = isNull(item.titleSlot) ? tab.titleSlot : item.titleSlot
						tab.dot = isNull(item.dot) ? tab.dot : item.dot
						tab.badge = !isNull(item.badge) && !tab.dot ? item.badge : ""
					} else {
						tab.label = item
					}
					return tab
				})

			},
			// 更新tabList
			updateTabList() {
				// 如果长度有变化,表示tabs有删除或新增,重新init一次
				if (this.tabs.length != this.dataLen) {
					this.initTabList() //初始化tabList
				} else {
					// 否则仅仅更改label,badge,dot值
					this.tabs.forEach((item, i) => {
						const tab = this.tabList[i]
						// 读取标签对象值
						if (isObject(item)) {
							this.$set(tab, "label", item.label)
							this.$set(tab, "dot", isNull(item.dot) ? tab.dot : item.dot)
							this.$set(tab, "badge", !isNull(item.badge) && !tab.dot ? item.badge : "")
						} else {
							this.$set(tab, "label", item)
						}
					})
				}

				this.$nextTick(() => {
					this.init() //初始化操作
				})
			},
			// 标签点击事件
			handleClick(index, isTabClick = false) {
				this.isTabClick = isTabClick // 是否为标签标题点击
				// if (this.tabList[index].disabled) return //禁用时不允许切换
				this.$emit('click', index, this.tabs[index], this.isTabClick) // 标签点击事件
				if (this[valueField] == index) return //不允许重复切换同一标签
				this.$emit(emits[0], index) //更新v-model绑定的值

				//标签点击时页面是否滚动回到顶部
				if (this.tabClickScrollTop) {
					setTimeout(function() {
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 0
						});
					}, this.duration * 1000);
				}
			},
			// 标签切换
			tabChange(value, oldValue) {
				const oldTab = this.tabList[oldValue] || {} //上一个tab
				const currTab = this.tabList[value] //当前tab
				// 设置选中态
				oldTab.active = false
				currTab.active = true

				// 触发rendered事件
				if (this.isLazyRender && !currTab.rendered) {
					this.$emit('rendered', value, this.tabs[value])
				}
				currTab.rendered = true //标记渲染过

				oldTab.show = false //隐藏旧内容区域
				currTab.show = true //显示当前tab对应的内容区域
				// 触发change事件
				if (oldValue !== -1) this.$emit('change', value, this.tabs[value], this.isTabClick)
			},
			// 样式切换
			changeStyle() {
				// 标签栏允许滚动
				if (this.scrollX) {
					if (this.scrollToCenter) {
						// 设置横向滚动条位置，当前标签滚动到中心位置
						this.scrollLeft = this.tabList[this[valueField]].scrollLeft
					} else {
						//设置scroll-into-view
						this.scrollId = `tab_${this[valueField]-1}`;
					}
				}
				this.changeLineStyle() //改变标签栏底部线条位置

				// 标签内容滑动非swiper实现时
				if (!this.swiper) {
					this.changeTrackStyle(false, this.duration) //改变标签内容滑动轨道样式
					this.changePaneStyle() //改变标签内容样式
				}
			},
			// 改变标签栏底部线条位置
			changeLineStyle() {
				// 仅在 type="line" 时有效
				if (!this.isLine) return
				const val = this.tabList[this[valueField]].translateX
				const transform = `translateX(${isDef(val) ? val + "px" : '-100%'}) translateX(-50%)`
				const duration = `${this.lineAnimated?this.duration:'0'}s`
				this.$set(this.lineAnimatedStyle, 'transform', transform)
				this.$set(this.lineAnimatedStyle, 'transitionDuration', duration)

				this.$nextTick(() => {
					this.lineAnimated = true //是否开启标签栏动画
				})
			},
			// 改变标签内容滑动轨道样式
			changeTrackStyle(isSlide = false, duration = 0, offsetWidth = 0) {
				if (!this.animated) return
				// isSlide为true，表示左右滑动；false表示点击标签的转场动画
				this.trackStyle = {
					'transform': isSlide ? `translate3d(${offsetWidth}px,0,0)` :
						`translateX(${-100 * this[valueField]}%)`,
					'transition': `transform ${duration}s ease-in-out`
				}
			},
			// 改变标签内容样式
			changePaneStyle() {
				this.getRect('.yui-tab__pane' + this[valueField]).then(rect => {
					// 有拖动动画时，隐藏的标签内容高度取显示的标签内容高度
					const height = rect && this.swipeAnimated ? rect.height : 0
					this.tabList.forEach(tab => {
						const paneStyle = this.animated ? {
							// 有拖动动画时或指定标签内容显示时，为visible
							visibility: this.swipeAnimated || tab.show ? 'visible' : 'hidden',
							height: tab.show ? 'auto' : height + 'px'
						} : {
							display: tab.show ? 'block' : 'none'
						};
						this.$set(tab, "paneStyle", paneStyle)
					})
				})
			},
			// 禁止swiper组件手动滑动
			stopTouchMove() {
				if (!this.swipeable) {
					event.stopPropagation()
				}
			},
			// swiper组件的current改变时会触发 change 事件
			onSwiperChange(e) {
				const current = e.target.current || e.detail.current
				this.$emit('input', current) //更新v-model绑定的值
			},
			touchStart(e) {
				// 禁止滑动
				if (!this.swipeable) return
				this.touchInfo.inited = true //touch开始时,将touchInfo对象设置为已初始化状态
				const touch = e.touches[0];
				// 记录touch位置的横坐标与纵坐标
				this.touchInfo.startX = touch.pageX
				this.touchInfo.startY = touch.pageY

				this.touchInfo.moved = false //用来判断是否是一次移动
			},
			touchMove(e, index) {
				if (!this.touchInfo.inited) return
				const {
					pageX,
					pageY
				} = e.changedTouches[0];
				const {
					startX,
					startY
				} = this.touchInfo || {}

				// 滑动方向不为左右时阻止
				const direction = getDirection(startX, startY, pageX, pageY)
				if (direction != 3 && direction != 4) return
				e.stopPropagation()

				// 横坐标偏移量
				const deltaX = pageX - startX

				// 标记是左滑还是右滑
				const isLeftSide = deltaX >= 0
				// 如果当前为第一页内容，则不允许左滑；最后一页内容，则不允许右滑
				if ((isLeftSide && index == 0) || (!isLeftSide && index == this.dataLen - 1)) {
					return
				}
				this.touchInfo.isLeftSide = isLeftSide
				this.touchInfo.moved = true
				this.touchInfo.deltaX = Math.abs(deltaX)
				// 改变标签内容的样式，模拟拖动动画效果
				if (this.swipeAnimated) {
					const offsetWidth = this.contentWidth * this[valueField] * -1 + deltaX
					this.changeTrackStyle(true, 0, offsetWidth)
				}
			},
			touchEnd(e, index) {
				if (!this.touchInfo.moved) return
				const {
					isLeftSide,
					deltaX
				} = this.touchInfo || {}
				// 移动的横坐标偏移量大于指定的滚动阈值时,则切换显示状态,否则还原
				if (Math.abs(deltaX) > Number(this.swipeThreshold)) {
					// 根据是否为左滑查找需要滑动到的标签内容页下标，切换标签内容
					index = index + (isLeftSide ? -1 : 1)
					if (index > -1 && index < this.dataLen) this.handleClick(index)
				} else {
					this.changeTrackStyle(false, this.duration)
				}
				// 一次touch完成后,重置touchInfo对象尚未初始化状态
				this.touchInfo.inited = false
			},
			// 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘
			resize() {
				this.init()
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("css/index.less");
</style>
