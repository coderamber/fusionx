<template>
  <div class="fx-group" ref="group">
    <div class="title">团队介绍</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useIntoView from '@/hooks/useIntoView'

//这里就是更新后的路径，以前是import 'swiper/css'
import 'swiper/swiper.min.css'
export default defineComponent({
  setup() {
    const group = ref<HTMLElement>()
    const goView = () => {
      if (group.value) {
        useIntoView(group.value)
      }
    }
    //自动轮播的配置
    const autoplayOptions = {
      delay: 500,
      disableOnInteraction: false,
      loop: false,
      pauseOnMouseEnter: true,
      reverseDirection: true
    }

    return {
      group,
      goView,
      autoplayOptions
    }
  }
})
</script>

<style scoped lang="less">
.fx-group {
  height: 300px;
  background: #f5f5f5;
  .title {
    margin: 96px 0 40px;
    line-height: 48px;
    font-size: 32px;
    font-weight: 500;
  }
}
</style>
