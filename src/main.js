// src/main.js
// 引入vue
import Vue from 'vue'
import App from './App.vue'

// 引入配置的路由组件
import router from './router'

// vuex还没有学会
// import store from './vuex/store'

// 开启json传输格式,网上看的.不确定
Vue.http.options.emulateJSON = true;
// 应该是制定根目录,网上看的.不确定
Vue.http.options.root = '.';

// 实例化我们的Vue
new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");