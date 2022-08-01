<template>
  <div class="swiper-item">
    <div class="img-container">
      <template v-if="video">
        <video :src="swiperItemConfig.url" loop muted autoplay></video>
      </template>
      <template v-else>
        <img :src="swiperItemConfig.url" alt="赋兴数字科技" />
      </template>
    </div>
    <div
      class="text-container"
      v-show="showText"
      :style="{
        top: swiperItemConfig.top ? swiperItemConfig.top + 'px' : 'auto',
        bottom: swiperItemConfig.bottom
          ? swiperItemConfig.bottom + 'px'
          : 'auto',
        right: swiperItemConfig.right ? swiperItemConfig.right + 'px' : 'auto',
        left: swiperItemConfig.left ? swiperItemConfig.left + 'px' : 'auto'
      }"
    >
      <h1 class="title">
        <span style="width: 300px">
          <i>{{ swiperItemConfig.title }} </i>
        </span>
      </h1>
      <p>{{ swiperItemConfig.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IItemsConfig } from '../config/swiper.config'
export default defineComponent({
  props: {
    swiperItemConfig: {
      type: Object as PropType<IItemsConfig>,
      required: true
    },
    showText: {
      type: Boolean,
      default: true
    },
    video: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
@fontColor: #fff;
@keyframes fade-in {
  to {
    opacity: 1;
  }
}
@keyframes swift-up {
  to {
    top: 0rem;
  }
}
.swiper-item {
  position: relative;
  width: 100%;
  height: 100%;
  .img-container {
    height: 100%;
    width: 100%;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
    }
  }
  .text-container {
    font-size: 24px;
    position: absolute;
    width: 600px;
    font-family: Helvetica;
    z-index: 999;
    text-shadow: 2px 2px 5px #222;
    .title {
      margin: 0;
      letter-spacing: -2px;
      color: @fontColor;
    }
    span {
      display: inline-block;
      overflow: hidden;
      position: relative;
      top: 0.8rem;
      animation: 0.6s swift-up ease-in-out forwards;
      i {
        font-style: normal;
        position: relative;
        top: 2rem;
        animation: 0.8s swift-up ease-in-out forwards;
      }
    }
    p {
      font-size: 26px;
      color: @fontColor;
      line-height: 34px;
      position: relative;
      top: 0.8rem;
      opacity: 0;
      animation: 0.5s swift-up ease-out forwards, 0.5s fade-in ease-out forwards;
      animation-delay: 0.8s;
    }
  }
}
</style>
