import Vue from 'vue'
import App from './App.vue'
import Form from './components/Form.vue'
import D3 from 'D3'


Vue.component('counter-form', Form)

new Vue({
  el: '#counter',
  render: h => h(App)
})


