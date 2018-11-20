<template>
  <section style="background: honeydew">
    <section class="shopContainer">
      <div class="shopInner">
        <div class="shopImgSwipe">
          <mt-swipe :auto="0">
            <mt-swipe-item v-for="(img,index) in shopImg" :key="index">
              <img :src="baseImageUrl+img" class="shopImg"/>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </section>
    <section>
      <div style="margin-left: 20px;margin-bottom: 10px;margin-top: 15px;">
        <span>小米平板4/小米平板4Plus</span>
        <br/>
        <small style="color: red">
          [小米平板4]
        </small>
        <small style="margin-left: 5px;letter-spacing: 1px;color: rgb(153, 153, 153);font-size: 14px;">8”屏幕,单手可握的追剧神器/6000mAh大容量电池/AI人脸识别/后置1300万，前置500万摄像头</small>
      </div>
      <div style="margin-left: 20px">
        <span style="color: brown;font-size: 10px;">￥<small style="font-size: 20px">300</small></span>
      </div>
      <hr style="margin-left: 20px;margin-right: 20px;border: 1px solid #E5E5E5"/>
    </section>
  </section>
</template>
<script>
    export default {
      name: "Shop",
      data(){
        return {
          shopImg:['/store/nineteen/WechatIMG1.jpeg',"/store/nineteen/WechatIMG2.jpeg","/store/nineteen/WechatIMG3.jpeg"],
          baseImageUrl: 'http://www.zhangguimin.cn'
        }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopContainer
    width 100%
    height 100%
    background #fff
    position relative
    .shopInner
      width 100%
      margin 0 auto
      .shopImgSwipe
        width 100%
        height 260px
        .shopImg
          height 100%
          width 100%
  .go_back
    position absolute
    top 5px
    left 5px
</style>
