<template>
  <div class="homeBox">
    <div class="header">
      <Header />
    </div>
    <div class="areaLeft">
      <AreaLeft />
    </div>
    <div class="map"></div>
    <div class="areaRight">
      <AreaRight />
    </div>
    <div class="areaBottom">
      <AreaBottom />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../Header'


import AreaLeft from '../areaLeft'
import AreaRight from '../areaRight'
import AreaBottom from '../areaBottom'
export default {
  name: 'Home',
	components: {
     Header,
     AreaLeft,
     AreaRight,
     AreaBottom
	}
}
</script>
<style scoped lang="stylus" type="text/stylus">
.homeBox
  position: relative
  width: 100%
  min-width: 1920px
  height: 100%
  min-height: 1080px
  font-size: 14px
  color: #fff
  padding: 6px
  z-index: 99
  transition: all ease-in-out 0.6s
  transform: translateX(0)
.titleBox
  display: flex
  flex-direction: row
.bgLeft
  position: absolute;
  height: 100%
  background: linear-gradient(90deg, rgba(21, 52, 74, 1), rgba(255, 555, 255, 0));
  left: 0
  top: 0
  width: 570px
  display: block
  z-index: 10
.bgTop
  position: absolute
  height: 120px
  background: linear-gradient(0deg, rgba(255, 555, 255, 0), rgba(21, 52, 74, 1))
  top: 0
  width: 100%
  display: block
  z-index: 10
  left: 0
.bgRight
  position: absolute
  height: 100%
  background-image: url(../../common/images/right_bg.png)
  right: 0
  top: 0
  width: 520px
  display: block
  z-index: 10
.bgBottom
  position: absolute
  height: 340px
  background: linear-gradient(0deg, rgba(21, 52, 74, 1), rgba(255, 555, 255, 0))
  bottom: 0
  width: 100%
  display: block
  z-index: 10
.reminderRateContent
  margin: 10px 0
.areaLeft
  position:absolute
  top:92px
  z-index:500
  transition:all .5s .5s linear
  left:41px
  top:110px
.map
  position:absolute
  width:100%
  height:100%
  left:0
  right:0
  z-index:10
.areaRight
  position:absolute
  right:41px
  top:109px
  z-index:500
  transition:all .5s .5s linear
.areaBottom
  position:absolute
  bottom:24px
  left:27.4%
  width:880px
  z-index:500
  transition:all .5s .5s linear
</style>
