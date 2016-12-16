// src/main.js
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
/* eslint-disable no-new */
Vue.http.options.emulateJSON = true;
Vue.http.options.root = '.';

// 实例化我们的Vue
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");