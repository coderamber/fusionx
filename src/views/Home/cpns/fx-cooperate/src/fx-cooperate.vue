<template>
  <div class="fx-cooperate" ref="cooperate">
    <xh-title
      titleChineseName="合作伙伴"
      titleEnglishName="COOP"
      :isCenter="true"
    />
    <div class="img-box">
      <div
        class="img-container-item"
        v-for="(item, index) in cooperates"
        :key="index"
      >
        <img v-lazy="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useIntoView from '@/hooks/useIntoView'
import { cooperates } from '../config/config'
import xhTitle from '@/base-ui/xhTitle'
export default defineComponent({
  components: {
    xhTitle
  },
  setup() {
    const cooperate = ref<HTMLElement>()
    const goView = () => {
      if (cooperate.value) {
        useIntoView(cooperate.value)
      }
    }
    return {
      cooperate,
      goView,
      cooperates
    }
  }
})
</script>

<style scoped lang="less">
.fx-cooperate {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  position: relative;
  margin-bottom: 80px;
  .img-box {
    display: flex;
    max-width: 1200px;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    .img-container-item {
      width: fit-content;
      height: fit-content;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      margin: 15px;
      box-shadow: 0 5px 20px 0 rgba(19, 60, 154, 0.08), inset 0 2px 0 0 #fff;
      transition: 0.3s all;
      img {
        height: 80px;
        margin: auto;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    @media screen and (max-width: 893px) {
      .img-container-item {
        width: 15.2vw !important;
        height: 8vw;
        margin: 0.8vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    @media screen and (max-width: 499px) {
      .img-container-item {
        width: 20.266666667vw !important;
        height: 10.6666666667vw;
        border-radius: 1.0666666667vw;
        margin: 1.06666667vw;
        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 893px) {
    .img-box {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
