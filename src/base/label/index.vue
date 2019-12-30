<template>
  <div class="datavMainTitle">{{ title }}</div>
</template>
<script type="text/ecmascript-6">
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped lang="stylus" type="text/stylus">
.datavMainTitle
    display: flex
    align-items: center
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:before
        content: ' '
        width: 20px
        height: 24px
        margin-right: 10px
        background: url(../../common/images/leixing.png)
        background-size: 100% 100%
</style>
