<template>
  <div class="app" ref="AppRef">
    <!-- 头部 -->
    <fx-header
      @scroll="scrollToDetail"
      @showDropDown="showDropDown"
      @showFxMenus="showFxMenus"
    />
    <router-view v-slot="{ Component }">
      <component :is="Component" ref="viewRef" />
    </router-view>
    <transition name="slide-fade">
      <scroll-top v-show="!isTop" @scroll="scrollTop" />
    </transition>
    <!-- 下拉菜单 -->
    <transition name="slide-header">
      <drop-down v-show="demoDropDownShow" @hideDropDown="hideDropDown" />
    </transition>
    <transition name="slide-header">
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
import { useRouter } from 'vue-router'
import ScrollTop from '@/base-ui/scrollTop'
import useIntoView from '@/hooks/useIntoView'
import FxHeader from '@/base-ui/fx-header'
import DropDown from '@/base-ui/fx-header/menus/drop-down.vue'
import FxMenus from '@/base-ui/fx-header/menus/FxMenus.vue'
import Home from './views/Home/home.vue'
export default defineComponent({
  components: {
    FxHeader,
    ScrollTop,
    DropDown,
    FxMenus
  },
  setup() {
    const isTop = ref(true)
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 200) {
        isTop.value = false
      } else {
        isTop.value = true
      }
    })
    const router = useRouter()
    const AppRef = ref<HTMLElement>()
    const viewRef = ref<InstanceType<typeof Home>>()
    const scrollTop = () => {
      if (AppRef.value) {
        useIntoView(AppRef.value)
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
    const scrollToDetail = (ele: string) => {
      if (ele === 'home') {
        router.push('/')
      } else if (ele === 'workSpace') {
        router.push('/about')
      } else {
        router.push('/').then(() => {
          viewRef.value?.scrollToDetail(ele)
        })
      }
    }
    return {
      isTop,
      scrollTop,
      AppRef,
      demoDropDownShow,
      showDropDown,
      hideDropDown,
      showFxMenus,
      fxMenusShow,
      hideFxMenu,
      viewRef,
      scrollToDetail
    }
  }
})
</script>

<style scoped lang="less">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-header-enter-active {
  transition: all 0.4s ease-out;
}
.slide-header-leave-active {
  transition: all 0.4s ease-in;
}
.slide-header-enter-from,
.slide-header-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
