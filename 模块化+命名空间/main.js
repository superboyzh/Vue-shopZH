import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store/index'
Vue.config.productionTip = false
// 使用插件

new Vue({
  el:'#app',
  render: h => h(App),
  store,
  beforeCreate(){
    // 配置全局总线
    Vue.prototype.$bus = this
  }
})
