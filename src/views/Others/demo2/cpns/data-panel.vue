<template>
  <div class="data-panel">
    <el-row :gutter="28">
      <el-col :lg="6" :xl="4">
        <div class="panel-item">
          <img src="~@/assets/img/demo2/icon1.png" alt="赋兴数字科技" />
          <div>累计巡检次数(次)</div>
          <span class="count">1</span>
          <span class="count">3</span>
          <span class="count">6</span>
        </div>
      </el-col>
      <el-col :lg="6" :xl="4">
        <div class="panel-item">
          <img src="~@/assets/img/demo2/icon2.png" alt="赋兴数字科技" />
          <div>累计飞行时长(小时)</div>
          <span class="count">2</span>
          <span class="count">1</span>
          <span class="count">4</span>
        </div>
      </el-col>
      <el-col :lg="6" :xl="4">
        <div class="panel-item">
          <img src="~@/assets/img/demo2/icon3.png" alt="赋兴数字科技" />
          <div>故障巡检点(处)</div>
          <span class="count">4</span>
          <span class="count">8</span>
        </div>
      </el-col>
      <el-col :lg="6" :xl="4">
        <div class="panel-item">
          <img src="~@/assets/img/demo2/icon4.png" alt="赋兴数字科技" />
          <div>提升发电量(Kw)</div>
          <span class="count">1</span>
          <span class="count">3</span>
          <span class="count">6</span>
        </div>
      </el-col>
      <el-col :lg="6" :xl="4">
        <div class="panel-item">
          <img src="~@/assets/img/demo2/icon5.png" alt="赋兴数字科技" />
          <div>消除安全隐患(起)</div>
          <span class="count">2</span>
          <span class="count">1</span>
        </div>
      </el-col>
      <el-col :lg="6" :xl="4">
        <div class="panel-item">
          <img src="~@/assets/img/demo2/icon6.png" alt="赋兴数字科技" />
          <div>节能减排(吨)</div>
          <span class="count">1</span>
          <span class="count">3</span>
          <span class="count">6</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped lang="less">
.data-panel {
  position: absolute;
  top: 120px;
  left: 8px;
  right: 26%;
  height: 100px;
  display: flex;
  align-items: center;
  .panel-item {
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    div {
      padding: 0 5px;
    }
    img {
      height: 50px;
    }
    span {
      font-size: 24px;
      background: url('~@/assets/img/demo2/number_bg.png') no-repeat;
      background-size: 100%;
      margin-right: 5px;
    }
  }
}
</style>
