import Vue from 'vue'
import App from './App'
import router from './router'

// 引入http.js文件,并将其注册为 vue 全局变量
import http from './utils/http'
// 引入element-ui模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
