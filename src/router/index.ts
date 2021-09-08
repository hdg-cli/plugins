import Vue from 'vue'
import * as VueRouter from 'vue-router'
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
		path: '/404',
		name: '404',
		meta: { title: "404", keepAlive: false, requireAuth: false },
		hidden: true,
		component: () => import('@/views/404.vue') // 懒加载
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
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})

export default router