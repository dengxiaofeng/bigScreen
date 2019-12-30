<template>
  <div>
    <PictorialBar
      title="年计划制定率"
      value="85%"
      :config="initOptions('#04d9ff')"
    />
    <PictorialBar
      title="年计划完成率"
      value="85%"
      :config="initOptions('#3be5c3')"
    />
    <PictorialBar
      title="月计划指定率"
      value="85%"
      :config="initOptions('#04d9ff')"
    />
    <PictorialBar
      title="月计划完成率"
      value="85%"
      :config="initOptions('#3be5c3')"
    />
  </div>
</template>

<script>
import PictorialBar from "./pictorialBar";
export default {
  components: {
    PictorialBar
  },
  methods: {
    initOptions(theme) {
      return {
        fillColor: theme,
        data: [85]
      };
    }
  }
};
</script>
