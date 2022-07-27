<template>
  <div class="data-panel">
    <div class="panel">
      <div class="top-img">
        <div class="title">楼层工位分类</div>
      </div>
      <div class="chart1"></div>
    </div>
    <div class="panel">
      <div class="top-img">
        <div class="title">当前楼层设备情况</div>
      </div>
      <div class="chart">
        <div class="chart-item">
          <div class="chart-content">
            <div>设备名称:</div>
            <div>light</div>
          </div>
          <div class="chart-content">online: 6</div>
          <div class="chart-content">offline: 4</div>
        </div>
        <div class="chart-item">
          <div class="chart-content">
            <div>设备名称:</div>
            <div>computer</div>
          </div>
          <div class="chart-content">online: 5</div>
          <div class="chart-content">offline: 2</div>
        </div>
        <div class="chart-item">
          <div class="chart-content">
            <div>设备名称:</div>
            <div>others</div>
          </div>
          <div class="chart-content">online: 14</div>
          <div class="chart-content">offline: 10</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="top-img">
        <div class="title">会议室使用时长</div>
      </div>
      <div class="chart2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const chart1 = ref()
    const chart2 = ref()
    const currentInstance = getCurrentInstance()
    const initCharts = () => {
      if (currentInstance) {
        // 实例化对象
        chart1.value =
          currentInstance.appContext.config.globalProperties.$echarts.init(
            document.querySelector('.chart1')
          )
        chart2.value =
          currentInstance.appContext.config.globalProperties.$echarts.init(
            document.querySelector('.chart2')
          )
      }

      let option1 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          right: 0,
          left: 'center',
          bottom: 0,
          top: '5%',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '楼层工位分类',
            top: '20%',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'], // 饼图上下左右位置
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '28',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '员工工位' },
              { value: 735, name: '会议室' },
              { value: 580, name: '独立办公室' }
            ]
          }
        ]
      }
      let option2 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            interval: 0
          },
          splitLine: { show: false },
          axisLine: {
            show: false
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '4%',
          top: '20px',
          containLabel: true
        },
        series: [
          {
            data: [1, 2, 1.4, 3, 0.5, 1, 1.2],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 13,
            lineStyle: {
              color: '#fff',
              width: 4,
              type: 'dashed'
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: '#EE6666',
              color: 'yellow'
            }
          }
        ]
      }
      // 把配置项给实例对象
      if (chart1.value && chart2.value) {
        chart1.value.setOption(option1)
        chart2.value.setOption(option2)
      }
    }
    onMounted(() => {
      initCharts()
    })
    return {}
  }
})
</script>

<style scoped lang="less">
.data-panel {
  position: relative;
  width: 450px;
  height: 80%;
  display: flex;
  flex-direction: column;
  .panel {
    background: url('~@/assets/img/demo1/bgblack.png') no-repeat center;
    background-size: cover;
    flex: 1;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
    &:nth-child(2) {
      margin-top: 20px;
      margin-bottom: 20px;
      flex: 1.1;
    }
    &:nth-child(3) {
      margin-bottom: 20px;
    }
    .top-img {
      color: #fff;
      height: 70px;
      background: url('~@/assets/img/demo1/title_bg.png') no-repeat center;
      background-size: contain;
      .title {
        height: 100%;
        color: #fff;
        padding-left: 40px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
      }
    }
    .chart {
      display: flex;
      height: calc(100% - 75px);
      padding: 0 10px;
      .chart-item {
        flex: 1;
        margin: 10px 20px;
        background: url('~@/assets/img/demo1/bar_bg.png') no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        .chart-content {
          flex: 1;
          display: flex;
          align-items: center;
          margin-left: 3px;
          color: #fff;
          font-weight: bold;
          justify-content: center;
          &:nth-child(1) {
            flex: 1.5;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
    .chart2,
    .chart1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100% - 75px);
      padding: 0 10px;
    }
  }
}
</style>
