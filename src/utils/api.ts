import request from '@/utils/request'
import qs from 'qs'

// get 方法
export function getReq(params) {
	return request({
		url: '/material/tag/byGroup',
		method: 'get',
		params
	})
}

// post 方法
export function postReq(data) {
	return request({
		url: '/api',
		method: 'post',
		data
	})
}

// put 方法
export function putReq(data) {
	return request({
		url: '/api',
		method: 'put',
		params: data,
		paramsSerializer: function(params) {
			return qs.stringify(params, {arrayFormat: 'repeat'})
		},
		data
	})
}

// delete 方法
export function deleteReq(data) {
	return request({
		url: '/api',
		method: 'delete',
		params: data,
		paramsSerializer: function(params) {
			return qs.stringify(params, {arrayFormat: 'repeat'})
		},
		data
	})
}

// delete 方法
export function deleteReq2(id) {
  return request({
    url: `/api/${id}`,
    method: 'delete'
  })
}
