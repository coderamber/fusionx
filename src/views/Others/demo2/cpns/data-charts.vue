<template>
  <div class="data-charts">
    <div class="right-top">
      <center style="height: 80%">
        <img
          src="~@/assets/img/demo2/down_arrow.png"
          id="down_arrow"
          alt="赋兴数字科技"
        />
      </center>
    </div>
    <div class="right-charts">
      <div style="height: 45%">
        <div class="title">
          <img
            src="~@/assets/img/demo2/dot.png"
            alt="赋兴数字科技"
          />月巡检故障数
        </div>
        <div class="chart"></div>
      </div>
      <div style="height: 45%; margin-top: 5%">
        <div class="title">
          <img
            src="~@/assets/img/demo2/dot.png"
            alt="赋兴数字科技"
          />月故障隐患消除
        </div>
        <div class="chart2"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
<script>
export default {
  data() {
    return {
      // 主题色 true 为黑
      colorThame: true,
      // dark thame color
      darkColor: '#39d1ff',
      darkChart: '#2f89cf',
      // light thame color
      lightColor: '#000000',
      lightChart: '#33539e',
      // 图表
      chart1: null,
      chart2: null
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // 实例化对象
      this.chart1 = this.$echarts.init(document.querySelector('.chart'))
      this.chart2 = this.$echarts.init(document.querySelector('.chart2'))

      // 指定配置项和数据
      let color = null
      let fontColor = null
      if (this.colorThame) {
        color = this.darkChart
        fontColor = '#fff'
      } else {
        color = this.lightChart
        fontColor = '#000'
      }
      let option = {
        color: [color],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '4%',
          top: '20px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2022-01',
              '2021-02',
              '2022-03',
              '2022-04',
              '2022-05',
              '2022-06'
            ],
            axisTick: {
              alignWithLabel: true
            },
            // 修改刻度标签相关样式
            axisLabel: {
              color: fontColor,
              fontSize: 12,
              interval: 0
            },
            // 不显示x坐标轴的样式
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // 修改刻度标签相关样式
            axisLabel: {
              show: false
            },
            // 设置y轴的样式
            axisLine: {
              show: false
            },
            // 设置y轴分割线的样式
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
              }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            label: {
              color: fontColor,
              show: true,
              position: 'top'
            },
            data: [29, 38, 52, 32, 19, 12],
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      }
      let option2 = {
        color: [color],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '4%',
          top: '20px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2022-01',
              '2021-02',
              '2022-03',
              '2022-04',
              '2022-05',
              '2022-06'
            ],
            axisTick: {
              alignWithLabel: true
            },
            // 修改刻度标签相关样式
            axisLabel: {
              color: fontColor,
              fontSize: 12,
              interval: 0
            },
            // 不显示x坐标轴的样式
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // 修改刻度标签相关样式
            axisLabel: {
              show: false
            },
            // 设置y轴的样式
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // 设置y轴分割线的样式
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
              }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            label: {
              color: fontColor,
              show: true,
              position: 'top'
            },
            data: [24, 31, 49, 27, 15, 8],
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      }
      // 把配置项给实例对象
      this.chart1.setOption(option)
      this.chart2.setOption(option2)
      //让图表跟随屏幕自动自适应
      window.addEventListener('resize', () => {
        this.chart1.resize()
        this.chart2.resize()
      })
    }
  }
}
</script>

<style scoped lang="less">
.data-charts {
  position: absolute;
  bottom: 30px;
  right: 10px;
  top: 130px;
  width: 400px;
  .right-top {
    height: 8%;
    background: url('~@/assets/img/demo2/right_top.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-left: 20px;
    padding-right: 20px;
    img {
      vertical-align: bottom;
      cursor: pointer;
    }
  }
  .right-charts {
    height: 92%;
    background: url('~@/assets/img/demo2/right_bottom.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-left: 20px;
    padding-right: 20px;
    .title {
      background: url('~@/assets/img/demo2/bar.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 40px;
      padding-left: 10px;
      line-height: 40px;
      display: flex;
      align-items: center;
      color: #fff;
    }
    .chart {
      height: 85%;
      width: 100%;
    }

    .chart2 {
      height: 85%;
      width: 100%;
    }
  }
}
</style>
