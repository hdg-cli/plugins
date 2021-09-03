<template>
	<van-row gutter="20" align="center" v-for="item in list">
		<van-col span="8">
			<div class="image-box">
				<van-image
				  width="100%"
				  height="100%"
				  fit="contain"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				<span class="play-icon"><van-icon name="play-circle" size="1.5em" color="#fff" /></span>
			</div>
		</van-col>
		<van-col span="10">
			视频名称{{item}}
		</van-col>
		<van-col span="6">
			<van-button plain type="primary" size="mini">复制链接</van-button>
		</van-col>
	</van-row>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import { Col, Row, Image as VanImage, Button, Icon, Lazyload } from 'vant'
	export default defineComponent({
	  name: 'Video',
		components: {
			[Col.name]: Col,
			[Row.name]: Row,
			[VanImage.name]: VanImage,
			[Button.name]: Button,
			[Icon.name]: Icon,
			[Lazyload.name]: Lazyload
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
	.van-row {
		width: calc(100% - .3rem);
		box-sizing: border-box;
		padding: .3rem .2rem;
		margin: .15rem auto;
		border-radius: .12rem;
		background-color: #fff;
	}
	.image-box {
		position: relative;
		line-height: 0;
	}
	.van-image {
		border-radius: .1rem;
		overflow: hidden;
	}
	.play-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.van-col--10 {
		text-align: left;
		font-size: .32rem;
	}
</style>
