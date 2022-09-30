<template>
	<view class="container">
		<view class="form">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="姓名" name="title" required><uni-easyinput type="text" v-model="formData.title" placeholder="请输入姓名" /></uni-forms-item>
				<uni-forms-item label="性别" required name="sex"><uni-data-checkbox mode="tag" :localdata="range" v-model="formData.sex"></uni-data-checkbox></uni-forms-item>
				<uni-forms-item label="联系电话" name="phone" required><uni-easyinput type="number" v-model="formData.phone" placeholder="请输入联系电话" /></uni-forms-item>
				<uni-forms-item label="意向学校" name="school"><uni-easyinput type="text" v-model="formData.school" placeholder="请输入意向学校" /></uni-forms-item>
				<uni-forms-item label="意向专业" name="zhuanye"><uni-easyinput type="text" v-model="formData.zhuanye" placeholder="请输入意向专业" /></uni-forms-item>
				<uni-forms-item label="所在城市" name="city">
					<uni-data-picker v-model="formData.city" :localdata="cityDataFn" popup-title="请选择所在城市"></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="微信或QQ" name="wxqq"><uni-easyinput type="text" v-model="formData.wxqq" placeholder="请输入微信或QQ" /></uni-forms-item>
				<uni-forms-item label="备注信息" name="note"><uni-easyinput type="textarea" v-model="formData.note" placeholder="请输入备注信息" /></uni-forms-item>
			</uni-forms>
			<button class="submit-btn" @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
import { submitSign, submitRegInfo } from '@/api/form.js';
import cityData from '@/config/cityData.js';
export default {
	data() {
		return {
			range: [
				{
					value: '保密',
					text: '保密'
				},
				{
					value: '男',
					text: '男生'
				},
				{
					value: '女',
					text: '女生'
				}
			],
			// 表单数据
			formData: {
				sex: '保密',
				school: '',
				zhuanye: ''
			},

			rules: {
				title: {
					rules: [
						{
							required: true,
							errorMessage: '请输入姓名'
						},
						{
							minLength: 2,
							maxLength: 10,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
						}
					]
				},
				phone: {
					rules: [
						{
							required: true,
							errorMessage: '请输入电话'
						},
						{
							pattern: '^(?:(?:\\+|00)86)?1\\d{10}$',
							errorMessage: '您的联系电话不正确，请重新输入'
						}
					]
				}
			}
		};
	},

	onLoad(e) {
		if (e.schoolName) this.formData.school = e.schoolName;
		if (e.majorName) this.formData.zhuanye = e.majorName;
	},
	methods: {
		/**
		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		 * @param {String} name 字段名称
		 * @param {String} value 表单域的值
		 */
		// binddata(name,value){
		// 通过 input 事件设置表单指定 name 的值
		// 触发提交表单
		submit() {
			// console.log(this.cityDataFn);
			const _this = this;

			this.$refs.form
				.validate()
				.then(res => {
					// 如果用city字段就格式化
					let city = res.city;
					if (city) {
						for (const v of _this.cityDataFn) {
							for (const vc of v.children) {
								if (vc.value === city && v.value.split('-')[0] === city.split('-')[0]) {
									res.city = `${v.text}-${vc.text}`;
								}
							}
						}
					}

					let { title: name, sex, phone, school = '', zhuanye = '', city: region = '', wxqq = '', note = '' } = res;
					let title = phone + ' ' + name;
					let fromPage = getCurrentPages()[getCurrentPages().length - 2];
					let fromPath = (fromPage && fromPage.$page.fullPath) || '';
					let content = `
						<p>来自上职校网百度小程序: ${fromPath}</p>
						<h5>姓    名：${name}	</h5>
						<h5>性    别：${sex}	</h5>
						<h5>联系电话：<span style="color:red;">${phone}<span>	</h5>
						<h5>意向学校：${school}	</h5>
						<h5>意向专业：${zhuanye}	</h5>
						<h5>所在地区：${region}	</h5>
						<h5>微信或QQ：${wxqq}	</h5>
						<h5>备注信息：${note}	</h5>
					`;
					// console.log('表单数据信息：', res);
					submitSign(res, fromPath).then(r => {
						uni.showToast({
							title: '提交成功！',
							icon: 'success',
							success: () => {
								uni.navigateBack({
									delta: 1
								});
								submitRegInfo(title, content).then(r => {
									console.log(r);
								});
							}
						});
					});
				})
				.catch(err => {
					uni.showModal({
						title: '提示',
						content: '提交失败,请重试！',
						showCancel: false
					});
					console.log('表单错误信息：', err);
				});
		}
	},
	computed: {
		cityDataFn() {
			let items = [];
			cityData.provinces.forEach((item, index) => {
				let text = item.provinceName;
				let value = `${index + 1}-0`;
				let children = item.citys.map((sub, subindex) => {
					return {
						text: sub.cityName,
						value: `${index + 1}-${subindex + 1}`
					};
				});
				let obj = {
					text,
					value,
					children
				};
				items.push(obj);
			});
			if (items && items.length > 0) return items;
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	padding: 10px 15px;
	background-color: #fff !important;
	min-height: 100vh;
}

/deep/ .form {
	padding: 0px 10px;
	.checklist-box.is--tag.is-checked {
		background-color: $szx-color-primary !important;
		border-color: $szx-color-primary !important;
	}
	.sw-1__uni-forms-item {
		margin-bottom: 18px;
	}
	.sw-1__uni-forms-item__label {
		padding: 0;
		margin-right: 5px;
		white-space: nowrap !important;
	}
	.uni-forms-item__label {
		white-space: nowrap;
		margin-right: 10rpx;
	}
	.uni-forms-item .is-required {
		margin-left: -7px;
	}
	.submit-btn {
		color: #fff;
		font-weight: 700;
		font-size: 18px;
		padding: 6px 0;
		background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
		text-align: center;
		text-transform: uppercase;
		transition: 0.5s;
		background-size: 200% auto;
		color: white;
		box-shadow: 0 0 20px #eee;
		border-radius: 10px;
		display: block;
		&:hover {
			background-position: right center;
			color: #fff;
			text-decoration: none;
		}
	}
}
</style>
