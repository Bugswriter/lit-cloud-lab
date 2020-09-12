import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';
import Editor from 'vue-editor-js'

Vue.config.productionTip = false;
Vue.use(Editor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
