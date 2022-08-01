<template>
  <div class="xh-bg">
    <div class="animate-item1 feature-item1"></div>
    <div class="animate-item2 feature-item2"></div>
    <div class="animate-item3 feature-item3"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.animate-item-box(@bgColor, @bgOpacity) {
  position: absolute;
  border-radius: 100%;
  background: @bgColor;
  opacity: @bgOpacity;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
}
.xh-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  filter: blur(100px);
  .animate-item1 {
    .animate-item-box(#8bc3f1, 0.4);
  }
  .feature-item1 {
    width: 700px;
    height: 700px;
    z-index: -2;
    left: 60%;
    top: 40%;
    animation-duration: 11s;
    animation-name: features_animation_1;
  }
  .animate-item2 {
    .animate-item-box(#239681, 0.2);
  }
  .feature-item2 {
    width: 600px;
    height: 600px;
    z-index: -1;
    left: 40%;
    top: 60%;
    animation-duration: 11s;
    animation-name: features_animation_2;
    animation-direction: reverse;
  }
  .animate-item1 {
    .animate-item-box(#8bc3f1, 0.4);
  }
  .feature-item3 {
    width: 500px;
    height: 500px;
    z-index: -3;
    left: 50%;
    top: 50%;
    animation-duration: 11s;
    animation-name: features_animation_3;
    animation-direction: reverse;
  }
}
@keyframes features_animation_1 {
  0% {
    transform: translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%);
  }
  25% {
    transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
      rotate(80deg) translateX(30%);
  }
  50% {
    transform: translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%);
  }
  75% {
    transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
      rotate(240deg) translateX(15%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%);
  }
}
@keyframes features_animation_2 {
  0% {
    transform: translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%);
  }
  25% {
    transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
      rotate(110deg) translateX(-5%);
  }
  50% {
    transform: translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%);
  }
  75% {
    transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
      rotate(300deg) translateX(-10%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%);
  }
}
@keyframes features_animation_3 {
  0% {
    transform: translateY(-50%) translateX(-50%) translateX(-15%)
      translateY(10%);
  }
  20% {
    transform: translateY(-50%) translateX(-50%) translateX(20%)
      translateY(-30%);
  }
  40% {
    transform: translateY(-50%) translateX(-50%) translateX(-25%)
      translateY(-15%);
  }
  60% {
    transform: translateY(-50%) translateX(-50%) translateX(30%) translateY(20%);
  }
  80% {
    transform: translateY(-50%) translateX(-50%) translateX(5%) translateY(35%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) translateX(-15%)
      translateY(10%);
  }
}
</style>
