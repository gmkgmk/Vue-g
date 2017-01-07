<template>
    <section class="inputBox">
        <input type="text" name="addUsername" class="stuInput" v-model="user.name">
        <input type="number" class="ageInput" min=0 max=100 v-model.number="user.age">
        <input type="radio"  name="sex"  id="addSexMan" value="男" v-model="user.gender"><label for="addSexMan">男</label>
        <input type="radio"  name="sex"  id="addSexWom" value='女' v-model="user.gender"><label for="addSexWom">女</label>
        <input type="button" value="确定" @click=add()>
    </section>
</template>
<script>
    /*
                props获取父亲页面的值,就相当于在本页面data里return过一样.
                当增加成功后调用一次父页面穿过来的方法.就刷新了.然后清空
            */
    export default {
        data() {
            return {
                user: {
                    name: "",
                    age: "",
                    gender: ""
                },
                apiUrl: 'http://localhost:3005',
            }
        },
        methods: {
            add: function() {
                const _self = this,
                    param = {
                        name: _self.user.name,
                        age: _self.user.age,
                        gender: _self.user.gender
                    }
                _self.$http.post(_self.apiUrl + '/student/add', param).then(function(res) {
                    this.showInfo()
                    this.user.name = ""
                    this.user.age = ""
                    this.user.gender = ""
                }, function(error) {
                    console.log(error);
                })
            }
        },
        props: ['showInfo']
    }
</script>