import router from '@/router'
import store from '@/store'
import { getToken } from '@/utils/auth'

console.log(router.getRoutes())
// 路由守卫
router.beforeEach((to, from, next) => {
	// 获取本地存储的token
	if(!to.name) {
		next('/404')
	} else {
		if(getToken()) {
			next()
		} else {
			if(to.name === 'Login' || to.name === '404') {
				next()
			} else {
				 next('/login')
			}
		}
	}
})