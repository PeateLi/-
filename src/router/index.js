import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {  //进行验证登录才能看
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
	meta:{title:'首页',icon:'el-icon',test:[1,2,3]}
  },
  {
    path:'/Login',
    name:'Login',
    component:() => import('../views/Login'),
	meta:{title:'首页',icon:'el-icon',test:[1,2,3]}
  }
]

// 获取module文件夹下面的路由数据
// 第一个参数 目录名称
// 第二个参数 是否读取子目录
// 第三个参数 正则匹配文件类型
const files = require.context("./routeModule", false, /\.js$/);

// 循环添加module页面下面的路由数据
files.keys().forEach(key => {
  routes.push(files(key).default || files(key));
});

console.log(files)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
