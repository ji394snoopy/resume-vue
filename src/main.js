import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import { router } from './router'

require('./assets/styles/reset.css');
require('./assets/styles/Jyuan.css');

Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
