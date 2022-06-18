<template>
  <div id="echart-map"></div>
</template>

<script>
import * as echarts from "echarts";
import chinaJson from "../assets/json/china.json";

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawMap("echart-map");
  },
  methods: {
    drawMap(id) {
      let chartDom = document.getElementById(id);
      let myChart = echarts.init(chartDom);
      let scatterData = [
        {
          value: [112.549248, 37.857014],
        },
        {
          value: [117.283042, 31.86119],
        },
      ];
      let airData = [
        { name: "北京市", value: 39.93 },
        { name: "天津市", value: 39.13 },
        { name: "河北省", value: 147 },
        { name: "山西省", value: 39 },
        { name: "内蒙古自治区", value: 58 },
        { name: "辽宁省", value: 50 },
        { name: "吉林省", value: 51 },
        { name: "黑龙江省", value: 114 },
        { name: "上海市", value: 31.23 },
        { name: "江苏省", value: 67 },
        { name: "浙江省", value: 84 },
        { name: "安徽省", value: 117 },
        { name: "福建省", value: 29 },
        { name: "江西省", value: 96 },
        { name: "山东省", value: 92 },
        { name: "河南省", value: 113 },
        { name: "湖北省", value: 273 },
        { name: "湖南省", value: 175 },
        { name: "广东省", value: 38 },
        { name: "广西壮族自治区", value: 59 },
        { name: "海南省", value: 54 },
        { name: "重庆市", value: 66 },
        { name: "四川省", value: 58 },
        { name: "贵州省", value: 71 },
        { name: "云南省", value: 25 },
        { name: "西藏自治区", value: 24 },
        { name: "陕西省", value: 61 },
        { name: "甘肃省", value: 99 },
        { name: "青海省", value: 57 },
        { name: "宁夏回族自治区", value: 52 },
        { name: "新疆维吾尔自治区", value: 84 },
        { name: "台湾省", value: 88 },
        { name: "香港特别行政区", value: 66 },
        { name: "澳门特别行政区", value: 77 },
      ];
      console.log(chinaJson);
      echarts.registerMap("china", chinaJson);
      let option = {
        geo: {
          type: "map",
          map: "china", //chinaMap需要和registerMap中的第一个参数保持一致
          roam: false, // 设置允许缩放以及拖动的效果
          label: {
            show: true, //展示标签
          },
          zoom: 1.2, //设置初始化的缩放比例
        },
        series: [
          {
            data: airData,
            geoIndex: 0, //将空气质量的数据和第0个geo配置关联在一起
            type: "map",
          },
          // {
          //   type: "effectScatter",
          //   data: scatterData, //配置散点的坐标数据
          //   coordinateSystem: "geo", //指明散点使用的坐标系统  geo的坐标系统
          //   rippleEffect: {
          //     scale: 10,
          //   },
          // },
        ],
        visualMap: {
          min: 0,
          max: 300,
          inRange: {
            color: ["#66E8CE", "#0D5EFF"], //控制颜色渐变的范围
          },
          calculable: true, //出现滑块
        },
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#echart-map {
  width: 100%;
  height: 100%;
}
</style>
