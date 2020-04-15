
/*
 * @desc:
 * @Date: 2020-02-16 18:18:24 
 * @desc:elementui的message组件封装
 */
import { Message } from "element-ui"
/**
 * @Author:
 * @Date: 2020-02-17 10:09:07 
 * @param {Object} msg 弹窗类型
 * @param {Object} title 弹窗内容
 */
export function message(msg, title) {
    Message({
        type: msg,
        message: title
    });
}
export default message;