/*
入口js
 */

import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'  // 加载mockServer

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>标签可用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上vue-router
  store, // 使用上vuex
})
