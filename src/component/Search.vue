<template>
    <section class="inputBox">
        <input type="text" class="stuInput" v-model="SearchInfo"  v-on:keyup=Search()>
    </section>
</template>
<script>
    // 获取从福组件传过来的值,然后改变他,再通过福组件的方法更新页面
    export default {
        data() {
            return {
                SearchInfo: "",
                apiUrl: 'http://localhost:3005',

            }
        },
        methods: {
            Search: function() {
                const _self = this,
                    param = {
                        obj: this.SearchInfo
                    }
                _self.$http.post(_self.apiUrl + "/student/search", param).then(function(res) {
                    // 这里是处理正确的回调
                    const data = res.data.data
                    this.getSearchInfo(data)
                        // this.articles = response.data["subjects"] 也可以
                }, function(res) {
                    // 这里是处理错误的回调
                    console.log(res)
                });
            }
        },
        props: ['getSearchInfo']
    }
</script>