<template>
  <div class="index-page">
    <div class="board-container">
      <!-- <video
        src="~@/assets/video/bg.mp4"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      /> -->
      <!-- <video
        src="~@/assets/videoDemo.mp4"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      /> -->
      <div class="bg-image"></div>
    </div>
    <div class="header">
      <div class="left-logo">
        <img src="~@/assets/img/logo.png" alt="赋兴数字科技" />
        <i>赋兴数字无人机巡检系统</i>
      </div>
      <div class="time">{{ nowTime }}</div>
    </div>
    <data-panel />
    <!-- <data-charts /> -->
    <el-tooltip effect="dark" content="一键起飞" placement="right">
      <div class="one-key-fly">
        <img src="~@/assets/img/demo2/flight.svg" alt="赋兴数字科技" />
      </div>
    </el-tooltip>
    <el-tooltip effect="dark" content="进入后台管理" placement="bottom">
      <div class="go-home">
        <img
          src="~@/assets/img/demo2/setting.svg"
          alt="赋兴数字科技"
          @click="toHome"
        />
      </div>
    </el-tooltip>
    <div class="start">
      <div class="header-line">
        <img
          src="~@/assets/img/demo2/dot.png"
          alt="赋兴数字科技"
        />&nbsp;&nbsp;查看用电
      </div>
      <div id="chart_bottom_1" class="fly-buttom" @click="goElectric">
        <br /><br /><br /><br /><br /><br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DataPanel from '@/views/Others/demo2/cpns/data-panel.vue'
// import DataCharts from '@/views/Others/demo2/cpns/data-charts.vue'
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
export default defineComponent({
  components: {
    DataPanel
    // DataCharts
  },
  setup() {
    const nowTime = ref('2020-07-07 14:32:33')
    const fnW = (str: number) => {
      var num
      str > 10 ? (num = str) : (num = '0' + str)
      return num
    }
    const getTime = () => {
      var date = new Date()
      var year = date.getFullYear() //当前年份
      var month = date.getMonth() //当前月份
      var data = date.getDate() //天
      var hours = date.getHours() //小时
      var minute = date.getMinutes() //分
      var second = date.getSeconds() //秒
      var time =
        year +
        '-' +
        fnW(month + 1) +
        '-' +
        fnW(data) +
        ' ' +
        fnW(hours) +
        ':' +
        fnW(minute) +
        ':' +
        fnW(second)
      nowTime.value = time
    }
    getTime()
    let timer: number
    onMounted(() => {
      timer = window.setInterval(() => {
        getTime()
      }, 1000)
    })
    onBeforeUnmount(() => {
      window.clearInterval(timer)
    })
    return {
      nowTime
    }
  },
  data() {
    return {
      datetime: 0,
      timer: null
    }
  }
})
</script>

<style scoped lang="less">
.go-home {
  display: flex;
  z-index: 2;
  height: 50px;
  width: 75px;
  position: absolute;
  left: 64%;
  top: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #0fc3e9;
  transition: all 1s;
  img {
    height: 30px;
    width: 30px;
  }
}
.start {
  position: absolute;
  left: 30px;
  bottom: 30px;
  width: 280px;
  height: 220px;
  display: block;
  float: left;
  background: url('~@/assets/img/demo2/bottom1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .header-line {
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
  .fly-buttom {
    height: 100%;
    background: url('~@/assets/img/demo2/bottom_chart_1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }
}
.one-key-fly {
  display: flex;
  z-index: 2;
  height: 50px;
  width: 75px;
  position: absolute;
  left: 70%;
  top: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #0fc3e9;
  transition: all 1s;
  img {
    height: 30px;
    width: 30px;
  }
}
.index-page {
  width: 100vw;
  height: 100vh;
  padding: 8px;
  .bg-image {
    height: 100%;
    width: 100%;
    background-size: cover;
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      content: '';
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .board-container {
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom: 0px;
    z-index: -1;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .header {
    padding: 20px 0 20px 40px;
    background: url('~@/assets/img/demo2/top.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-logo {
      align-items: center;
      display: flex;
      img {
        height: 60px;
        margin-right: 20px;
      }
      i {
        font-size: 34px;
        color: #fff;
      }
    }
    .time {
      color: #fff;
      padding: 0 80px 0 0;
      font-size: 24px;
    }
  }
}
</style>
