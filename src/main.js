import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/app.css';

/** VUE GLOBAL COMPONENTS */
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  mounted: function () {
    document.body.classList.add('bg-gray-900');
  },
  render: h => h(App),
}).$mount('#app');
