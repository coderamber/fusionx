<template>
  <div class="control-container">
    <div class="right-bg"></div>
    <div class="left-btns">
      <div class="btn">园区导航</div>
      <div class="btn">空间管理</div>
      <div class="btn">电梯管理</div>
      <div class="btn" @click="goHome">巡检系统</div>
      <div class="hide-btn"></div>
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
.control-container {
  position: relative;
  width: 250px;
  height: 500px;
  .right-bg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    background: url('~@/assets/img/demo1/arc.png') no-repeat center;
    background-size: contain;
  }
  .hide-btn {
    position: absolute;
    top: 50%;
    right: 0;
    height: 50px;
    width: 50px;
    transform: translateY(-50%);
    background: url('~@/assets/img/demo1/arrow.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
  }
  .left-btns {
    height: 100%;
    display: flex;
    flex-direction: column;
    .btn {
      margin: 30px 60px 30px 40px;
      flex: 1;
      background: url('~@/assets/img/demo1/button.png') no-repeat center;
      background-size: contain;
      color: #fff;
      font-weight: 500;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
