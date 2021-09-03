const getters = {
	token: state => state.user.token,
	avatar: state => state.user.avatar,
	name: state => state.user.name,
	bindStatus: state => state.user.bindStatus
}

export default getters