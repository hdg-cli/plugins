<template>
    <div class="page">
        <canvas class="canvas" id="qrcode" ref="qrDom"></canvas>
        <p>{{ name }} 微信扫一扫登录</p>
        <ul style="margin: 20px">
            <li style="margin-bottom: 15px; text-decoration: underline" @click="goPage('luck')">九宫格抽奖</li>
            <li style="margin-bottom: 15px; text-decoration: underline" @click="goPage('material')">素材页</li>
            <li style="margin-bottom: 15px; text-decoration: underline" @click="goPage('questions')">问答页</li>
            <li style="margin-bottom: 15px; text-decoration: underline" @click="goPage('words')">话术页</li>
            <li style="margin-bottom: 15px; text-decoration: underline" @click="goPage('404')">404页</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import QRCode from 'qrcode'
import { getReq } from '@/api/login'

// ref 赋予原始数据类型响应式特性
const url = ref('')
const qrDom = ref(null)
const store = useStore()
const router = useRouter()

onMounted(() => {
    // 获取用户信息
    store.dispatch('user/GetUserInfo')
})

nextTick(() => {
    getUrl()
    getReq({ name: 2 })
})

const name = computed(() => {
    return store.state.user.name
})

const getUrl = () => {
    url.value = 'https://www.baidu.com'
    qrcode(url)
}

const qrcode = (url: any) => {
    let oQrcode = document.getElementById('qrcode')
    oQrcode!.innerHTML = ''
    QRCode.toCanvas(
        oQrcode,
        url.value,
        {
            errorCorrectionLevel: 'H', //容错率 L, M, Q, H
            margin: 2,
            width: 180,
            color: {
                dark: '#000000ff', // 颜色
                light: '#ffffff' // 亮度
            }
        },
        error => {
            if (error) console.log(error)
            console.log('登录二维码生成成功')
        }
    )
}

const goPage = (path: string) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
.page {
    background-color: #fff;
}
.canvas {
    border: 1px solid #eee;
    margin: 1rem 0 0.5rem;
}
</style>
