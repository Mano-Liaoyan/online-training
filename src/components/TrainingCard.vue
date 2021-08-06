<template>
    <v-card :loading="loading" class="mx-auto mb-3" max-width="160">
        <template slot="progress">
            <v-progress-linear color="deep-purple lighten-2" height="5" indeterminate></v-progress-linear>
        </template>
        <v-img height="60" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
        <v-card-title>训练一</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
            训练集详细内容
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn right color="deep-purple lighten-2" text @click="reserve" :to="{name:'Train'}">
                开始训练
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "TrainingCard",
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 1000)
        },
    },

}
</script>

<style scoped>

</style>