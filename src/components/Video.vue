<template>
	<div>
		<van-row gutter="20" align="center" v-for="item in list">
			<van-col span="8" @click="showPlayer">
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
		<!-- 视频播放器 -->
		<van-popup 
			v-model:show="show" 
			safe-area-inset-bottom="true" 
			closeable="true" 
			teleport="body"
			@close="hidePlayer">
			<video id="video" controls src="https://da-library.oss-cn-shenzhen.aliyuncs.com/b97e4688680949f4a11390bbd9eac0fa.mp4"></video>
		</van-popup>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, nextTick } from 'vue'
	import { Col, Row, Image as VanImage, Button, Icon, Popup } from 'vant'
	export default defineComponent({
	  name: 'Video',
		components: {
			[Col.name]: Col,
			[Row.name]: Row,
			[VanImage.name]: VanImage,
			[Button.name]: Button,
			[Icon.name]: Icon,
			[Popup.name]: Popup
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
			let show = ref(false)
			
			const showPlayer = () => {
				show.value = !show.value
				nextTick(() => {
					const video = document.getElementById('video')
					video.play()
				})
			}
			
			const hidePlayer = () => {
				nextTick(() => {
					const video = document.getElementById('video')
					video.pause()
				})
			}
			
			return {
				show,
				showPlayer,
				hidePlayer
			}
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
	video {
		width: 7.5rem;
		max-height: 100%;
	}
</style>
