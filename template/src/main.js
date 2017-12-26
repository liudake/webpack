{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#less}}
import './common/less/index.less'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/less}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#vuex}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
//  关闭生产环境的调试信息
const isDebugMode = process.env.NODE_ENV !== 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.debug = isDebugMode{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.devtools = isDebugMode{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.productionTip = isDebugMode{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
