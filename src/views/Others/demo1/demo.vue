<template>
  <div class="demo1-container">
    <div class="board-container">
      <!-- <video
        src="~@/assets/video/bg.mp4"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      /> -->
      <div class="bg-image"></div>
    </div>
    <div class="top">
      <div class="left">
        <div class="title">
          <i>园区能源管理系统</i>
        </div>
        <div><img src="~@/assets/img/demo1/line1.png" /></div>
      </div>
      <div class="middle">
        <table style="width: 300px">
          <tr>
            <td style="text-align: center">
              <img
                src="~@/assets/img/demo1/icon_sunset.png"
                style="width: 20px"
              />
            </td>
            <td style="text-align: center">
              <img src="~@/assets/img/demo1/icon_sun.png" style="width: 20px" />
            </td>
            <td style="text-align: center">
              <img
                src="~@/assets/img/demo1/icon_sunset.png"
                style="width: 20px"
              />
            </td>
            <td style="text-align: center">
              <img
                src="~@/assets/img/demo1/icon_moon.png"
                style="width: 20px"
              />
            </td>
          </tr>
          <tr class="bar">
            <td style="text-align: center"></td>
            <td style="text-align: center"></td>
            <td style="text-align: center">
              <img src="~@/assets/img/demo1/ball.png" style="width: 20px" />
            </td>
            <td style="text-align: center"></td>
          </tr>
          <tr style="font-size: 8px">
            <td style="text-align: center">清晨</td>
            <td style="text-align: center">中午</td>
            <td style="text-align: center; color: cadetblue">傍晚</td>
            <td style="text-align: center">夜晚</td>
          </tr>
        </table>
      </div>
      <div class="right">
        <div class="line-box">
          <div class="title">
            <i>{{ nowTime }}</i>
          </div>
        </div>
      </div>
    </div>
    <control class="control" />
    <data-panel class="data-panel" />
    <div class="bottom">
      <div class="bg-left"></div>
      <div class="bg-right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import Control from './cpns/control.vue'
import DataPanel from './cpns/dataPanel.vue'
export default defineComponent({
  components: {
    Control,
    DataPanel
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
  }
})
</script>

<style scoped lang="less">
.demo1-container {
  min-width: 1366px;
  min-height: 768px;
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #000;
  z-index: 1;
  .board-container {
    position: absolute;
    right: -5px;
    left: -5px;
    top: 0;
    bottom: 0;
    z-index: -1;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .bg-image {
      height: 100%;
      width: 100%;
      background: url('~@/assets/img/demo1/3.jpeg') no-repeat center;
      background-size: cover;
    }
  }
  .top {
    width: 100%;
    position: absolute;
    display: flex;
    margin-top: 20px;
    .left {
      flex: 1;
      .title {
        text-align: left;
        margin: 0;
        color: #fff;
        margin-left: 20px;
        font-size: 44px;
      }
    }
    .middle {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      .bar {
        background-image: url('~@/assets/img/demo1/bar.png');
        background-size: 100% 50%;
        background-repeat: no-repeat;
        background-position-y: 35%;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: center;
      position: relative;
      .line-box {
        position: absolute;
        right: 40px;
        left: 40px;
        top: 0;
        bottom: 0;
        color: #fff;
        .title {
          text-align: center;
          line-height: 58px;
          background: url('~@/assets/img/demo1/line2.png') no-repeat bottom;
          background-size: cover;
          font-size: 20px;
        }
      }
    }
  }
  .control {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .data-panel {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  .bottom {
    position: absolute;
    bottom: 0%;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    .bg-left {
      flex: 1;
      background: url('~@/assets/img/demo1/corner_left.png') no-repeat center;
      background-size: cover;
    }
    .bg-right {
      flex: 1;
      background: url('~@/assets/img/demo1/corner_left.png') no-repeat center;
      background-size: cover;
    }
  }
}
</style>
