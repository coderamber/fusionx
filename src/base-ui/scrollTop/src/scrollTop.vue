<template>
  <div class="scrollTop-container" @click="scrollToTop">
    <svg
      t="1658385493501"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3229"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
    >
      <path d="M511.609097 961.619254" p-id="3230" fill="#399396"></path>
      <path
        d="M846.620104 753.070474 511.629563 406.696676 172.304298 757.600651l0-0.017396c-11.521404 11.462053-27.132964 18.532075-44.375673 18.532075-35.320437 0-63.923892-29.600155-63.923892-66.109674 0-17.817808 6.831592-33.986045 17.917068-45.886073l0 0 383.580189-396.650879 0 0c11.643178-12.456706 27.930119-20.2236 46.006823-20.2236l0.12075 0 0.156566 0c18.076704 0 34.406624 7.766894 46.006823 20.2236l0.038886 0 383.54642 396.650879-0.160659 0.160659c11.042497 11.877515 17.796318 27.969005 17.796318 45.725414 0 36.509519-28.605501 66.109674-63.923892 66.109674C875.700419 776.11533 858.342076 767.175727 846.620104 753.070474L846.620104 753.070474zM846.620104 753.070474"
        p-id="3231"
        fill="#399396"
      ></path>
    </svg>
    <div class="text">TOP</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['scroll'],
  setup(props, { emit }) {
    const scrollToTop = () => {
      emit('scroll')
    }
    return {
      scrollToTop
    }
  }
})
</script>

<style scoped lang="less">
.scrollTop-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  background: #fff;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: all 0.5s;
  transform: translateZ(0);
  .text {
    font-size: 13px;
  }
  img {
    height: 20px;
    width: 20px;
  }
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
}
</style>
