<template>
  <div class="fx-menus" @touchmove.stop.prevent>
    <div class="close" @click="hideDemoDropDown">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="shade"></div>
    </div>
    <div class="menus-box">
      <div class="menu-item" @click="handleClick('news')">新闻</div>
      <div class="menu-item" @click="handleClick('service')">产品及服务</div>
      <div class="menu-item" @click="handleClick('workSpace')">公司简介</div>
      <div class="menu-item" @click="handleClick('cooperate')">合作伙伴</div>
      <div class="menu-item" @click="handleClick('contact')">联系方式</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['hideFxMenu', 'handleScroll'],
  setup(props, { emit }) {
    const hideDemoDropDown = () => {
      emit('hideFxMenu')
    }
    const handleClick = (id: string) => {
      emit('hideFxMenu')
      emit('handleScroll', id)
    }
    return {
      hideDemoDropDown,
      handleClick
    }
  }
})
</script>

<style scoped lang="less">
.fx-menus {
  min-height: 600px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100001;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
  .close {
    position: absolute;
    top: 35px;
    right: 20px;
    height: 30px;
    width: 30px;
    .line1 {
      border-bottom: 4px solid #000;
      border-radius: 2px;
      width: 40px;
      transform: rotate(45deg);
    }
    .line2 {
      border-bottom: 4px solid #000;
      border-radius: 2px;
      width: 40px;
      transform: rotate(-45deg);
    }
    &:hover {
      cursor: pointer;
    }
  }
  .menus-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .menu-item {
      font-size: 30px;
      margin: 20px 0;
    }
  }
}
</style>
