<template>
  <div>
    <Card title="供水保障-检查计划" width="460px" height="254px">
      <InspectionPlan />
    </Card>
    <Card title="供水保障-督查提醒率" width="460px" height="138px" containerClass="inspectionPlanBg">
      <InspectionReminderRate />
    </Card>
    <Card title="供水保障-整改" width="460px" height="178px">
      <WaterSupplyRectification />
    </Card>
    <Card title="供水保障-城市水库" width="460px" height="268px">
      <CityReservoir />
    </Card>
  </div>
</template>

<script>
import Card from "../../base/card";
import InspectionReminderRate from "../areaLeft/inspectionReminderRate";
import WaterSupplyRectification from "../areaLeft/waterSupplyRectification";
import CityReservoir from "../areaLeft/cityReservoir";
import InspectionPlan from "../areaLeft/inspectionPlan";
export default {
  components: {
    Card,
    InspectionPlan,
    InspectionReminderRate,
    WaterSupplyRectification,
    CityReservoir
  }
};
</script>

<style lang="stylus" scoped>
.inspectionPlanBg
    background-image: url('../../common/images/box3.png');
</style>