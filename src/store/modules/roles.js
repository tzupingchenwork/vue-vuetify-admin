import { getRoles, getRole, addRole, updateRole, deleteRole } from '@/api/roles';

const state = {
	roles: []
};

const mutations = {
	SET_ROLES: (state, roles) => {
		state.roles = roles;
	}
};

const actions = {
	getRoles({ commit }) {
		return new Promise((resolve, reject) => {
			getRoles()
				.then((response) => {
					const items = response.data.result.items;
					commit('SET_ROLES', items);
					resolve(items);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	getRole(id) {
		return new Promise((resolve, reject) => {
			getRole(id)
				.then((response) => {
					const items = response.data.result.items;
					resolve(items);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	addRole(info) {
		return new Promise((resolve, reject) => {
			addRole(info)
				.then((response) => {
					const items = response.data.result.items;
					resolve(items);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	updateRole(info) {
		return new Promise((resolve, reject) => {
			updateRole(info)
				.then((response) => {
					const items = response.data.result.items;
					resolve(items);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	deleteRole(id) {
		return new Promise((resolve, reject) => {
			deleteRole(id)
				.then((response) => {
					const res = response.data.result;
					resolve(res);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};