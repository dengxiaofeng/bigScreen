<template>
  <div class="lightBg">
    <div class="qiuBg" style="left:20px;top:-10px">
      <div>12</div>
      <div class="des">环境卫生</div>
    </div>
    <div class="qiuBg" style="left:36.33%;top:-75px;transform:translateX(-50%)">
      <div>34</div>
      <div class="des">制度完善度</div>
    </div>
    <div
      class="qiuBg"
      style="left: 63.66%; top: -75px; transform: translateX(-50%)"
    >
      <div>10</div>
      <div class="des">消毒药剂</div>
    </div>
    <div class="qiuBg" style="right: 20px;top: -10px">
      <div>33</div>
      <div class="des">有挡鼠板</div>
    </div>
  </div>
</template>
<script></script>

<style scoped lang="stylus" type="text/stylus">
.lightBg
    width: 391px
    height: 105px
    background: url(../../common/images/wgglLightBg.png) 0 0 no-repeat
    position: absolute
    bottom: 12px
    left: 50%
    transform: translateX(-50%)
    .qiuBg
        width: 73px;
        height: 73px;
        background: url(../../common/images/wgglQiuBg.png) 0 0 no-repeat
        position: absolute
        top: 0
        display: flex
        align-items: center
        justify-content: center
        font-family: DIN-Medium
        font-size: 20px
        color: #fff
        .des
            position: absolute
            bottom: 0
            left: 50%
            transform: translateX(-50%)
            font-family: MicrosoftYaHei
            font-size: 12px
            color: #9cdbfb
            white-space: nowrap
</style>
