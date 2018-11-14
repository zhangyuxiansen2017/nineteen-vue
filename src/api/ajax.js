/**
 * ajax请求函数模块
 *
 */
import axios from 'axios'
import qs from 'qs'

export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {

    let promise
    if (type==='GET') {
      //准备url和请求参数
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else {
      //发送post请求
      promise = axios.post(
        url,
        qs.stringify(data),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    }
    promise.then(function (response) {
      //成功调用resolve
      resolve(response.data)
    }).catch(function (error) {
      //失败调用reject
      reject(error)
      })
  })
}
