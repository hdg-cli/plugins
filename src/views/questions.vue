<template>
    <div class="page">
        <search @onSearch="onSearch"></search>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="cell" v-for="(item, index) in list" :key="index">
                    <div class="cell-question">请问有哪些车型</div>
                    <div class="cell-answer">
                        <span>答：</span>
                        <span>有低配，中配，高配三种车型</span>
                    </div>
                    <div class="cell-btn">
                        <van-button plain type="primary" size="mini">复制答案</van-button>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
        <!-- 回到顶部 -->
        <ScrollTop></ScrollTop>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { List as vanList, PullRefresh as vanPullRefresh, Button as vanButton } from 'vant'
import Search from '@/components/Search.vue'
import ScrollTop from '@/components/ScrollTop.vue'

const searchVal = ref('')
const list: any = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const onSearch = (val: string) => {
    searchVal.value = val
    alert(val)
}

const onLoad = () => {
    setTimeout(() => {
        if (refreshing.value) {
            list.value = []
            refreshing.value = false
        }

        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1)
        }
        loading.value = false

        if (list.value.length >= 40) {
            finished.value = true
        }
    }, 1000)
}

const onRefresh = () => {
    // 清空列表数据
    finished.value = false

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true
    onLoad()
}
</script>

<style lang="scss" scoped>
.page {
    padding-top: calc(36px + 0.6rem);
}
.cell {
    width: calc(100% - 0.6rem);
    padding: 0.2rem 0.15rem;
    margin: 0.15rem auto;
    line-height: 1.5;
    border-radius: 0.12rem;
    background-color: #fff;
    text-align: left;
}
.cell-btn {
    text-align: right;
}
.cell-question {
    margin-bottom: 0.1rem;
}
.cell-answer {
    color: #999;
}
.cell-answer span:first-child {
    color: red;
}
</style>
