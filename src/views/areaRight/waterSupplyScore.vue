<template>
  <div class="handleThe">
    <div class="hotlineLabel">供水指标</div>
    <div class="supplyScore">
      <div class="light">
        <span>居民市政直供: 1086</span>
      </div>
      <div class="light">
        <span>居民二次供水: 1168</span>
      </div>
      <div class="light">
        <span>非居民市政直供: 1310</span>
      </div>
      <div class="light">
        <span>非居民二次供水: 111</span>
      </div>
    </div>

    <div class="hotlineLabel">二次供水评分</div>
    <div class="supplyScore">
      <div class="light">
        <span>红牌: 1086</span>
      </div>
      <div class="light">
        <span>黄牌: 1168</span>
      </div>
      <div class="light">
        <span>蓝牌: 1310</span>
      </div>
      <div class="light">
        <span>绿牌: 111</span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" type="text/stylus" scoped>
.handleThe
  margin-top: 40px;
  width: 100%;
.hotlineLabel
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), #2794bf 49%, rgba(0, 0, 0, 0) 100%);
  display: block;
  padding: 8px 0;
  width: 108px;
  text-align: center;
.light
  background: url('../../common/images/yellow.png') no-repeat
  height: 30px;
  span
    padding-left: 44px;
    line-height: 30px;
.supplyScore
    display: inline-grid;
    grid-template-columns: 50% 50%;
    width:100%;
    grid-row-gap: 10px;
    margin: 20px 0;
</style>
