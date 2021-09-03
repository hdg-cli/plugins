import login from '@/api/login'

const state = () => ({
	token: '',
	name: '',
	avatar: '',
	bindStatus: false
})

const getters = {}

const actions = {
	async GetUserInfo ({ state, commit }) {
		const userInfo: any = await login.getUserInfo()
		if(userInfo) {
			commit('SET_BIND_STATUS', false)
			commit('SET_TOKEN', userInfo.token)
			commit('SET_NAME', userInfo.user.name)
			commit('SET_AVATAR', userInfo.user.avatar)
		}
	},
	LogOut({ commit }) {
		return new Promise(resolve => {
			console.log('登出...')
			commit('SET_TOKEN', '')
			commit('SET_NAME', '')
			commit('SET_AVATAR', '')
			resolve()
		})
	}
}

const mutations = {
	SET_TOKEN (state, token) {
		state.token = token
	},
	
	SET_NAME (state, name) {
		state.name = name
	},
	
	SET_AVATAR (state, avatar) {
		state.avatar = avatar
	},
	
	SET_BIND_STATUS (state, bindStatus) {
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
