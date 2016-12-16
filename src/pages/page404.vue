<template>
    <div>
        <Vue-header></Vue-header>
            <h1>页面没有找到</h1>
        <VueFooter></VueFooter>
    </div>
</template>

<script>
    import VueFooter from "../component/Footer.vue"
    import VueHeader from "../component/Header.vue"

    "use strict";
    export default {
        name: 'gmk-app',
        data() {
            return {}
        },
        methods: {},
        components: {
            'VueHeader': VueHeader,
            'VueFooter': VueFooter,
        }
    }
</script>