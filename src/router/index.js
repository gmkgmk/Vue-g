"use strict"

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

const routes = [{
    path: '',
    redirect: '/index'
}, {
    path: "/index",
    component: Main,
    children: [{
        path: '',
        redirect: '/index/regin'
    }, {
        path: '/index/login',
        component: Login

    }, {
        path: '/index/regin',
        component: Regin
    }]
}, {
    path: "/admin",
    component: Students
}, { path: '*', component: NotFoundComponent }];

const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes
});


export default router;