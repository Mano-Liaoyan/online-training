<template>
    <v-app id="inspire">
        <!--  头部状态栏  -->
        <v-app-bar :color="color" dark app elevation="0" clipped-left>
            <v-btn v-show="showBack" icon @click="$router.back()">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="pl-0">{{ titleName }}</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer clipped app :color="color" dark mini-variant expand-on-hover hide-overlay touchless width="150">
            <v-list flat>
                <v-list-item-group v-model="selectedItem">
                    <v-list-item v-for="(item, i) in items" :key="i" link :to="item.to">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!--  路由切换  -->
        <!--  路由间切换动画  -->
        <v-container>
            <v-main>
                <v-slide-x-transition mode="out-in">
                    <router-view/>
                </v-slide-x-transition>
            </v-main>
        </v-container>
        <!--  底部导航栏  -->
        <v-bottom-navigation v-if="this.$route.name !== 'Login' && isMobileDevice"
                             v-model="selectedItem" :background-color="color" dark shift app>
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
            console.log(this.selectedItem)
            switch (this.selectedItem) {
                case 0:
                    return 'pink lighten-3'
                case 1:
                    return 'red lighten-3'
                case 2:
                    return 'blue lighten-3'
                case 3:
                    return 'indigo lighten-3'
                default:
                    return 'deep-purple lighten-3'
            }
        },
        // 顶部标题栏文字
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
        },
        // 判断是否是移动设备 xs-sm-md 为移动设备
        isMobileDevice() {
            console.log(this.$vuetify.breakpoint.name)
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return true
                case 'sm':
                    return true
                case 'md':
                    return true
                case 'lg':
                    return false
                case 'xl':
                    return false
            }
        },
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
</style>