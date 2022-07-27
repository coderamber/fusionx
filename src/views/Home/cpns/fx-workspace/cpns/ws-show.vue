<template>
  <div class="ws-show">
    <div class="ws-show-img">
      <img
        v-lazy="require('../../../../../assets/img/workspace/ws-show1.jpg')"
      />
    </div>
    <div class="ws-show-img">
      <img
        v-lazy="require('../../../../../assets/img/workspace/ws-show2.jpg')"
      />
    </div>
    <div class="ws-show-img">
      <img
        v-lazy="require('../../../../../assets/img/workspace/ws-show3.jpg')"
      />
    </div>
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
.ws-show {
  position: absolute;
  width: 80%;
  left: 50%;
  height: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  .ws-show-img {
    flex: 1;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    img {
      border-radius: 24px;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
@media screen and (max-width: 899px) {
  .ws-show {
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    .ws-show-img {
      flex: 1;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
