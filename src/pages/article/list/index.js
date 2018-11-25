import Vue from 'vue'
import App from './ArticleList'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
