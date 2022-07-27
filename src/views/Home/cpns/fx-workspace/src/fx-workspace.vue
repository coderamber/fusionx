<template>
  <div class="fx-workspace" ref="workSpace">
    <xh-title
      titleChineseName="关于我们"
      titleEnglishName="ABOUT"
      :isCenter="true"
    />
    <div class="row nav-container">
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <div class="wrapper">
          <nav>
            <input type="radio" name="tab" id="home" checked />
            <input type="radio" name="tab" id="comment" />
            <input type="radio" name="tab" id="envelope" />
            <label for="home" class="home">
              <div @click="handleTabClick(1)">公司简介</div>
            </label>
            <label for="comment" class="comment">
              <div @click="handleTabClick(2)">公司环境</div>
            </label>
            <label for="envelope" class="envelope">
              <div @click="handleTabClick(3)">展厅</div>
            </label>
            <div class="tab"></div>
          </nav>
        </div>
      </div>
    </div>
    <div class="ws-content">
      <transition name="slide-fade" mode="out-in">
        <component
          :is="
            wsSelected === 1
              ? 'WsIntroduction'
              : wsSelected === 2
              ? 'WsEnv'
              : 'WsShow'
          "
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useIntoView from '@/hooks/useIntoView'
import WsIntroduction from '../cpns/ws-introduction.vue'
import WsEnv from '../cpns/ws-env.vue'
import WsShow from '../cpns/ws-show.vue'
import xhTitle from '@/base-ui/xhTitle'
export default defineComponent({
  components: {
    WsIntroduction,
    WsEnv,
    xhTitle,
    WsShow
  },
  setup() {
    const wsSelected = ref(1)
    const workSpace = ref<HTMLElement>()
    const goView = () => {
      if (workSpace.value) {
        useIntoView(workSpace.value)
      }
    }
    const handleTabClick = (item: number) => {
      wsSelected.value = item
    }
    return {
      workSpace,
      goView,
      handleTabClick,
      wsSelected
    }
  }
})
</script>

<style scoped lang="less">
.fx-workspace {
  position: relative;
  text-align: center;
  .nav-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
  }
  .wrapper {
    height: 60px;
    margin: 0 10px;
    margin-bottom: 20px;
    line-height: 60px;
    background-color: #fff;
    box-shadow: 0 5px 20px 0 rgba(19, 60, 154, 0.08), inset 0 2px 0 0 #fff;
    border-radius: 50px;
    nav {
      display: flex;
      position: relative;
      input {
        display: none;
      }
      .tab {
        position: absolute;
        height: 100%;
        width: 33.33333333%;
        left: 0px;
        bottom: 0px;
        background: #399396;
        border-radius: 50px;
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      label {
        flex: 1;
        width: 100%;
        position: relative;
        z-index: 1;
        cursor: pointer;
        div {
          position: relative;
          z-index: -1;
          color: #333;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
  .wrapper nav #home:checked ~ label.home div,
  .wrapper nav #comment:checked ~ label.comment div,
  .wrapper nav #envelope:checked ~ label.envelope div {
    color: #fff;
    /* 这里字体颜色改变也需要加个动画过渡 */
    transition: 0.6s;
  }
  .wrapper nav #comment:checked ~ .tab {
    left: 33.33333333333%;
  }
  .wrapper nav #envelope:checked ~ .tab {
    left: 66.66666666666%;
  }
  .ws-content {
    margin-top: 50px;
    width: 100%;
    height: 600px;
    position: relative;
  }
}
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
