import Vue from 'vue'
import App from './App.vue'
import * as d3 from 'd3'
global.d3 = d3



new Vue({
  el: '#counter',
  render: h => h(App)
})


