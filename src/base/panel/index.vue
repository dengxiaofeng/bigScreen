<template>
  <div class="datavGridWrapper" :style="[{ width: width }, { height: height }]">
    <Label :title="title" />
    <div class="datavGridBody">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Label from '../label'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: ''
        }
    },
    components: {
        Label
    }
}
</script>
<style scoped lang="stylus" type="text/stylus">
.datavGridWrapper
    padding: 0 14px
</style>
