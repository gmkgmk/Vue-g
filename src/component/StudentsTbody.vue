<template>
    <tbody>
        <tr v-for="preson in myPresons">
            <td>  {{ preson.name }}</td>
            <td>  {{ preson.gender }}</td>
            <td>  {{ preson.age  }}</td>
            <td>
                <input type="button" name="" value="修改" @click=showChange(preson._id) >
                <input type="button" name="" value="删除" @click=remove(preson._id)>
            </td>
        </tr>
    </tbody>
</template>
<script>
    /*
         *showAll的组件,获取父页面的内容通过v-for循环出来
         remove是传入他的id然后执行删除
         showChange获取父页面传过来的内调,改变他的内容值,然后在父组件的父组件传向changge组件
         */
    export default {
        data() {
            return {
                // presons: myPresons
                apiUrl: 'http://localhost:3005'
            }
        },
        props: ['myPresons', 'showInfo', 'getChangeInfo'],
        methods: {
            remove: function(presonId) {
                const _self = this,
                    param = {
                        id: presonId
                    };
                _self.$http.post(_self.apiUrl + '/student/del', param).then(function(res) {
                    this.showInfo()
                }, function(error) {
                    console.log(error);
                })
            },
            showChange: function(presonId) {
                const _self = this,
                    param = presonId;
                _self.$http.get(_self.apiUrl + '/student/chan?id=' + param).then(function(res) {
                    var preson = res.data
                    this.getChangeInfo(preson)
                }, function(error) {
                    console.log(error);
                })
            }
        }
    }
</script>