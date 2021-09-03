<template>
  <div>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="success">成功按钮</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Button } from 'vant'
export default defineComponent({
  name: 'HelloWorld',
	components: {
		[Button.name]: Button
	},
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5rem;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
p {
	margin: .5rem;
}
</style>
