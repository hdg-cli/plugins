import axios from 'axios'
import { Toast, Dialog } from 'vant'
import { host } from '@/constant'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 不知为何，此处使用 import router from "@/router" 无效

// 创建axios实例
const service = axios.create({
	baseURL: host, 
	timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
	let token = getToken()
	console.log('token: ', token)
  if (token) {
    config.headers['X-Token'] = token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
	response => {
   const res = response.data
	 let fileType = ['application/octet-stream', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
	 if (res.msg !== 'success' && (!fileType.includes(res.type))) {
	   // 登录过期拦截
	   if(response.data.code === 403) {
	     if(window.location.hash != "#/") {
	       if(window.location.hash == "#/login") {
	         return Promise.reject(response.data)
	       }
				 Dialog.confirm({
					 title: '确认登出',
					 message: '你已被登出，可以取消继续留在该页面，或者重新登录',
					 confirmButtonText: '重新登录',
					 cancelButtonText: '取消',
				 }).then(() => {
					 store.dispatch('user/LogOut').then(() => {
					   location.reload();// 为了重新实例化vue-router对象 避免bug
					 });
				 })
	     }
	     return false
	   }
	   return Promise.reject(response.data)
	 } else {
	   return response.data
	 }
	},
  error => {
    console.log('err' + error)// for debug
		Toast({
		  message: error.message,
		  position: 'bottom',
		  duration: 5 * 1000
		});
		
    return Promise.reject(error)
  }
)

export default service