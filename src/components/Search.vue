<template>
	<form class="search-form" action="/">
	  <van-search
	    v-model.trim="searchVal"
			left-icon="none"
	    show-action
	    placeholder="请输入搜索关键词"
	    @clear="onClear"
	  >
			<template #action>
		    <div class="search-btn" @click="onSearch">搜索</div>
		  </template>
		</van-search>
	</form>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { Search as vanSearch } from 'vant'
	
	// defineEmits 声明 emits
	const emit = defineEmits(['onSearch'])

	const searchVal = ref('')
	
	const onSearch = () => {
		emit('onSearch', searchVal.value)
	}
	
	const onClear = () => {
		onSearch()
	}
	
	// 当父组件通过模板 ref 的方式获取到当前组件的实例，获取到的实例会像这样 { searchVal: String }
	defineExpose({
		searchVal
	})
			
</script>

<style scoped>
	.search-form {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		padding: .3rem;
		background-color: #fff;
		z-index: 100;
	}
	.van-search {
		width: calc(100% - .6rem);
		margin: 0 auto;
		padding: 0;
		border: 1px solid var(--my-border-color);
		border-radius: .3rem;
		overflow: hidden;
	}
	.search-btn {
		font-weight: 700;
	}
	:deep(.van-search__content) {
		background: none;
	}
	:deep(.van-search__action) {
		width: 1.5rem;
		background-color: var(--van-button-primary-background-color);
		color: #fff;
	}
</style>
