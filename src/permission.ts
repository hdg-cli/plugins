import router from './router'
import { getToken } from './utils/auth'

// 路由守卫
router.beforeEach((to: any, from: any, next: any) => {
	// 网页标题
	if (to.meta.title) {
		document.title = to.meta.title
	}
	// 是否需要登录
	if(to.meta.requireAuth) {
		// 获取本地存储的 token
		if(getToken()) {
			next()
		} else {
			next('/login')
		}
	} else {
		next()
	}
})