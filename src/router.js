import VueRouter from 'vue-router'

import Resume from './root/Resume'
import Mines from './root/Mines'

export const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Resume },
        { path: '/resume', component: Resume },
        { path: '/mines', component: Mines },
        { path: '*', redirect: '/' }
    ]
})
