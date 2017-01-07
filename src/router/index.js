"use strict"
/*
 *配置路由,
 *1.首先引入三个组件Vue,VueRouter,VueResource现在官网推荐的是另一个
 *2.导入页面组件
 *3.开始配置
 */
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

import App from '../App'
import Login from '../pages/Login'
import Regin from '../pages/Regin'
import Main from '../pages/index'
import Students from '../pages/Students'
import NotFoundComponent from '../pages/page404'

/*
redirect是进入后自动跳转到某一个页面,相当于重定向
以"/"为跟目录,children为子目录嵌套(不知道是否正确)
*号就是找不到配置路由的时候跳转,.一般来显示404
 */
const routes = [{
        path: '',
        redirect: '/admin'
    },
    {
        path: "/",
        component: Main,
        children: [{
                path: '/login',
                component: Login
            },
            {
                path: '/regin',
                component: Regin
            }
        ]
    },
    {
        path: '/admin',
        component: Students
    },
    {
        path: '*',
        component: NotFoundComponent
    }
];
// 开始H5的什么模式,不太清楚
const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes
});


export default router;