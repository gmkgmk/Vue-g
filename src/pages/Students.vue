<template>
  <div>
    <h1>学生管理</h1>
    <AddInput  :showInfo=this.getData></AddInput>
    <ChangeInput :presonData=this.presonData :showInfo=this.getData></ChangeInput>
    <Search :getSearchInfo=getSearchInfo></Search>
    <StudentsList :myPresons=this.presons :showInfo=this.getData :getChangeInfo=this.presonInfo></StudentsList>
  </div>
  
</template>
<script>
    /*
            template里面,通过:名字的方法传向子页面,注意不要加()号..会一直引用.
        */
    /*
    主要内容:
        *getData()是显示所有的方法
        presonInfo是获取改变时候信息的方法,通过回调函数去子组件的子组件里回调,改变presonData状态
        getSearchInfo也是一样,不过改变的是presons的状态,感觉和React有点像,但也感觉我写错了.求大神交下.
        components是使用的组件的名字,
        data是返回值,
        mounted是一个钩子函数,在挂载时触发.
        方法写在methods里
    */
    import Add from '../component/Add'
    import List from '../component/List'
    import Change from '../component/Change'
    import Search from '../component/Search'
    export default {
        components: {
            'AddInput': Add,
            'StudentsList': List,
            'ChangeInput': Change,
            'Search': Search
        },
        data() {
            return {
                apiUrl: 'http://localhost:3005',
                presons: [],
                presonData: {}
            }
        },
        mounted: function() {
            this.getData()
        },
        methods: {
            getData: function(data) {

                const _self = this
                _self.$http.get(_self.apiUrl + "/student/showAll").then(function(res) {
                    // 这里是处理正确的回调
                    return this.presons = res.data.data
                        // this.articles = response.data["subjects"] 也可以
                }, function(res) {
                    // 这里是处理错误的回调
                    console.log(res)
                });
            },
            presonInfo: function(data) {
                this.presonData = data
            },
            getSearchInfo: function(data) {
                this.presons = data
            }
        }
    }
</script>
<style>
    .stuInput {
        width: 300px;
        float: left;
        outline: 0;
        border: 0;
        height: 30px;
        padding: 10px;
    }
    
    .inputBox {
        height: 50px;
        margin-bottom: 10px;
    }
    
    .ageInput {
        width: 50px;
        height: 30px;
    }
    
    .stuInput {
        margin-right: 20px;
    }
</style>