import request from '@/utils/request';

export function getRoles() {
	return request({
		url: '/api/services/app/Role/GetAll',
		method: 'get'
	});
}

export function getRole(params) {
	return request({
		url: '/api/services/app/Role/Get',
		method: 'get',
		params: params
	});
}

export function addRole(data) {
	return request({
		url: '/api/services/app/Role/Create',
		method: 'post',
		data
	});
}
export function updateRole(data) {
	return request({
		url: '/api/services/app/Role/Update',
		method: 'put',
		data
	});
}

export function deleteRole(params) {
	return request({
		url: '/api/services/app/Role/Delete',
		method: 'delete',
		params: params
	});
}