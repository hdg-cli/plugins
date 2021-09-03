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

<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import { Col, Row, Button} from 'vant'
	export default defineComponent({
	  name: 'File',
		components: {
			[Col.name]: Col,
			[Row.name]: Row,
			[Button.name]: Button,
		},
		props: {
			list: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		setup() {
			
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
