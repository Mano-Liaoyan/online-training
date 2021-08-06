<template>
    <div class="about">
        <h1>练习页面</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit("setToolbarTitleName", "练习")
    },
    data() {
        return {}
    }
}
</script>
