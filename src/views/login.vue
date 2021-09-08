<template>
	<div class="page">
		<canvas class="canvas" id="qrcode" ref="qrDom"></canvas>
		<p>{{name}} 微信扫一扫登录</p>
	</div>
</template>
<script lang="ts">
	import { defineComponent, ref, onMounted, nextTick, computed  } from 'vue'
	import QRCode from 'qrcode'
	import {useStore} from 'vuex'
	import {
		getReq
	} from '@/api/login'
	export default defineComponent({
		name: 'Login',
		setup() {
			const url = ref('')
			const qrDom = ref(null)
			let name = ref('')
			const store = useStore()
			
			onMounted(() => {
				// 获取用户信息
				store.dispatch('user/GetUserInfo')
				
			})
			
			nextTick(() => {
				getUrl()
				getReq({name: 2})
			})
			
			
			
			name = computed(() => {
				return store.state.user.name
			})
			
			const getUrl = () => {
				url.value = 'https://www.baidu.com'
				qrcode(url)
			}
			
			const qrcode = (url: any) =>{
				let oQrcode = document.getElementById('qrcode')
				oQrcode!.innerHTML = ''
				QRCode.toCanvas(oQrcode, 
					url.value,
					 {
						 errorCorrectionLevel: 'H', //容错率 L, M, Q, H
						 margin: 2,
						 width: 180,
						 color: {
							 dark: '#000000ff', // 颜色
							 light: '#ffffff', // 亮度
						 }
					 },
					 (error)  => {
						 if(error) console.log(error)
						 console.log('登录二维码生成成功')
					 }
				)
			}
			
			return {
				url,
				qrDom,
				name
			}
		}
	})
</script>

<style scoped>
	.page {
		background-color: #fff;
	}
	.canvas {
		border: 1px solid #eee;
		margin: 1rem 0 .5rem;
	}
</style>
