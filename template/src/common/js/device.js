/* eslint-disable */
/**
 * 获取设备类型 封装device
 */
let device = {
  userAgent: window.navigator.userAgent.toLowerCase()
}

const api = {
  ios() {
    return this.iphone() || this.ipod() || this.ipad();
  },
  iphone() {
    return !this.windows() && find('iphone');
  },
  ipod() {
    return find('ipod');
  },
  ipad() {
    return find('ipad');
  },
  android() {
    return !this.windows() && find('android') && find('mobile');
  },
  isWeChat() {
    return find('micromessenger');
  },
  windows() {
    return find('windows');
  },
  mobileApp() {
    return !this.isWeChat() && this.iphone() || this.android() || this.ipod();
  },
  tablet() {
    return this.ipad() || this.isWeChat();
  },
  pc() {
    return !this.tablet() && !this.mobileInWeChat();
  },
}

function find(needle) {
  return device.userAgent.indexOf(needle) !== -1;
}
  
Object.assign(device, api)
export default device