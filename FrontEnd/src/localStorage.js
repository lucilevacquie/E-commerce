export function putUser(key, user) {
  return localStorage.setItem(key, JSON.stringify(user));
}

export function getUser(key) {
  return JSON.parse(localStorage.getItem(key)) || {};
}
