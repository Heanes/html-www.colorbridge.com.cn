import Vue from 'vue'
import App from './ArticleDetail'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
