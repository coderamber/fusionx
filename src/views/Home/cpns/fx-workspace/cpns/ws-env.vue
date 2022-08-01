<template>
  <div class="ws-env">
    <div class="ws-env-img">
      <img
        v-lazy="require('../../../../../assets/img/workspace/ws-env1.jpg')"
        alt="赋兴数字科技"
      />
    </div>
    <div class="ws-env-img">
      <img
        v-lazy="require('../../../../../assets/img/workspace/ws-env2.jpg')"
        alt="赋兴数字科技"
      />
    </div>
    <div class="ws-env-img">
      <img
        v-lazy="require('../../../../../assets/img/workspace/ws-env3.jpg')"
        alt="赋兴数字科技"
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
.ws-env {
  position: absolute;
  width: 80%;
  left: 50%;
  height: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  .ws-env-img {
    flex: 1;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      border-radius: 24px;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
@media screen and (max-width: 899px) {
  .ws-env {
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    .ws-env-img {
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
