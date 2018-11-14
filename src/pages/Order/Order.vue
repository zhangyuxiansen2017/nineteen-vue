<template>
    <section class="order">
      <HeaderTop title="订单列表"></HeaderTop>

      <section class="order_no_login" v-if="!userInfo.name">
        <img src="./images/person.png">
        <h3>登录后查看外卖订单</h3>
        <router-link to="/login">
          <button class="button_class">立即登陆</button>
        </router-link>
      </section>
    </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {mapState} from 'vuex'
  export default {
    name: 'Order',
    components: {
      HeaderTop
    },
    computed:{
      ...mapState(['userInfo'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order  //订单
    width 100%
    overflow hidden
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      .button_class
        display inline-block
        background #FFB6C1
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>
