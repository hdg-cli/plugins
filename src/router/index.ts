import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login.vue'

const routes = [
	{
		path: '/',
		redirect: '/login',
		name: ''
	},
	{
		path: '/login',
		name: 'Login',
		meta: { title: "登录", keepAlive: false, requireAuth: false },
		component: Login
	},
	{
		path: '/material',
		name: 'Material',
		meta: { title: "素材页", keepAlive: false, requireAuth: true },
		hidden: true,
		component: () => import('@/views/material.vue') // 懒加载
	},
	{
		path: '/questions',
		name: 'Questions',
		meta: { title: "问答页", keepAlive: false, requireAuth: true },
		hidden: true,
		component: () => import('@/views/questions.vue') // 懒加载
	},
	{
		path: '/words',
		name: 'Words',
		meta: { title: "话术页", keepAlive: false, requireAuth: true },
		hidden: true,
		component: () => import('@/views/words.vue') // 懒加载
	},
	{
		path: '/404',
		name: '404',
		meta: { title: "404", keepAlive: false, requireAuth: false },
		hidden: true,
		component: () => import('@/views/404.vue') // 懒加载
	},
	{ 
		path: "/:pathMatch(.*)*", // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
		redirect: "/404", 
		hidden: true 
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router