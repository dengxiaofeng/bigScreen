<template>
  <ECharts
    :options="polar"
    autoresize
    :style="{ width: width, height: height }"
  ></ECharts>
</template>

<script>
import "echarts";
import ECharts from "vue-echarts";
export default {
  props: {
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    ECharts
  },
  data() {
    return {
      polar: {
        tooltip: {
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        xAxis: {
          type: "value",
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            show: false
          },
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: "pictorialBar",
            symbol: "roundRect",
            symbolRepeat: "fixed",
            symbolSize: [4, 16],
            symbolMargin: 3,
            symbolBoundingData: 100,
            barWidth: "50%",
            itemStyle: {
              normal: {
                color: "#11466f"
              }
            },
            label: {
              show: false
            },
            data: [100],
            animation: false,
            z: 1
          },
          {
            name: "lalal",
            type: "pictorialBar",
            symbol: "roundRect",
            symbolRepeat: true,
            symbolSize: [4, 16],
            symbolMargin: 3,
            symbolBoundingData: 100,
            barWidth: "50%",
            label: {
              show: false
            },
            data: (this.options &&
              Array.isArray(this.options.data) &&
              this.options.data) || [0],
            itemStyle: {
              normal: {
                color: this.options && this.options.fillColor
              }
            },
            z: 2
          }
        ]
      }
    };
  }
};
</script>
