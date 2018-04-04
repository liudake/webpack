//  本地环境
let baseUrl = 'http://localhost:8080';
if (process.env.NODE_ENV === 'sitEnvironment') {
  //  测试环境
  baseUrl = ''; 
} else if (process.env.NODE_ENV === 'production') {
  //  生产环境
  baseUrl = '';
}

export const baseURL = baseUrl;

// 登入
export const LOGIN_AUTH_URL = '/login/auths';

