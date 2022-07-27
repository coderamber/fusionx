<template>
  <div class="fx-swiper">
    <el-carousel :interval="5000" arrow="always" @change="changeItem">
      <el-carousel-item v-for="(item, index) in itemsConfig" :key="item.title">
        <swiper-item
          :swiperItemConfig="item"
          :showText="showIndex === index"
          :video="item.video"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { itemsConfig } from '../config/swiper.config'
import SwiperItem from '../cpns/swiper-item.vue'
import 'element-plus/theme-chalk/el-carousel.css'
import 'element-plus/theme-chalk/el-carousel-item.css'
import 'element-plus/theme-chalk/el-icon.css'
export default defineComponent({
  components: {
    ElCarousel,
    ElCarouselItem,
    SwiperItem
  },
  setup() {
    const showIndex = ref(0)
    const changeItem = (index: number) => {
      showIndex.value = index
    }
    return {
      showIndex,
      itemsConfig,
      changeItem
    }
  }
})
</script>

<style scoped lang="less">
@swiperHeight: 100vh;
.fx-swiper {
  position: relative;
  height: @swiperHeight;
  overflow: hidden;
}
::v-deep .el-carousel__container {
  min-height: @swiperHeight;
}
@media screen and (max-width: 899px) {
  .fx-swiper {
    position: relative;
    height: 40vh;
    overflow: hidden;
  }
  ::v-deep .el-carousel__container {
    min-height: 40vh;
  }
}
</style>
