<template>
    <section class="regin">
        <h1>注册</h1>
        <form autocomplete="off">
        <article class="username inputbox">
            <label for="username">用户名:</label>
            <input 
                type="text"
                class="input"
                placeholder="请输入用户名"
                id="username"
                min="6"
                required 
                v-model.trim="userInfo.username"
                autofocus 
                autocomplete="off"
                @blur="usernameCanEdit()"
                >
        </article>

        <article class="password inputbox">
            <label for="password">密码:</label>
            <input 
                type="password"
                class="input"
                v-model.trim="userInfo.password"
                placeholder="请输入密码"
                min="6"
                max="20"
                id="password"
                required 
                 autocomplete="new-password">
        </article>

        <article class="reppassword inputbox">
            <label for="reppassword">重复密码:</label>
            <input 
                type="password"
                class="input"
                v-model.trim="userInfo.reppassword"
                placeholder="请再次输入密码"
                min="6"
                max="20"
                required 
                 autocomplete="new-password"
                @blur="canEdit()"
                id="reppassword">
                <span></span>
        </article>

          <article class="btnbox">
            <input 
                type="button"
                class="btn"
                id="submitBtn"
                value="提交"
                disabled="disabled" 
                ref="isSubmit"
                @click="regin()">
            <input 
                type="button"
                class="btn clear"
                id="clearBtn"
                value="重置"
                @click="clear()">
        </article>
        </form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    password: '',
                    reppassword: '',
                    username: ''
                },
                apiUrl: 'http://localhost:3005',
            }
        },
        create: {

        },
        computed: {},
        methods: {
            // 注册按钮
            regin() {
                var _self = this
                var param = {
                    username: _self.userInfo.username,
                    password: _self.userInfo.password
                }
                _self.$http.post(_self.apiUrl + '/user/regin', param).then(function(res) {
                    if (res.body === "成功") {
                        alert('注册成功，请登陆！')
                        _self.$router.push('/index/login');
                        _self.clear()
                    } else {
                        alert("注册失败,请确认")
                    }
                }, function(error) {
                    console.log(error);
                })
            },
            // 清除按钮
            clear() {
                var _self = this
                _self.userInfo.username = "";
                _self.userInfo.password = "";
                _self.userInfo.reppassword = "";
            },
            // 判断两次密码是否一致
            canEdit: function() {
                var _self = this
                if (_self.userInfo.password === _self.userInfo.reppassword) {
                    _self.$refs.isSubmit.removeAttribute('disabled')
                } else {
                    console.log('2次密码不一致')
                }
            },
            usernameCanEdit: function() {
                var _self = this
                var param = {
                    username: _self.userInfo.username
                }
                _self.$http.get(_self.apiUrl + '/user/reginyes', param).then(function(res) {
                    if (res.body.mes === "0") {
                        _self.$refs.isSubmit.removeAttribute('disabled')
                    } else {
                        console.log(1)
                    }
                }, function(error) {
                    console.log(error);
                })
            },
        },
        watch: {
            function() {
                console.log()
            }
        }
    }
</script>