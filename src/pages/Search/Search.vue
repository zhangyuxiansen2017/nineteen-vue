<template>
    <section class="search">
      <HeaderTop title="搜索"></HeaderTop>
      <form class="search_form" action="#">
        <input type="search" name="search" placeholder="请输入商品名称" class="search_input">
        <input type="submit" name="submit" class="search_submit">
      </form>
    </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    name: 'Sreach',
    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search  //搜索
    width 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #FFB6C1
          font-size 16px
          color #fff
          background-color #FFB6C1
</style>
