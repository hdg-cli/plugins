<template>
	<div class="water-fall">
		<div class="water-fall-cell" v-for="item in list">
			<img src="https://img.yzcdn.cn/vant/cat.jpeg" @click="preview('https://img.yzcdn.cn/vant/cat.jpeg')" alt="加载失败" />
			<p class="cell-title">图片名称图片名称图片名称图片名称{{item}}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import { Image as VanImage, ImagePreview} from 'vant'
	export default defineComponent({
	  name: 'Image',
		components: {
			[VanImage.name]: VanImage
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
			const preview = (src) => {
				ImagePreview({
					images: [src], 
					closeable: true,
					showIndex: false
				})
			}
			
			return {
				preview
			}
		}
	})
</script>

<style scoped>
	.water-fall {
		width: calc(100% - .15rem);
		margin: .15rem auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.water-fall-cell {
		width: calc(50% - .15rem);
		padding: .2rem;
		margin: 0 .075rem .15rem;
		border-radius: .12rem;
		background-color: #fff;
		box-sizing: border-box;
	}
	.water-fall-cell img {
		width: 100%;
		border-radius: .1rem;
	}
	.water-fall-cell p {
		font-size: .32rem;
		margin-top: .1rem;
		line-height: 1.5;
		display: -webkit-box;    
		-webkit-box-orient: vertical;    
		-webkit-line-clamp: 2;    
		overflow: hidden;
		text-align: left;
	}
</style>
