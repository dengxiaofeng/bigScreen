<template>
  <Card
    title="最新检查信息"
    width="850px"
    height="266px"
    containerClass="eventBg"
  >
    <List />
  </Card>
</template>
<script>
import Card from "../../base/card";
import List from "../../components/list";
export default {
  components: {
    Card,
    List
  }
};
</script>

<style lang="stylus" scoped>
.eventBg
  background: url(../../common/images/eventBg.png)  no-repeat
  background-size: 100% 100%
</style>