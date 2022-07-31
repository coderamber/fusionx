<template>
  <div class="home">
    <!-- 轮播 -->
    <fx-swiper />
    <div class="content">
      <div class="main">
        <!-- 新闻 -->
        <fx-news ref="news" />
      </div>
    </div>
    <!-- 产品 -->
    <fx-introduction ref="service" />
    <!-- 合作伙伴 -->
    <fx-cooperate ref="cooperate" />
    <!-- 底部 -->
    <fx-contact ref="contact" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FxSwiper from './cpns/fx-swiper'
import FxIntroduction from './cpns/fx-introduction'
import FxNews from './cpns/fx-news'
import FxCooperate from './cpns/fx-cooperate'
import FxContact from '@/views/Home/cpns/fx-contact'
export default defineComponent({
  components: {
    FxSwiper,
    FxIntroduction,
    FxNews,
    FxCooperate,
    FxContact
  },
  setup() {
    const service = ref<InstanceType<typeof FxIntroduction>>()
    const news = ref<InstanceType<typeof FxNews>>()
    const cooperate = ref<InstanceType<typeof FxCooperate>>()
    const scrollToDetail = (ele: string) => {
      switch (ele) {
        case 'service':
          service.value?.goView()
          break
        case 'news':
          news.value?.goView()
          break
        case 'cooperate':
          cooperate.value?.goView()
          break
        default:
          break
      }
    }
    return {
      service,
      news,
      cooperate,
      scrollToDetail
    }
  }
})
</script>

<style scoped lang="less">
.home {
  // overflow: hidden;
  font: inherit;
  vertical-align: baseline;
  position: relative;
  .content {
    position: relative;
    padding: 0;
    background: #fff;
    overflow: hidden;
    .main {
      max-width: 1280px;
      padding: 0;
      box-sizing: border-box;
      margin: 0 auto;
    }
  }
}
</style>
