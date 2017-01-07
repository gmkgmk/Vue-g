<!--固定头尾,改变中间,中间又是一个路由-->
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
<style>
    .inputbox {
        margin-top: 30px;
    }
    
    .input {
        width: 600px;
        height: 20px;
        outline: 0;
        font-size: 20px;
        padding: 20px 10px;
        border: 1px solid transparent
    }
    
    .input:focus {
        border: 1px solid #333
    }
    
    .btnbox {
        width: 400px;
        text-align: center;
        margin: 50px auto;
    }
    
    .btn {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 0;
        outline: 0;
        color: #fff;
        background: #333
    }
    
    .clear {
        background: #666;
    }
    
    .btn:hover {
        cursor: pointer;
    }
</style>