<template>
  <div class="home">
    <!-- 头部 -->
    <fx-header
      @scroll="scrollToDetail"
      @showDropDown="showDropDown"
      @showFxMenus="showFxMenus"
    />
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
    <!-- 公司简介 -->
    <fx-work-space ref="workSpace" />
    <!-- 合作伙伴 -->
    <fx-cooperate ref="cooperate" />
    <!-- 底部 -->
    <fx-contact ref="contact" />
    <!-- demo下拉菜单 -->
    <transition name="slide-fade">
      <drop-down v-show="demoDropDownShow" @hideDropDown="hideDropDown" />
    </transition>
    <transition name="slide-fade">
      <fx-menus
        v-show="fxMenusShow"
        @hideFxMenu="hideFxMenu"
        @handleScroll="scrollToDetail"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FxHeader from './cpns/fx-header'
// import FxHeader from '@/components/FxHeader/'
import FxSwiper from './cpns/fx-swiper'
import FxIntroduction from './cpns/fx-introduction'
import FxNews from './cpns/fx-news'
import FxCooperate from './cpns/fx-cooperate'
import FxWorkSpace from './cpns/fx-workspace'
import FxContact from './cpns/fx-contact'
import DropDown from './cpns/drop-down/drop-down.vue'
import FxMenus from '../Home/cpns/fx-header/menus/FxMenus.vue'
export default defineComponent({
  components: {
    FxHeader,
    FxSwiper,
    FxIntroduction,
    FxNews,
    FxCooperate,
    FxWorkSpace,
    FxContact,
    DropDown,
    FxMenus
  },
  setup() {
    const service = ref<InstanceType<typeof FxIntroduction>>()
    const news = ref<InstanceType<typeof FxNews>>()
    const cooperate = ref<InstanceType<typeof FxCooperate>>()
    const workSpace = ref<InstanceType<typeof FxWorkSpace>>()
    const contact = ref<InstanceType<typeof FxContact>>()
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
        case 'workSpace':
          workSpace.value?.goView()
          break
        case 'contact':
          contact.value?.goView()
          break
        default:
          break
      }
    }
    const demoDropDownShow = ref(false)
    const showDropDown = () => {
      demoDropDownShow.value = true
    }
    const hideDropDown = () => {
      demoDropDownShow.value = false
    }
    const fxMenusShow = ref(false)
    const showFxMenus = () => {
      fxMenusShow.value = true
    }
    const hideFxMenu = () => {
      fxMenusShow.value = false
    }
    return {
      service,
      news,
      cooperate,
      workSpace,
      contact,
      scrollToDetail,
      demoDropDownShow,
      showDropDown,
      hideDropDown,
      showFxMenus,
      fxMenusShow,
      hideFxMenu
    }
  }
})
</script>

<style scoped lang="less">
.home {
  overflow: hidden;
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
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
