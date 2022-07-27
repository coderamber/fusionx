<template>
  <div class="app" ref="AppRef">
    <!-- data-0="background-position:0px 0px;"
    data-100000="background-position:0px -50000px;" -->
    <router-view />
    <transition name="slide-fade">
      <scroll-top v-show="!isTop" @scroll="scrollTop" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ScrollTop from '@/base-ui/scrollTop'
import useIntoView from '@/hooks/useIntoView'
// import skrollr from 'skrollr'
export default defineComponent({
  components: {
    ScrollTop
  },
  setup() {
    // window.addEventListener('load', () => {
    //   skrollr.init({
    //     forceHeight: false
    //   })
    // })
    const isTop = ref(true)
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 200) {
        isTop.value = false
      } else {
        isTop.value = true
      }
    })
    const AppRef = ref<HTMLElement>()
    const scrollTop = () => {
      if (AppRef.value) {
        useIntoView(AppRef.value)
      }
    }
    return {
      isTop,
      scrollTop,
      AppRef
    }
  }
})
</script>

<style scoped lang="less">
// .app {
//   background: url('~@/assets/img/bg1.svg') repeat fixed;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: -1;
// }
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
</style>
