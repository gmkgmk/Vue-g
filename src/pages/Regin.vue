<template>
    <section class="regin">
        <h1>注册</h1>
        <form autocomplete="off">
        <article class="username inputbox">
            <label for="username">用户名:</label>
            <input 
                type="data"
                class="input"
                placeholder="请输入用户名"
                maxlength="12"
                v-model="userInfo.username"
                autofocus 
                autocomplete="off"
                @keyup.enter="regin()"
                @blur="blurMethod('username')">

                <span v-show="message.username" class="text-red" v-text="message.username"></span>
        </article>

        <article class="password inputbox">
            <label for="password">密码:</label>
            <input 
                type="password"
                class="input"
                v-model="userInfo.password"
                placeholder="请输入密码"
                maxlength="12"
                @blur="blurMethod('password')"
                @keyup.enter="regin()"
                autocomplete="new-password">
                
                <span v-show="message.password" class="text-red" v-text="message.password"></span>
        </article>

        <article class="reppassword inputbox">
            <label for="reppassword">重复密码:</label>
            <input 
                type="password"
                class="input"
                v-model="userInfo.reppassword"
                placeholder="请再次输入密码"
                maxlength="12"
                autocomplete="new-password"
                :disabled="!userInfo.password.trim()"
                @keyup.enter="regin()"
                @blur="blurMethod('password')">

                <span v-show="message.reppassword" class="text-red" v-text="message.reppassword"></span>
        </article>
          <article class="btnbox">
            <input 
                type="button"
                class="btn"
                value="提交"
                @click="regin()">
            <input 
                type="button"
                class="btn clear"
                value="重置"
                @click="clear()">
        </article>
        </form>
        <small  >已有账号？<a class="toLogin" @click="toLogin()">直接登录</a></small>
    </section>
</template>

<script>
    /*
     *简单的验证消息
     */
    export default {
        data() {
            return {
                message: {
                    password: '',
                    reppassword: '',
                    username: ''
                },
                userInfo: {
                    password: '',
                    reppassword: '',
                    username: ''
                },
                userFlag: false,
                userPsw: false,
                reppswFlag: false,
                apiUrl: 'http://localhost:3005',
            }
        },
        methods: {
            // 鼠标移开数据
            blurMethod(currentObj) {
                const _self = this
                switch (currentObj) {
                    case 'username':
                        let formDataCity = _self.userInfo.username;
                        if (formDataCity.length < 6 || formDataCity.length > 12) {
                            _self.message.username = "用户名格式不正确,长度应该大于6小于12"
                            _self.userFlag = false
                        } else {
                            _self.message.username = false
                            _self.usernameCanEdit()
                        };
                        break;
                    case 'password':
                        const password = _self.userInfo.password
                        const reppassword = _self.userInfo.reppassword
                        if (password.length < 6 || password.length > 12) {
                            _self.message.password = "密码格式不正确,长度应该大于6小于12"
                            _self.userPsw = false
                        } else {
                            _self.message.password = false
                            _self.userPsw = true
                            if (reppassword !== password) {
                                _self.message.reppassword = '两次密码输入不一致'
                                _self.reppswFlag = false
                            } else {
                                _self.message.reppassword = false
                                _self.reppswFlag = true
                            }
                        };
                        break;

                }
            },
            // 注册按钮
            regin() {
                const _self = this
                const param = {
                    username: _self.userInfo.username,
                    password: _self.userInfo.password
                }
                if (_self.reppswFlag && _self.userFlag && _self.userPsw) {
                    // ajax请求
                    _self.$http.post(_self.apiUrl + '/user/regin', param).then(function(res) {
                        if (res.body === "成功") {
                            alert('注册成功，请登陆！')
                            _self.toLogin()
                            _self.clear()
                        } else {
                            alert("注册失败,请确认")
                        }
                    }, function(error) {
                        console.log(error);
                    })
                } else {
                    alert("请确认信息后再次填入")
                }
            },
            // 验证用户是否重复
            usernameCanEdit: function() {
                const _self = this
                const param = '?username=' + _self.userInfo.username
                _self.$http.get(_self.apiUrl + '/user/reginyes' + param).then(function(res) {
                    if (res.body.mes == "1") {
                        _self.message.username = "*该用户名已被注册"
                        _self.userFlag = false
                    } else {
                        _self.message.username = false
                        _self.userFlag = true
                    }
                }, function(error) {
                    console.log(error);
                })
            },
            // 去登录按钮
            toLogin() {
                const _self = this
                _self.$router.push('/login');
            },
            // 清除按钮
            clear() {
                const _self = this
                _self.userInfo.username = "";
                _self.userInfo.password = "";
                _self.userInfo.reppassword = "";
            },
        }
    }
</script>
<style>
    .toLogin {
        cursor: pointer;
        color: rgba(0, 0, 0, .4)
    }
    
    .text-red {
        color: red;
        float: right;
    }
</style>