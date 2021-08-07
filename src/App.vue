<template>
    <v-app id="inspire">
        <!--  头部状态栏  -->
        <v-app-bar :color="color" dark app elevation="0">
            <v-btn v-show="showBack" icon @click="$router.back()">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="pl-0">{{ titleName }}</v-toolbar-title>
        </v-app-bar>
        <!--  路由切换  -->
        <v-main>
            <!--  路由间切换动画  -->
            <v-container>
                <v-slide-x-transition mode="out-in">
                    <router-view/>
                </v-slide-x-transition>
            </v-container>
        </v-main>
        <!--  底部导航栏  -->
        <v-bottom-navigation v-if="this.$route.name !== 'Login'" v-model="selectedItem" :background-color="color" dark shift app>
            <v-btn :to="item.to" v-for="(item, i) in items" :key="i">
                <span>{{ item.text }}</span>
                <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            showBack: false,
            selectedItem: 0,
            items: [
                {text: '练习', icon: 'mdi-school', to: '/'},
                {text: '考试', icon: 'mdi-ab-testing', to: {name: 'Test'}},
                {text: '设置', icon: 'mdi-cog', to: {name: 'Settings'}},
            ],
        }
    },
    computed: {
        // 底部导航栏颜色
        color() {
            switch (this.selectedItem) {
                case 0:
                    return 'blue-grey'
                case 1:
                    return 'teal'
                case 2:
                    return 'brown'
                case 3:
                    return 'indigo'
                default:
                    return 'blue-grey'
            }
        },
        titleName() {
            switch (this.$route.name) {
                case 'Home':
                    return '在线培训系统'
                case 'Train':
                    return '练习'
                case 'Test':
                    return '考试'
                case 'Settings':
                    return '设置'
                case 'Login':
                    return '登录'
                default:
                    return ''
            }
        }
    },
    watch: {
        $route(now, old) {     //监控路由变换，控制返回按钮的显示
            this.showBack = !(now.path === "/" || now.path === "/settings" || now.path === "/test");
        }
    },
    methods: {}
}
</script>

<style>
/*html {
    overflow-y: hidden !important;
}

::-webkit-scrollbar { !* 滚动条整体部分 *!
    width: 6px;
}

::-webkit-scrollbar-track { !* 外层轨道 *!
    border-radius: 0;
}

::-webkit-scrollbar-track-piece { !*内层轨道，滚动条中间部分 *!
    background-color: #E1E1E1;
    border-radius: 0;
}

::-webkit-scrollbar-thumb { !* 滑块 *!
    width: 10px;
    border-radius: 100em;
    background: #757575;
}

::-webkit-scrollbar-thumb:hover { !* 鼠标移入滑块 *!
    background: #909090;
}*/

</style>