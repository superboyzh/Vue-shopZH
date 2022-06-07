//用于创建路由器
import VueRouter from 'vue-router';
//引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建暴露一个路由
export default  new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        },
    ]
})