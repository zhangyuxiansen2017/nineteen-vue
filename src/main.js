/**
 * 入口js
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Swipe, SwipeItem,Button } from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, //使用vue-router
  store, //使用vuex
})
