<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
    // import VueFooter from "./component/Footer.vue"
    // import VueHeader from "./component/Header.vue"

    "use strict";
    export default {
        name: 'gmk-app',
        data() {
            return {}
        },
        methods: {},
        // components: {
        //     'VueHeader': VueHeader,
        //     'VueFooter': VueFooter,
        // }
    }
</script>
<style>
    html,
    body {
        height: 100%;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    
    .main {
        width: 1200px;
        margin: auto;
        background: #999;
        box-sizing: border-box;
    }
    
    .container {
        width: 800px;
        height: 670px;
        margin: auto;
    }
    
    h1 {
        text-align: center;
        padding-top: 20px;
    }
    
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
    
    label {
        width: 100px;
        display: inline-block;
        font-size: 20px;
        font-family: "黑体";
        text-justify: auto;
        text-align: justify;
        text-align-last: justify
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