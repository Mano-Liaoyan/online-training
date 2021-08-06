import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toolbarTitleName: ""
    },
    mutations: {
        // 设置顶部状态栏标题
        setToolbarTitleName(state, name) {
            state.toolbarTitleName = name
        }
    },
    actions: {},
    modules: {}
})
