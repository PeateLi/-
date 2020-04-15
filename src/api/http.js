
import axios from 'axios' // 引入axios
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据，
import { Message } from 'element-ui' // 引入eleementui信息提示组件进行弹窗提醒

// 环境的切换，切换基路径
// let hostName =  location.hostname.substring(0,location.hostname.indexOf('8')+1)   //192.168

// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http://192.168.123.160:8081';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'http://dev.utmel.lo';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'http://dev.utmel.lo';
}

// else if (process.env.NODE_ENV == 'debug') { //测试环境
//     axios.defaults.baseURL = 'devapi.easybom.net';
// }
// else if (process.env.NODE_ENV == 'production') { //生产环境
//     // axios.defaults.baseURL = 'devapi.easybom.net ';
// }

// 设置请求超时
axios.defaults.timeout = 10000

// post请求的时候在这里进行一个默认的设置，即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

//请求拦截器
import {getCookie,setCookie} from '../utils/cookie'
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断cookie中是否存在token
    // 如果存在，则统一在http请求的header都加上token
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = getCookie('token')
    token && (config.headers.Authorization = token);
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
          // 401 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 401:
          Message({
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true
          })
          // 清除token
          setCookie('token', "", -1)
          store.commit('user/login',getCookie('userInfo') )   //在cookie获取到用户信息重新登录赋值token
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          break

          // 404请求不存在
        case 404:
          Message({
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true
          })
          break
          // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true
          })
      }
      return Promise.reject(error.response)
    }
  })

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
