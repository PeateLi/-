import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import '../src/styles/main.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'// nprogress样式文件

//在main.js引入设置全局
import message from "./utils/message";
//给它的原型加一个属性为$messageOK可以直接使用了
Vue.prototype.$message = message;
import * as filters from './filters' // 全局filters

//当路由开始跳转时。
import {getCookie} from './utils/cookie' //引用刚才我们创建的util.js文件，并使用getCookie方法
router.beforeEach((to, from , next) => {
  // 开启进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  if (to.path === '/login') {
    // 是登录页面
    next()
  } else {
    // 不是登录页面
    // 2. 判断 是否登录过
    let token = getCookie('token')
    token ? next() : next('/login')
    next()
  }
});
//当路由跳转结束后
router.afterEach(() => {  
  // 关闭进度条
  NProgress.done()
})

Vue.config.productionTip = false
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
