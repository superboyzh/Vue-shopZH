import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入路由
import VueRouter from 'vue-router'

import router from './router/index'
// 使用路由
Vue.use(VueRouter)

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  beforeCreate(){
    // 配置全局总线
    Vue.prototype.$bus = this
  }
})
