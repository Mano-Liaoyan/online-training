import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import {OverlayScrollbarsPlugin} from 'overlayscrollbars-vue'

import "./plugins/axios";

Vue.config.productionTip = false

Vue.use(OverlayScrollbarsPlugin);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
