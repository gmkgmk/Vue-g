<template>
    <div>
        <ul>
            <li v-for="article in articles">
                <p>{{article.name.frist}}</p>
                <!--<img :src="article.images.medium" alt="">-->
                <p>{{article.about}}</p>
                <p>{{article.age}}</p>
            </li>
        </ul>
    </div>
    
</template>
<script>
    export default {
        data() {
            return {
                articles: []
            }
        },

        mounted: function() {
            this.$http.get('../student/showAll', {}, {
                headers: {},
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                this.articles = response.data.data[0];
                console.log(response.data.data[0])
                    // this.articles = response.data["subjects"] 也可以
            }, function(response) {
                // 这里是处理错误的回调
                console.log(response)
            });
        }
    }
</script>