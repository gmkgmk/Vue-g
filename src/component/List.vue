<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
            </thead>
                <StudentsTbody :myPresons=this.myPresons :showInfo=this.showInfo :getChangeInfo=this.getChangeInfo></StudentsTbody>
        </table>
    </section>
</template>
<script>
    /*
    *这个组件主要起一个分类的作用,可以不用.这样更好看.
    只有一个子组件传内容.
    其他的功能就是获取父组件的东西传向子组件.
    */

    import StudentsTbody from '../component/StudentsTbody.vue'
    export default {
        components: {
            StudentsTbody: StudentsTbody
        },
        props: ['myPresons', 'showInfo', 'getChangeInfo'],
    }
</script>
<style>
    table,
    tbody {
        width: 800px;
        text-align: center
    }
</style>