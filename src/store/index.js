import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        toolbarTitleName: "",
        username: "",
    },
    mutations: {
        //设置token
        set_token(state, token) {
            state.logged_in = true;
            state.token = token;
        },
        //删除token
        del_token(state) {
            state.token = "";
            state.logged_in = false;
        },
        // 设置用户名
        set_username(state, username) {
            state.username = username;
        },
        // 设置顶部状态栏标题
        setToolbarTitleName(state, name) {
            state.toolbarTitleName = name
        }
    },
    actions: {},
    modules: {}
})
