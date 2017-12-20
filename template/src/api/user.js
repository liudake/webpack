import http from './http'

export function getUserInfo() {
  const url = '/sessions/user'
  return http.get(url)
}
