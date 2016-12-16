<template>
    <section>
        <Vue-header></Vue-header>
        <div class="container">
            <router-view></router-view>
        </div>
        <Vue-footer></Vue-footer>
    </section>
     
</template>

<script>
    import VueFooter from "../component/Footer.vue"
    import VueHeader from "../component/Header.vue"
    import VueRegin from "./Regin.vue"
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
            'VueRegin': VueRegin
        }
    }
</script>