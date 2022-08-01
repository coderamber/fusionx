<template>
  <section class="drop-down-container">
    <div class="close" @click="hideDemoDropDown">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="shade"></div>
    </div>
    <div class="demo-container">
      <div class="demo" @click="showDemo(1)">
        <div class="img">
          <img
            v-lazy="require('../../../assets/img/home/small1.png')"
            alt="赋兴数字科技"
          />
        </div>
        <div class="text">园区能源管理系统</div>
      </div>
      <div class="demo" @click="showDemo(2)">
        <div class="img">
          <!-- <img src="" alt="" /> -->
          <div>建设中....</div>
        </div>
        <div class="text">赋兴电力巡检系统</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  emits: ['hideDropDown'],
  setup(props, { emit }) {
    const router = useRouter()
    const hideDemoDropDown = () => {
      emit('hideDropDown')
    }
    const showDemo = (id: number) => {
      if (id === 1) {
        const url = router.resolve({ path: '/demo1' })
        window.open(url.href, '_blank')
      } else {
        // const url = router.resolve({ path: '/fusionx2' })
        // window.open(url.href, '_blank')
        console.log('建设中')
      }
      emit('hideDropDown')
    }
    return {
      hideDemoDropDown,
      showDemo
    }
  }
})
</script>

<style scoped lang="less">
.drop-down-container {
  min-height: 600px;
  height: 60vh;
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
    top: 20px;
    right: 20px;
    height: 50px;
    width: 50px;
    .line1 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 4px solid #000;
      border-radius: 2px;
      width: 40px;
      transform: rotate(45deg);
    }
    .line2 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 4px solid #000;
      border-radius: 2px;
      width: 40px;
      transform: rotate(-45deg);
    }
    &:hover {
      cursor: pointer;
    }
  }
  .demo-container {
    position: absolute;
    top: 50px;
    left: 20%;
    right: 20%;
    bottom: 0;
    display: flex;
    .demo {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      &:hover {
        cursor: pointer;
      }
      .img {
        flex: 1.5;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img {
          width: 100%;
        }
      }
      .text {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 10px;
      }
    }
  }
}
</style>
