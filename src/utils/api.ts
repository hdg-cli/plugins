import request from './request'
import qs from 'qs'

// get 方法
export function getReq(params: any) {
	return request({
		url: '/material/tag/byGroup',
		method: 'get',
		params
	})
}

// post 方法
export function postReq(data: any) {
	return request({
		url: '/api',
		method: 'post',
		data
	})
}

// put 方法
export function putReq(data: any) {
	return request({
		url: '/api',
		method: 'put',
		params: data,
		paramsSerializer: function(params: any) {
			return qs.stringify(params, {arrayFormat: 'repeat'})
		},
		data
	})
}

// delete 方法
export function deleteReq(data: any) {
	return request({
		url: '/api',
		method: 'delete',
		params: data,
		paramsSerializer: function(params: any) {
			return qs.stringify(params, {arrayFormat: 'repeat'})
		},
		data
	})
}

// delete 方法
export function deleteReq2(id: number) {
  return request({
    url: `/api/${id}`,
    method: 'delete'
  })
}
