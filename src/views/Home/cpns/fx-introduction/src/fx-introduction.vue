<template>
  <div class="fx-introduction" ref="service">
    <xh-title
      titleChineseName="产品/服务介绍"
      titleEnglishName="SERVICE"
      :isCenter="true"
    />
    <introduction-item />
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
  position: relative;
}
</style>
