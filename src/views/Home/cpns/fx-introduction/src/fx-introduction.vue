<template>
  <div class="fx-introduction" ref="service">
    <xh-title
      titleChineseName="产品/服务介绍"
      titleEnglishName="SERVICE"
      :isCenter="true"
    />
    <introduction-item />
    <!-- <div class="intro-box">
      <div class="intro-left">
        <ul>
          <div>111</div>
        </ul>
      </div>
      <div class="intro-right"></div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useIntoView from '@/hooks/useIntoView'
import IntroductionItem from '../cpns/introduction-item.vue'
import xhTitle from '@/base-ui/xhTitle'
export default defineComponent({
  components: {
    xhTitle,
    IntroductionItem
  },
  setup() {
    const service = ref<HTMLElement>()
    const goView = () => {
      if (service.value) {
        useIntoView(service.value)
      }
    }
    return {
      service,
      goView
    }
  }
})
</script>

<style scoped lang="less">
.fx-introduction {
  width: 100%;
  .intro-box {
    position: relative;
    display: flex;
    width: calc(100vw - ((100vw - 1280px) / 2));
    height: 300vh;
    margin-left: calc((100vw - 1280px) / 2);
    border: 2px solid #000;
    .intro-left {
      position: sticky;
      z-index: 99;
      top: 0;
      display: flex;
      width: 479px;
      height: 100vh;
      margin: 0px 86px 0px 56px;
      ul {
        margin: 0;
        padding: 0;
      }
    }
    .intro-right {
      position: absolute;
      z-index: 1;
      top: 0;
      left: calc(621px);
      display: flex;
      overflow: hidden;
      width: calc((((100vw - 479px) - 56px) - 86px) - ((100vw - 1280px) / 2));
      height: 300vh;
      pointer-events: none;
    }
  }
}
</style>
