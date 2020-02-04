/*
 * @Date: 2020-01-29 23:16:33
 * @LastEditTime : 2020-02-04 22:20:31
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
import user from '../views/index/user/user.vue';
import subject from '../views/index/subject/subject.vue';
import enterprise from '../views/index/enterprise/enterprise.vue';
import chart from '../views/index/chart/chart.vue';
import question from '../views/index/question/question.vue';



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
        component: index,
        children: [{
                path: '/index/user', // 匹配的地址是 /index/vip
                component: user
            },
            {
                path: '/index/subject', // 匹配的地址是 /index/vip
                component: subject
            },
            {
                path: '/index/chart', // 匹配的地址是 /index/vip
                component: chart
            },

            {
                path: '/index/question', // 匹配的地址是 /index/vip
                component: question
            },
            {
                path: '/index/enterprise', // 匹配的地址是 /index/vip
                component: enterprise
            }
        ]
    }
];

// 创建路由对象
const router = new VueRouter({
    routes
});

// 暴露出去
export default router;