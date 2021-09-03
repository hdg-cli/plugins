/**
 * Mocking client-server processing
 */
const _user = {
	user: {avatar: null, id: 996, name: 'gimc'},
	roleList: ['技术'],
	privilegeList: [],
	token: '1234567890'
}

export default {
  async getUserInfo () {
    await wait(100)
    return _user
  }
}

function wait (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}