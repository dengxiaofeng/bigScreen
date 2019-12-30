<template>
  <div class="header">
    <div class="bgtitle">
      <span>西安二次供水管理中心</span>
    </div>
    <div class="banner">
      <div class="tianqiBox">
        <span>西安</span>
        <span>4 ~13</span>
        <span>空气质量</span>
        <span>良好</span>
      </div>
      <div id="timers"></div>
    </div>
    <div class="slider"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Timers from '../../base/timer'
export default {
  mounted() {
    this.initTimers()
  },
  methods: {
    initTimers() {
       this.chart = new Timers('#timers', {
          icon: {
            size: 1,
            color: 'rgba(93, 245, 244, 1)',
            marginRight: 5,
          },
          time: {
            textStyle: {
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: 'normal',
              fontFamily: 'Microsoft Yahei',
            },
            format: 'yyyy-MM-dd EEE HH:mm:ss',
            duration: 1000,
            stopTime: '',
            stopShowTime: '',
          },
          event: {
            timer: {
              show: false,
              interval: 3000,
            },
            pointer: {
              show: false,
              time: '2019-05-24 10:41:21',
            },
          },
       });
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.header
  position: relative
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  .time
    position: absolute
    left: 20px
    top: 50%
    font-size: 26px
    transform: translateY(-50%)
  .title
    font-size: 34px
    margin-bottom: 8px
    background: url(../../common/images/line2.png) no-repeat bottom center
  .desc
    position: absolute
    right: 20px
    top: 50%
    color: #77fbe3
    transform: translateY(-50%)
	.setIcon
	  margin-right: 8px
  .bgtitle
    height: 80px
    width: 437px
    background: url(../../common/images/title.png) no-repeat
    position: absolute
    top: 16px
    left: 22px
    line-height: 54px
    padding-left: 26px
    span
      font-weight:bold
      color:rgba(59,187,224,1)
      font-size: 24px
      letter-spacing: 2px
  .banner
      background: url(../../common/images/baner.png) no-repeat
      width: 1351px
      height: 48px
      position: absolute
      left: 533px
      top: 16px
   .slider
      width: 0
      height: 26px
      position: absolute
      left: 542px
      top: 36px
      overflow: hidden
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMy0xMlQxNzozODo1MiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDMtMTJUMTc6NDA6MDErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDMtMTJUMTc6NDA6MDErMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZTdhZjAyMTMtZTdkMy00ZWNjLTlhNzAtZjY2ZDU3YjcxMDhlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyOTE2MTlDM0NDOTExRTk5QjI2QTEyNzBBMjg5OTExIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDI5MTYxOUMzQ0M5MTFFOTlCMjZBMTI3MEEyODk5MTEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjkxNjE5OTNDQzkxMUU5OUIyNkExMjcwQTI4OTkxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjkxNjE5QTNDQzkxMUU5OUIyNkExMjcwQTI4OTkxMSIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplN2FmMDIxMy1lN2QzLTRlY2MtOWE3MC1mNjZkNTdiNzEwOGUiIHN0RXZ0OndoZW49IjIwMTktMDMtMTJUMTc6NDA6MDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6a48dKAAAAKElEQVQ4jWNkePLflwEP+C/NsBmbOBM+TfjAqMZRjaMaRzWOaqSuRgBwrwQxlXqB9wAAAABJRU5ErkJggg==') repeat-x
      transform: skew(26deg)
      animation: slid-width 6s infinite ease
.tianqiBox
  position: absolute
  left: 31%
  top: 14px
  span
    margin-right: 20px
#timers
  & /deep/ .date
    position: absolute
    left: 55%
    top: 14px
    font-weight: 400
    color: rgba(255, 255, 255, 1)
    font-size: 14px
.timeIcon
  margin-right: 8px
  color:#0bbcfa


@keyframes slid-width {
  0% {
    width: 0
  }
  100% {
    width: 336px
  }
}
</style>
