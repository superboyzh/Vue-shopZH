import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    // 配置全局总线
    Vue.prototype.$bus = this
  }
})
