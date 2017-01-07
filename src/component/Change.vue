<template>
    <section class="inputBox">
        <input type="text" name="changeUsername" value="" class="stuInput" v-model="presonData.name">
        <input type="number" name="age" value="" class="ageInput" min=0 max=100 v-model.number="presonData.age">
        <input type="radio"  name="sex"  id="changeSexMan" value="男" v-model="presonData.gender"><label for="changeSexMan">男</label>
        <input type="radio"  name="sex"  id="changeSexWom" value='女' v-model="presonData.gender"><label for="changeSexWom">女</label>
        <input type="button" value="确定" @click=changePresonInfo(presonData._id)>
    </section>
</template>
<script>
    /*
        *props获取的父页面传过来的值,相当于在data里return 
        直接把传过来的值加载v-model里面,这点十分方便.相当于return了一个一样的对象.
        修改时直接把id穿进去,然后调用父页面的方法.刷新页面
        */
    export default {
        props: ['presonData', 'showInfo'],
        data() {
            return {
                apiUrl: 'http://localhost:3005',
            }
        },
        methods: {
            changePresonInfo: function(presonId) {
                const _self = this,
                    param = {
                        id: presonId,
                        name: _self.presonData.name,
                        age: _self.presonData.age,
                        gender: _self.presonData.gender
                    }
                _self.$http.post(_self.apiUrl + '/student/update', param).then(function(res) {
                    this.showInfo()
                    this.presonData.name = ""
                    this.presonData.age = ""
                    this.presonData.gender = ""
                }, function(error) {
                    console.log(error);
                })
            }
        }
    }
</script>