<template>
  <div ref="eventTables" style="height: 220px;padding: 14px 0"></div>
</template>
<script>
import CarouselTable from "../../base/carouselTable";
const mockExamination = [
  {
    checker: "郝贺",
    inspectionArea: "新城区",
    communityName: "向荣小区",
    checkTime: "2019-12-27 12:30:38"
  },
  {
    checker: "郝贺1",
    inspectionArea: "新城区1",
    communityName: "向荣小区1",
    checkTime: "2019-12-27 13:30:38"
  },
  {
    checker: "郝贺2",
    inspectionArea: "新城区2",
    communityName: "向荣小区2",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺3",
    inspectionArea: "新城区3",
    communityName: "向荣小区3",
    checkTime: "2019-12-26 14:30:38"
  },
  {
    checker: "郝贺4",
    inspectionArea: "新城区4",
    communityName: "向荣小区4",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺5",
    inspectionArea: "新城区5",
    communityName: "向荣小区5",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺6",
    inspectionArea: "新城区6",
    communityName: "向荣小区6",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺7",
    inspectionArea: "新城区7",
    communityName: "向荣小区7",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺8",
    inspectionArea: "新城区8",
    communityName: "向荣小区8",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺9",
    inspectionArea: "新城区9",
    communityName: "向荣小区9",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺10",
    inspectionArea: "新城区10",
    communityName: "向荣小区10",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺11",
    inspectionArea: "新城区11",
    communityName: "向荣小区11",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺12",
    inspectionArea: "新城区12",
    communityName: "向荣小区12",
    checkTime: "2019-12-27 14:30:38"
  },
  {
    checker: "郝贺13",
    inspectionArea: "新城区13",
    communityName: "向荣小区13",
    checkTime: "2019-12-27 14:30:38"
  }
];
export default {
  mounted() {
    this._initTable(mockExamination);
  },
  methods: {
    _initTable(data) {
      this.chart = new CarouselTable(this.$refs.eventTables, {
        global: {
          rowCount: 6,
          isLoop: true,
          fontFamily: "Microsoft Yahei",
          animation: {
            mode: "bottom",
            duration: 1,
            singleStop: true
          },
          ifRowHidden: false,
          textAnimate: {
            ifRun: true,
            animateDur: 2
          },
          ifUpdateImd: false
        },
        header: {
          show: true,
          heightPercent: 14,
          backgroundColor: "rgba(15, 49, 70, 0.8)",
          textStyle: {
            textAlign: "left",
            paddingLeft: "10px",
            fontFamily: "Microsoft Yahei",
            color: " #4f6ea7",
            fontSize: 14,
            fontWeight: "normal"
          }
        },
        row: {
          backgroundColor1: "rgba(22, 59, 88, 0.9)",
          backgroundColor2: "rgba(15, 49, 70, 0.8)",
          callbackId: "checker",
          height: "20"
        },
        idList: {
          show: true,
          backgroundColor: "rgba(255,255,255,0)",
          width: 20,
          radius: 60,
          textStyle: {
            color: "#ffffff",
            fontSize: 12,
            fontWeight: "normal"
          }
        },
        series: [
          {
            columnName: "checker",
            displayName: "检查人",
            width: 60,
            dataType: "text",
            widthPercent: 60,
            isBr: false,
            textStyle: {
              textAlign: "left",
              fontSize: 14,
              color: "#6f98cc",
              fontWeight: "bold"
            }
            // "backgroundColor": "#ff7900"
          },
          {
            columnName: "inspectionArea",
            displayName: "检查区域",
            width: 100,
            dataType: "text",
            widthPercent: 100,
            isBr: false,
            textStyle: {
              textAlign: "left",
              fontSize: 14,
              color: " #6f98cc",
              fontWeight: "normal"
            }
            // "backgroundColor": "#ff7900"
          },
          {
            columnName: "communityName",
            displayName: "小区名称",
            width: 100,
            dataType: "text",
            widthPercent: 100,
            isBr: false,
            textStyle: {
              textAlign: "left",
              fontSize: 14,
              color: " #6f98cc",
              fontWeight: "normal"
            }
            // "backgroundColor": "#ff7900"
          },
          {
            columnName: "checkTime",
            displayName: "检查时间",
            width: 100,
            dataType: "text",
            widthPercent: 100,
            isBr: false,
            textStyle: {
              textAlign: "left",
              fontSize: 14,
              color: " #6f98cc",
              fontWeight: "normal"
            }
          }
        ],
        data: {
          source: {
            handler: "render",
            description: "数据接口",
            fields: {},
            dcConfig: {}
          }
        }
      });
      if (data) {
        this.chart && this.chart.render(data);
      }
    }
  }
};
</script>
