<template>
  <section class="introduction-item-container">
    <div class="bg-box wow animate__animated animate__fadeInLeft">
      <div class="bg-item" style="left: 5%">
        <img src="~@/assets/img/introduction/item2.webp" alt="" />
      </div>
    </div>
    <section class="content wow animate__animated animate__fadeInRight">
      <div class="title">无人巡检方案</div>
      <div class="mb-content-item">
        <div class="content-item">业务数据分析</div>
        <div class="content-item">智能识别判别</div>
        <div class="content-item">巡检任务配置</div>
        <div class="content-item">多系统间联动</div>
      </div>
    </section>
    <div class="content-img-box" style="left: 10%">
      <img
        v-lazy="require('../../../../../assets/img/introduction/solve.png')"
      />
    </div>
  </section>
  <section class="introduction-item-container">
    <div class="content wow animate__animated animate__fadeInLeft">
      <div class="title">赋兴云, 一网统管</div>
      <div class="mb-content-item">
        <div class="content-item">飞行监控管理</div>
        <div class="content-item">重点问诊</div>
        <div class="content-item">双光检测</div>
        <div class="content-item">巡检报告生成</div>
        <div class="content-item">拓展性与AI开发</div>
      </div>
    </div>
    <div
      class="bg-box wow animate__animated animate__fadeInRight"
      style="background: #f0fbef"
    >
      <div class="bg-item" style="right: 5%">
        <img src="~@/assets/img/introduction/item4.webp" alt="" />
      </div>
    </div>
    <div class="content-img-box" style="right: 10%">
      <img
        v-lazy="require('../../../../../assets/img/introduction/fusionx.png')"
      />
    </div>
  </section>
  <section class="introduction-item-container">
    <div
      class="bg-box wow animate__animated animate__fadeInLeft"
      style="background: #ecf9fe"
    >
      <div class="bg-item" style="left: 5%">
        <img src="~@/assets/img/introduction/item3.webp" />
      </div>
    </div>
    <section class="content wow animate__animated animate__fadeInRight">
      <div class="title">无人机变电站巡检</div>
      <div class="mb-content-item">
        <div class="content-item">室内巡检</div>
        <div class="content-item">智能识别</div>
        <div class="content-item">自定义航线飞行</div>
      </div>
    </section>
    <div class="content-img-box" style="left: 10%">
      <img v-lazy="require('../../../../../assets/img/introduction/8.jpg')" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick, getCurrentInstance } from 'vue'

export default defineComponent({
  setup() {
    const currentInstance = getCurrentInstance()
    onMounted(() => {
      nextTick(() => {
        if (currentInstance) {
          currentInstance.appContext.config.globalProperties.$wow.init()
        }
      })
    })
    return {}
  }
})
</script>

<style scoped lang="less">
.introduction-item-container {
  // display: none;
  height: 800px;
  position: relative;
  width: 100%;
  display: flex;
  .bg-box {
    flex: 1;
    background: #f0f4ff;
    position: relative;
    .bg-item {
      position: absolute;
      top: 104px;
      img {
        height: 225px;
      }
    }
  }
  .content {
    flex: 1;
    .title {
      margin: 25% 0px 20px 30%;
      font-size: 34px;
      font-weight: bold;
    }
    .content-item {
      margin-left: 30%;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 300;
      margin-right: 10%;
    }
  }
  .content-img-box {
    position: absolute;
    width: 50%;
    height: 60%;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    border-radius: 24px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 24px;
    }
    video {
      width: 100%;
      border-radius: 24px;
    }
  }
}
@media screen and (max-width: 899px) {
  .introduction-item-container {
    // display: block !important;
    height: 400px;
    flex-direction: column;
    width: 100%;
    position: relative;
    .bg-box {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #f0f4ff;
      z-index: -1;
      .bg-item {
        display: none;
      }
    }
    .content {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      .title {
        margin: 20px 0px 10px 10px;
        font-size: 20px;
        font-weight: bold;
      }
      .mb-content-item {
        width: 100%;
        position: absolute;
        height: 80px;
        bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .content-item {
          font-size: 16px;
          font-weight: 300;
          margin: 0 10px;
          white-space: nowrap;
        }
      }
    }
    .content-img-box {
      position: absolute;
      border-radius: 0;
      width: 80%;
      img {
        border-radius: 0;
      }
    }
  }
}
</style>
