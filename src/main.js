import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from "./store/store";

Vue.use(VueRouter);

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
