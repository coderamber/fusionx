<template>
  <header class="fx-header top" ref="fxHeader">
    <div class="logo">
      <!-- <div class="logo-text" style="margin-left: 10px">赋兴 Fusionx</div> -->
      <div class="logo-img" ref="logoImgRef"></div>
    </div>
    <ul>
      <li v-for="item in menus" :key="item.name">
        <template v-if="item.id !== 'demo'">
          <a @click="handleScroll(item.id)">{{ item.name }}</a>
        </template>
        <template v-else>
          <button @click="handleScroll(item.id)" class="demo-btn">
            演示Demo
          </button>
        </template>
      </li>
    </ul>
    <div class="mb-btn" @click="showMenus">
      <div class="small-line"></div>
      <div class="small-line"></div>
      <div class="small-line"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { menus } from '../config/header.config'
import { fxHeader, useScroll, logoImgRef } from '../hooks/useScroll'
export default defineComponent({
  emits: ['scroll', 'showDropDown', 'showFxMenus'],
  setup(prop, { emit }) {
    useScroll()

    const handleScroll = (id: string) => {
      if (id === 'demo') {
        emit('showDropDown')
      } else {
        emit('scroll', id)
      }
    }

    const showMenus = () => {
      emit('showFxMenus')
    }
    return {
      fxHeader,
      menus,
      handleScroll,
      showMenus,
      logoImgRef
    }
  }
})
</script>

<style scoped lang="less">
@BgColor: rgba(255, 255, 255, 0.72);
@fontColorBlack: #000;
@fontColorWhite: #fff;
@fontActive: #1967d3;
.font-style(@fontColor) {
  .small-line {
    width: 20px;
    border: 1.5px solid @fontColor;
    margin: 5px 0;
  }
}
.top {
  background: transparent !important;
  backdrop-filter: none !important;
  border-bottom: none !important;
  color: #fff !important;
  .font-style(@fontColorWhite) !important;
}
.sticky {
  height: 0 !important;
  background: @BgColor;
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid #d0d0d0;
}
.visible {
  height: 70px !important;
  background: @BgColor;
  backdrop-filter: saturate(180%) blur(20px);
  position: relative;
  border-bottom: 1px solid #d0d0d0;
  .font-style(@fontColorBlack);
}
.fx-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  color: @fontColorWhite;
  padding: 0 50px 0 0;
  z-index: 100000;
  overflow: hidden;
  color: #000;
  .logo {
    height: 70px;
    width: 200px;
    .logo-img {
      height: 70px;
      width: auto;
      background: url('~@/assets/img/logo1.png') no-repeat center;
      background-size: contain;
    }
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    li {
      position: relative;
      list-style: none;
      a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          color: @fontActive;
        }
      }
    }
  }
  @media screen and (max-width: 899px) {
    ul {
      display: none;
    }
  }
  .mb-btn {
    display: none;
    .mb-btn {
      display: block;
      position: absolute;
      right: 10px;
      .small-line {
        width: 20px;
        border: 1.5px #fff solid;
        margin: 5px 0;
      }
    }
  }
  .demo-btn {
    border: none;
    color: #fff;
    background-color: #399396;
    height: 40px;
    width: 120px;
    border-radius: 20px;
    &:hover {
      background-color: #63b1b4;
      cursor: pointer;
    }
  }
  .mb-menus {
    display: none;
  }
}
@media screen and (max-width: 899px) {
  .fx-header {
    padding: 0 10px;
    .mb-btn {
      display: block;
      position: absolute;
      right: 20px;
      .small-line {
        width: 20px;
        margin: 5px 0;
      }
    }
  }
}
</style>
