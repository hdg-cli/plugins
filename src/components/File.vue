<template>
    <div class="wrap">
        <van-row gutter="20" align="center" v-for="item in list">
            <van-col span="18">文件名称{{ item }}.xlsl</van-col>
            <van-col span="6">
                <van-button plain type="primary" size="mini">复制链接</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Col as vanCol, Row as vanRow, Button as vanButton } from 'vant'

// 使用 defineProps 声明 props
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>
.wrap {
    width: calc(100% - 0.3rem);
    margin: 0.15rem auto;
}
.van-row {
    padding: 0.3rem 0.2rem;
    margin-bottom: 0.15rem;
    border-radius: 0.12rem;
    background-color: #fff;
}
.van-col--18 {
    font-size: 0.32rem;
    text-align: left;
}
</style>
