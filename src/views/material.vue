<template>
	<div class="page">
		<!-- 搜索 -->
		<search @onSearch="onSearch"></search>
		<van-tabs v-model:active="active" animated>
		  <van-tab v-for="item in options" :title="item.label">
		    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
		      <van-list
		        v-model:loading="loading"
		        :finished="finished"
		        finished-text="没有更多了"
		        @load="onLoad"
		      >
						<!-- 视频 -->
						<Video v-if="item.value == 'video'" :list="list"></Video>
						<!-- 图片 -->
						<Image v-else-if="item.value == 'image'" :list="list"></Image>
						<!-- 文件 -->
						<File v-else :list="list"></File>
		      </van-list>
		    </van-pull-refresh>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted, nextTick } from 'vue'
	import { Tab, Tabs, List, PullRefresh } from 'vant'
	import Search from '@/components/Search.vue'
	import Video from '@/components/Video.vue'
	import Image from '@/components/Image.vue'
	import File from '@/components/File.vue'
	import {
		getReq
	} from '@/api/login'
	export default defineComponent({
	  name: 'Material',
	  components: {
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[List.name]: List,
			[PullRefresh.name]: PullRefresh,
			Search,
			Video,
			Image,
			File
	  },
		setup() {
			const list = ref([1, 2, 3])
			const loading = ref(false)
			const finished = ref(false)
			const refreshing = ref(false)
			const searchVal = ref('')
			const active = ref(0)
			const options = ref([{label: '视频', value: 'video'}, {label: '图片', value: 'image'}, {label: '文件', value: 'file'}])
			
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
			
			
			onMounted(() => {
				getReq({name: 22})
			})
			
			const onSearch = (val: string) => {
				searchVal.value = val
				alert(val)
			}
			
			return {
				list,
				onLoad,
				loading,
				finished,
				onRefresh,
				refreshing,
				active,
				options,
				onSearch
			};
		}
	})
</script>

<style scoped>
	.page {
		padding-top: calc(36px + .6rem);
	}
	:deep(.van-tab--active) {
		font-weight: bold;
	}
	:deep(.van-tabs__line) {
		background-color: #4E6EF2;
	}
	:deep(.van-tabs__wrap) {
		border-bottom: 1px solid #eee;
	}
</style>
