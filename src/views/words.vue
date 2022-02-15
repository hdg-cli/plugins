<template>
	<div class="page">
		<search @onSearch="onSearch"></search>
		<div>
			<van-sidebar v-model="active">
			  <van-sidebar-item title="标签名称" />
			  <van-sidebar-item title="标签名称" />
			  <van-sidebar-item title="标签名称" />
			</van-sidebar>
			<div class="refresh-box">
				<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
				  <van-list
				    v-model:loading="loading"
				    :finished="finished"
				    finished-text="没有更多了"
				    @load="onLoad"
				  >
						<div class="cell" v-for="(item, index) in list" :key="index">
							<div class="cell-question">请问有哪些车型</div>
							<div class="cell-btn">
								<van-button plain type="primary" size="mini">复制答案</van-button>
							</div>
						</div>
				  </van-list>
				</van-pull-refresh>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { Sidebar as vanSidebar, SidebarItem as vanSidebarItem, List as vanList, PullRefresh as vanPullRefresh, Button as vanButton } from 'vant'
	import Search from '@/components/Search.vue'

	const searchVal = ref('')
	const active = ref(0)
	const list = ref([])
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

<style scoped>
	.page {
		padding-top: calc(36px + .6rem);
	}
	.van-tabs__content--animated {
		padding-top: var(--van-tabs-line-height);
	}
	.van-sidebar {
			position: fixed;
			left: 0;
			z-index: 100;
			height: calc(100% - .6rem - 36px);
			background-color: #fff;
	}
	.refresh-box {
		padding-left: var(--van-sidebar-width);
	}
	.van-pull-refresh {
		padding: 0 .15rem;
	}
	.cell {
		/* width: calc(100% - .6rem); */
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
