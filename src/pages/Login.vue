<template>
    <section class="regin">
        <h1>登录</h1>

        <div class="username inputbox">
            <label for="username">用户名:</label>
            <input 
                type="text"
                class="input"
                v-model="username"
                placeholder="请输入用户名"
                on-change="this.handleChange(this, 'username')"
                maxlength="12"
                id="username">
        </div>

        <div class="password inputbox">
            <label for="password">密码:</label>
            <input 
                type="password"
                class="input"
                v-model="password"
                placeholder="请输入密码"
                on-change="this.handleChange(this, 'username')"
                maxlength="12"
                id="password">
        </div>
        <!--<div v-if="errorMsg" class="form-group">
            <span class="text-red" v-text="errorMsg"></span>
        </div>-->
          <div class="btnbox">
            <input 
                type="submit"
                class="btn"
                id="loginBtn"
                value="登录"
                @click="Login()">
            <input 
                type="button"
                class="btn clear"
                id="reginBtn"
                value="注册"
                @click="toRegin()">
        </div>
    </section>
</template>

<script>
    // 验证全部删完了,准备vuex的时候学习,regin还有
    export default {
        data() {
            return {
                password: '',
                username: ''
            }
        },
        methods: {
            toRegin() {
                const _self = this;
                _self.$router.push('/regin');
            },
            Login() {
                const _self = this;
                _self.$router.push('/admin');
            }
        }
    }
</script>