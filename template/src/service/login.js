import http from '@/api/http';

import { LOGIN_AUTH_URL } from '@/api/constants';

export function loginAuth(params) {
  return http.post(LOGIN_AUTH_URL, params);
}
