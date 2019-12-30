<template>
  <div
    class="card"
    :class="[containerClass, bgClass]"
    :style="{ width: width, height: height }"
  >
    <div class="head">
      <div class="title" :class="titleClass">{{ title }}</div>
    </div>
    <div class="content" :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: String,
      default: ""
    },
    titleClass: {
      type: String,
      default: ""
    },
    contentClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    bgClass: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped lang="stylus" type="text/stylus">
.card
   position: relative
   display: flex
   flex-direction: column
   padding: 12px
   background-image: url(../../common/images/box.png)
   background-size: 100% 100%
   margin-bottom: 6px
   cursor: pointer
   .head
     display: flex
     align-items: center
     justify-content: space-between
     font-size: 16px
     .title
       position: relative
       float:left
       color:#fff
       margin-left: 26px
       &::before
         content: ''
         width: 16px
         height: 100%
         background: url(../../common/images/leixing.png) no-repeat
         position: absolute
         left: -19px
         top: 54%
         transform: translateY(-50%)
</style>
