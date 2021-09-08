const getters = {
	token: (state: any) => state.user.token,
	avatar: (state: any) => state.user.avatar,
	name: (state: any) => state.user.name,
	bindStatus: (state: any) => state.user.bindStatus
}

export default getters