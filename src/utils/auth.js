import Cookies from 'js-cookie';

const TokenKey = 'token';
const UserIdKey = 'currentUserId';

export function getToken() {
	return Cookies.get(TokenKey);
}

export function setToken(token) {
	return Cookies.set(TokenKey, token);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}

export function setCurrentUserId(userId) {
	Cookies.set(UserIdKey, userId);
}

export function getCurrentUserId() {
	return Cookies.get(UserIdKey);
}

export function removeCurrentUserId() {
	return Cookies.remove(UserIdKey);
}
