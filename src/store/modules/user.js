// import { login, logout, getInfo } from '@/api/user'
import { login } from '@/api/login'
import { setCookie, getCookie, delCookie } from '@/utils/cookie'
import router, { resetRouter, constantRoutes } from '@/router'
import { Message } from 'element-ui'
const state = {
  token: getCookie(),
  name: '',
  userPass: '',
  introduction: '',
  roles: []
}
const mutations = {
  SET_TOKEN: (state, token) => {   //token保存
    state.token = token
  },
  SET_NAME: (state, name) => {   //姓名保存
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {   //密码保存
    state.userPass = avatar
  },
  SET_ROLES: (state, roles) => {   //权限保存
    state.roles = roles
  }
}
// 代码注释 只留登录的
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login('?devName=' + username.trim() + '&devPassword=' + password).then(response => {
        const { data, code } = response

        if (code == 1000) {
          // constantRoutesp[1].meta.isLogin =
          commit('SET_TOKEN', data.devKey)
          commit('SET_NAME', userInfo.username)
          commit('SET_AVATAR', data.password)
          setCookie('token',data.devKey)
          setCookie('userInfo',userInfo)
          resolve()
          Message({
            type: 'success',
            message: '登录成功'
          })
        } else {
          Message.error('密码错误请查看你的密码跟账号是否存在！')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
