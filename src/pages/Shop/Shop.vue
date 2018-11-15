<template>
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
    .shopInner
      width 100%
      margin 0 auto
      .shopImgSwipe
        width 100%
        height 260px
        .shopImg
          height 100%
          width 100%
</style>
