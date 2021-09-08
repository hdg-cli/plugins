import { getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = () => ({
	token: getToken(),
	name: '',
	avatar: '',
	bindStatus: false
})

const getters = {}

const actions = {
	async GetUserInfo ({ state: any, commit }) {
		const userInfo: any = await getUserInfo()
		if(userInfo) {
			commit('SET_BIND_STATUS', false)
			commit('SET_TOKEN', userInfo.token)
			commit('SET_NAME', userInfo.user.name)
			commit('SET_AVATAR', userInfo.user.avatar)
			setToken(userInfo.token)
		}
	},
	LogOut({ commit }) {
		return new Promise(resolve => {
			console.log('登出...')
			commit('SET_TOKEN', '')
			commit('SET_NAME', '')
			commit('SET_AVATAR', '')
			removeToken()
			resolve(1)
		})
	}
}

const mutations = {
	SET_TOKEN (state: any, token: string) {
		state.token = token
	},
	
	SET_NAME (state: any, name: string) {
		state.name = name
	},
	
	SET_AVATAR (state: any, avatar: string) {
		state.avatar = avatar
	},
	
	SET_BIND_STATUS (state: any, bindStatus: string) {
		state.bindStatus = bindStatus
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
