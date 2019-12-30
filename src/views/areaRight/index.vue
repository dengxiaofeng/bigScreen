<template>
  <div>
    <Card
      title="服务信息"
      width="460px"
      height="440px"
      containerClass="serviceBg"
    >
      <ServiceInformation />
      <WaterSupplyScore />
    </Card>
    <Card title="供水安全-清洗保洁" width="460px" height="220px">
      <Cleaning />
    </Card>
    <Card title="供水安全-卫生安全" width="460px" height="208px">
      <HealthSafety />
    </Card>
  </div>
</template>
<script>
import Card from "../../base/card";
import HealthSafety from "./healthSafety";
import Cleaning from "./cleaning";
import ServiceInformation from "./serviceInformation";
import WaterSupplyScore from "./waterSupplyScore";
export default {
  components: {
    HealthSafety,
    Cleaning,
    ServiceInformation,
    WaterSupplyScore,
    Card
  }
};
</script>
<style lang="stylus" scoped>
.serviceBg
  background-image : url(../../common/images/grid.png)
</style>
