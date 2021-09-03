<template>
	<div class="page">
		<canvas class="canvas" id="qrcode" ref="qrDom"></canvas>
		<p>{{$store.state.user.name}} 微信扫一扫登录</p>
	</div>
</template>
<script lang="ts">
	import { defineComponent, ref, onMounted, nextTick, computed  } from 'vue'
	import QRCode from 'qrcode'
	import {useStore} from 'vuex'
	import {
		getReq
	} from '@/utils/api'
	export default defineComponent({
		name: 'Login',
		setup() {
			const url = ref('')
			const qrDom = ref(null)
			let user = ref({})
			const store = useStore()
			
			onMounted(() => {
				// 获取用户信息
				store.dispatch('user/GetUserInfo')
				getReq()
			})
			
			nextTick(() => {
				getUrl()
			})
			
			
			
			computed(() => {
				// console.log('state:', store.state)
			})
			
			const getUrl = () => {
				url.value = 'https://www.baidu.com'
				qrcode(url)
			}
			
			const qrcode = (url) =>{
				let oQrcode = document.getElementById('qrcode')
				oQrcode.innerHTML = ''
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
				user
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
