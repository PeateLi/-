import { get, post } from './http'

export const login = (p) => post('/Utmel/Login/DevLogin'+p);


// methods:{
//     login(){
//       let params = {
//         userName:'',
//         passWord:''
//       }
//       Login(params)
//       .then(res => {
//         console.log(res)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//     }
//   }