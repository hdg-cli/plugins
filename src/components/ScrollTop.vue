<template>
    <!-- 回到顶部 -->
    <van-icon v-show="showBack" @click="backTop" class="back-top" name="back-top" color="#fff" size=".5rem" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon as vanIcon } from 'vant'

const showBack = ref(false)
const scrollNum = ref(0)
let timer: any = null

onMounted(() => {
    window.addEventListener('scroll', bodyScroll)
})

function bodyScroll() {
    const winHeight = window.innerHeight
    scrollNum.value = document.documentElement.scrollTop
    if (scrollNum.value > winHeight) {
        showBack.value = true
    } else {
        showBack.value = false
    }
    console.log(scrollNum.value)
}

onBeforeUnmount(() => {
    // 取消定时器
    if (timer) {
        clearInterval(timer)
        timer = null
    }

    // 取消滚动监听
    window.removeEventListener('scroll', bodyScroll)
})

function backTop() {
    if (timer) {
        clearInterval(timer)
        timer = null
    }

    let count = 200
    timer = setInterval(() => {
        scrollNum.value -= count > 60 ? count : 60
        if (scrollNum.value <= 0) {
            scrollNum.value = 0
            clearInterval(timer)
            timer = null
        }
        window.scrollTo(0, scrollNum.value)
        count--
    }, 10)
}
</script>

<style lang="scss" scoped>
.back-top {
    position: fixed;
    right: 0.2rem;
    bottom: 0.5rem;
    padding: 0.1rem;
    background: rgba(78, 110, 242, 0.3);
    border-radius: 100%;
    z-index: 100;
    cursor: pointer;
}
</style>
