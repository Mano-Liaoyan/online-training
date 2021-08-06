<template>
    <v-app id="inspire">
        <v-app-bar color="pink lighten-2" dark app>
            <v-toolbar-title>{{ titleName }}</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-bottom-navigation v-model="selectedItem" :background-color="color" dark shift app>
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
            selectedItem: 0,
            items: [
                {text: '练习', icon: 'mdi-school', to: '/'},
                {text: '考试', icon: 'mdi-ab-testing', to: '/about'},
                {text: '设置', icon: 'mdi-cog', to: '/settings'},
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
                case 'About':
                    return '考试'
                case 'Settings':
                    return '设置'
                default:
                    return ''
            }
        }
    },
    methods: {
        changeTitle(name) {
            this.$store.commit("setToolbarTitleName", name)
        }
    }
}
</script>