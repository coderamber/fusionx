<template>
  <nav class="navbar navbar-expand-lg fx-header">
    <div class="container-fluid">
      <a class="navbar-brand logo-text" href="#">赋兴 Fusionx</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">新闻</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">产品及服务</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">公司简介</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">合作伙伴</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">联系方式</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">演示Demo</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
.fx-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  // background-color: transparent !important;
  background: #fff;
  z-index: 999999999999;
  .logo-text {
    font-weight: 700;
    font-size: 30px;
    font-style: italic;
    color: #000;
  }
  .nav-link {
    color: #000;
    &.active {
      font-weight: bold;
    }
  }
}
</style>
