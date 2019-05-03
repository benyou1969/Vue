// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// if we want to create a filter globaly it means u will create it in main.js where vue kicks in and take control of our application

// function (val) => {
  
// }
Vue.filter('snippet', val => {
  // !val (if this doesn't exists)
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,20)
  return val
} )


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
