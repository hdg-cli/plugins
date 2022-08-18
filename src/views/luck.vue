<template>
    <div class="page">
        <LuckGrid @getWinningIndex="getWinningIndex" @luckDrawFinish="luckDrawFinish" :prize_arr="luck_draw.prize_arr" />
    </div>
</template>

<script setup lang="ts">
import LuckGrid from '@/components/LuckGrid/index.vue'

// 奖品配置
const luck_draw = reactive({
    prize_arr: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
})

// 开始抽奖
function getWinningIndex(callback) {
    // 接口请求中奖信息
    const lucky_draw_param = {
        startIndex: 0, //开始抽奖位置，从0开始
        totalCount: 6, //一共要转的圈数
        winningIndex: 2, //中奖的位置，从0开始
        speed: 50 //抽奖动画的速度 [数字越大越慢,默认100]
    }
    callback(lucky_draw_param)
}

// 抽奖结果
function luckDrawFinish(param) {
    alert('中奖信息：' + param)
}
</script>

<style lang="scss" scoped>
.page {
    width: 100vw;
    height: 100vh;
}
</style>
