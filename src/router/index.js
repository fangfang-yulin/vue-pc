/*
 * @Date: 2020-01-29 23:16:33
 * @LastEditTime : 2020-02-04 20:08:24
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */
// 导入Vue
import Vue from 'vue';
// 导入路由
// import router from 'vue-router';
import VueRouter from 'vue-router';
import login from '../views/login/login.vue';
import index from '../views/index/index.vue';

// 注册路由
Vue.use(VueRouter);

// 创建路由规则
const routes = [
    // login
    {
        path: '/login',
        component: login
    },
    // index
    {
        path: '/index',
        component: index
    }
];

// 创建路由对象
const router = new VueRouter({
    routes
});

// 暴露出去
export default router;