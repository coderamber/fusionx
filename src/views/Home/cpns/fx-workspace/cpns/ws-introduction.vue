<template>
  <div class="ws-introduction">
    <div class="ws-bg"></div>
    <div class="ws-intro-text">
      <p>
        赋兴（浙江）数字科技有限公司是一家专业从事电力、能源及城市公共服务领域智慧化、信息化系列产品及平台研发的科技型企业，公司以复旦大学、同济大学博士团队为核心，汇聚了一批大数据分析、人工智能、虚拟现实、5G通信和电力电子技术领域的领军技术力量。
        公司在“电站数字化管理”、“全自主无人机立体巡检系统”、“5G无人机VR全景直播系统”以及“智慧能源管理解决方案”等业务领域可提供成熟的解决方案，并已在电力、能源、环保、市政等领域实现成功应用。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.ws-introduction {
  position: relative;
  height: 100%;
  width: 100%;
  .ws-intro-text {
    position: absolute;
    top: 50%;
    box-shadow: 0 5px 20px 0 rgba(19, 60, 154, 0.08), inset 0 2px 0 0 #fff;
    padding: 20px;
    border-radius: 24px;
    background: #fff;
    height: 50%;
    width: 40%;
    left: 10%;
    transform: translateY(-50%);
    overflow: scroll;
    p {
      font-size: 18px;
      line-height: 32px;
    }
  }
  .ws-bg {
    background: url('~@/assets/img/workspace/ws-intro1.jpg') no-repeat center;
    background-size: cover;
    position: absolute;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    left: 50%;
    right: 0;
    height: 100%;
  }
  @media screen and (max-width: 899px) {
    .ws-bg {
      left: 0;
      border-radius: 0;
    }
    .ws-intro-text {
      width: 100%;
      left: 0;
      right: 0;
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: none;
    }
  }
}
</style>
