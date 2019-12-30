<template>
  <div class="indicatorsBox">
    <div class="indicatorsLabel">
      <span class="indicatorsName">{{ title }}</span>
      <span class="indicatorsValue">{{ value }}</span>
    </div>
    <PictorialBar width="450px" height="32px" :options="config" />
  </div>
</template>

<script>
import PictorialBar from "../../../base/charts/pictorialBar";
export default {
  components: {
    PictorialBar
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="stylus" type="text/stylus" scoped>
.indicatorsBox
    padding: 0px 8px;
    margin-top: 12px;
.indicatorsLabel
    display: flex
    justify-content: space-between
    .indicatorsName
         color: rgba(179, 231, 255, 1)
    .indicatorsValue
        font-family: DIN
        font-weight: 500
        color: rgba(246, 255, 0, 1)
</style>
