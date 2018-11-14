/**
 *  通过mutations间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo
} from '../api'

export default {
  //异步获取地址
  async getAddress ({commit,state}) {
    //发送ajax请求
    const geohash = state.latitude + ',' +state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 200){
      const  address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类
  async getCategorys ({commit}) {
    //发送ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if (result.code === 200){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家
  async getShops ({commit}) {
    //发送ajax请求
    const result = await reqShops()
    //提交一个mutation
    if (result.code === 200){
      const  shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code ===200){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  }
}
