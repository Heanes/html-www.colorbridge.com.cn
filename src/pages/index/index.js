import Vue from 'vue'
import App from './IndexPage'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
