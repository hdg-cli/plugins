<template>
	<div class="page">
		<search @onSearch="onSearch"></search>
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
		  <van-list
		    v-model:loading="loading"
		    :finished="finished"
		    finished-text="没有更多了"
		    @load="onLoad"
		  >
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
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import { List, PullRefresh, Button } from 'vant'
	import Search from '@/components/Search.vue'
	export default defineComponent({
	  name: 'Questions',
	  components: {
	    Search,
			[List.name]: List,
			[PullRefresh.name]: PullRefresh,
			[Button.name]: Button
	  },
		setup() {
			const searchVal = ref('')
			const list = ref([1, 2, 3])
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
			
			return {
				searchVal,
				onSearch,
				list,
				onLoad,
				loading,
				finished,
				refreshing,
				onRefresh
			}
		}
	})
</script>

<style scoped>
	.page {
		padding-top: calc(36px + .6rem);
	}
	.cell {
		width: calc(100% - .6rem);
		padding: .2rem .15rem;
		margin: .15rem auto;
		line-height: 1.5;
		border-radius: .12rem;
		background-color: #fff;
		text-align: left;
	}
	.cell-btn {
		text-align: right;
	}
	.cell-question {
		margin-bottom: .1rem;
	}
	.cell-answer {
		color: #999;
	}
	.cell-answer span:first-child {
		color: red;
	}
</style>
