<template>
  <div id="app">
<!--路由入口-->
        <router-view></router-view>
  </div>
</template>
<script>
    "use strict";
    export default {
        name: 'gmk-app',
        data() {
            return {}
        },
        methods: {},
    }
</script>
<!--通用样式-->
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
    
    label {
        width: 100px;
        display: inline-block;
        font-size: 20px;
        font-family: "黑体";
        text-justify: auto;
        text-align: justify;
        text-align-last: justify
    }
</style>