<template>
  <div class="xh-title">
    <div class="back-title" :class="[isCenter ? 'center' : '']">
      {{ titleEnglishName }}
      <div class="title">
        {{ titleChineseName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    titleEnglishName: {
      type: String,
      require: true
    },
    titleChineseName: {
      type: String,
      require: true
    },
    isCenter: {
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
.xh-title {
  position: relative;
  height: 200px;
  margin-top: 100px;
  .back-title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 100px;
    z-index: 1;
    color: rgba(57, 147, 150, 0.08);
    font-style: italic;
    .title {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      text-align: center;
      transform: translate(-50%, -50%);
      line-height: 48px;
      font-size: 40px;
      font-weight: 500;
      z-index: 2;
      color: #000;
      font-style: normal;
    }
  }
  .center {
    width: 100%;
    text-align: center;
  }
}
@media screen and (max-width: 899px) {
  .xh-title {
    margin-top: 50px;
    height: 120px;
    .back-title {
      font-size: 70px;
      .title {
        font-size: 32px;
      }
    }
  }
}
</style>
