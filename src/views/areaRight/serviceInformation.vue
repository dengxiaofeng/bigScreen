<template>
  <div class="lightBg">
    <div class="qiuBg">
      <div>3463</div>
      <div class="des">物业</div>
    </div>
    <div class="qiuBg">
      <div>8031</div>
      <div class="des">小区</div>
    </div>
    <div class="qiuBg">
      <div>7241</div>
      <div class="des">泵房</div>
    </div>
    <div class="qiuBg">
      <div>74</div>
      <div class="des">保洁供水</div>
    </div>
  </div>
</template>

<style lang="stylus" type="text/stylus" scoped>
.lightBg
  width: 100%
  position: relative
  display: flex
  flex-direction: row
  justify-content: space-between
  margin-top: 16.5px
  padding: 0 7px
  width: 100%
  box-sizing: border-box
  .qiuBg
    width: 73px
    height: 73px
    background: url(../../common/images/wgglQiuBg.png) 0 0 no-repeat
    position: relative;
    top: 0
    display: flex
    align-items: center
    justify-content: center
    font-family: DIN-Medium
    flex-direction: column
    font-size: 20px
    color: #fff
    .des
      font-family: MicrosoftYaHei
      font-size: 12px
      color: #9cdbfb
      white-space: nowrap
      position: absolute
      top: 58px
</style>
