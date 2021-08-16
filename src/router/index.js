import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '@/views/Home.vue'
import Train from '@/views/Train'
import Settings from '@/views/Settings'
import Test from '@/views/Test'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/train',
        name: 'Train',
        component: Train,
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
]

const router = new VueRouter({
    routes,
})

//注释掉以方便调试
router.beforeEach((to, from, next) => {
    if (to.path !== '/login') {
        let token = store.state.token
        if (token !== '') {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath },
            })
        }
    } else {
        next()
    }
})

export default router