<template>
	<div class="wrap">
		<van-row gutter="20" align="center" v-for="item in list">
			<van-col span="18">
				文件名称{{item}}.xlsl
			</van-col>
			<van-col span="6">
				<van-button plain type="primary" size="mini">复制链接</van-button>
			</van-col>
		</van-row>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { Col as vanCol, Row as vanRow, Button as vanButton} from 'vant'
	
	// 使用 defineProps 声明 props
	const props = defineProps({
		list: {
			type: Array,
			default: () => []
		}
	})
</script>

<style scoped>
	.wrap {
		width: calc(100% - .3rem);
		margin: .15rem auto;
	}
	.van-row {
		padding: .3rem .2rem;
		margin-bottom: .15rem;
		border-radius: .12rem;
		background-color: #fff;
	}
	.van-col--18 {
		font-size: .32rem;
		text-align: left;
	}
</style>
