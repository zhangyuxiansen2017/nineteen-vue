/**
 * 包含多个接口请求函数的模块
 */
import ajax from './ajax'

const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
// export function reqAddress (latitude,longitude) {
//
// }
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/category/categoryList')
// 3、根据经纬度获取商铺列表
export const reqShops = () => ajax(BASE_URL+'/shops/getShops')
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (keyword) => ajax(BASE_URL+'/shops/searchShops', {keyword})
// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/user/login', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+`/user/sendSmsCode/${phone}`)
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, smsCode) => ajax(BASE_URL+'/user/loginBySms', {phone, smsCode}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/user/getUserInfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')
