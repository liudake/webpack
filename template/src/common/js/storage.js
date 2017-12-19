/* eslint-disable */

// 本地cookie存储服务
const cookieStorageService = (function () {
  // 设置数据
  const setData = function (key, data, expire) {
    const saveData = data;
    if (!expire) {
      const Days = 365;
      const exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      expire = exp.toGMTString();
    }
    const cookieStr = `${key}=${saveData};expires=${expire};path=/`;
    document.cookie = cookieStr;
  };
  // 获取数据
  const getData = function (key) {
    const arr = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
    if (arr !== null) {
      if (arr[2] && arr[2] !== 'undefined') {
        return JSON.parse(arr[2]);
      }
    }
    return null;
  };
  // 清除数据
  const removeData = function (key) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const expire = exp.toGMTString();
    const cval = getData(key) || '';
    setData(key, cval, expire);
  };
  return {
    get: getData,
    set: setData,
    remove: removeData
  };
}());

// 本地存储服务
const localStorageService = (function () {
  // 设置数据
  const setData = function (key, data) {
    if (data === undefined) {
      return remove(key)
    }
    window.localStorage.setItem(key, serialize(data));
  };
  // 获取数据
  const getData = function (key, def) {
    const saveData = deserialize(window.localStorage.getItem(key));
    return (saveData === undefined ? def : saveData)
  };
  // 清除数据
  const remove = function (key) {
    window.localStorage.removeItem(key);
  };
  const clear = function () {
    window.localStorage.clear();
  }
  return {
    set: setData,
    get: getData,
    remove
  };
}());

// 会话存储服务
const sessionStorageService = (function () {
  // 设置数据
  const set = function (key, data) {
    const saveData = serialize(data)
    return window.sessionStorage.setItem(key, saveData);
  };
  // 获取数据
  const get = function (key, def) {
    let settings = deserialize(window.sessionStorage.getItem(key))
    return (settings === undefined ? def : settings)
  };
  // 清除数据
  const remove = function (key) {
    return window.sessionStorage.removeItem(key);
  };
  return {
    set,
    get,
    remove
  };
}());

// 客户端存储服务
const constantStorageService = (function () {
  const setData = function (key, data) {
    localStorageService.set(key, data);
    cookieStorageService.set(key, data);
  };
  const getData = function (key) {
    let data = localStorageService.get(key);
    if (!data) {
      data = cookieStorageService.get(key);
    }
    return data;
  };
  const removeData = function (key) {
    localStorageService.remove(key);
    cookieStorageService.remove(key);
  };
  return {
    get: getData,
    set: setData,
    remove: removeData
  };
}());

function serialize(val) {
  return JSON.stringify(val)
}
function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}
export {
  cookieStorageService,
  localStorageService,
  sessionStorageService,
  constantStorageService
};
