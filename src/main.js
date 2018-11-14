/**
 * 入口js
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, //使用vue-router
  store, //使用vuex
})
