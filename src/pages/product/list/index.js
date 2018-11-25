import Vue from 'vue'
import App from './ProductList'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
