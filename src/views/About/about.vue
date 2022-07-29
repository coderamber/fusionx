<template>
  <div class="about-container">
    <div class="banner-box">
      <h1>关于我们</h1>
    </div>
    <div class="content">
      <div class="main">
        <div class="title">
          <img src="~@/assets/img/icon/intro.svg" alt="" />
          <span>公司简介</span>
        </div>
        <!-- <div class="title-2">赋兴（浙江）数字科技有限公司</div> -->
        <p>
          &emsp;&emsp;公司成立于2021年，是一家专业从事电力、能源及城市公共服务领域智慧化、信息化系列产品及平台研发的科技型企业，公司总部位于浙江省嘉兴市南湖区中科院三期，公司以<strong>复旦大学、同济大学博士团队为核心，联合浙江清华长三角研究院</strong>。
        </p>
        <p>
          &emsp;&emsp;公司于2022年6月获评<strong>国家级科技型中小企业</strong>，已通过<strong>ISO9001质量管理体系</strong>认证，是民航华东局授权的通用<strong>航空经营企业</strong>。
        </p>
        <p>
          &emsp;&emsp;汇聚了一批<strong>大数据分析、人工智能、虚拟现实、5G通信和电力电子技术领域</strong>的领军技术力量。
        </p>
        <p>
          &emsp;&emsp;公司在“<strong>电站数字化管理</strong>”、“<strong>全自主无人机立体巡检系统</strong>”、“<strong>5G无人机VR全景直播系统</strong>”以及“<strong>智慧能源管理解决方案</strong>”等业务领域可提供成熟的解决方案,并已在电力、能源、环保、市政等领域实现成功应用。
        </p>
        <div class="title">
          <img src="~@/assets/img/icon/show.svg" alt="" />
          <span>公司展厅</span>
        </div>
        <div class="swiper-box">
          <swiper
            class="top-swiper"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            }"
            :modules="modules"
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
          >
            <swiper-slide class="slide" v-for="index in 3" :key="index">
              <img
                :src="require(`../../assets/img/about/ws-show${index}.jpg`)"
              />
            </swiper-slide>
          </swiper>
          <swiper
            class="thumbs-swiper"
            :modules="modules"
            :space-between="10"
            :slides-per-view="4"
            :watch-slides-progress="true"
            :prevent-clicks="false"
            :prevent-clicks-propagation="false"
            @swiper="setThumbsSwiper"
          >
            <swiper-slide class="slide" v-for="index in 3" :key="index">
              <img
                :src="require(`../../assets/img/about/ws-show${index}.jpg`)"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="title">
          <img src="~@/assets/img/icon/env.svg" alt="" />
          <span>公司环境</span>
        </div>
        <div class="swiper-box" style="margin-bottom: 50px">
          <swiper
            class="top-swiper"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            }"
            :modules="modules"
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper2 }"
          >
            <swiper-slide class="slide" v-for="index in 3" :key="index">
              <img
                :src="require(`../../assets/img/about/ws-env${index}.jpg`)"
              />
            </swiper-slide>
          </swiper>
          <swiper
            class="thumbs-swiper"
            :modules="modules"
            :space-between="10"
            :slides-per-view="4"
            :watch-slides-progress="true"
            :prevent-clicks="false"
            :prevent-clicks-propagation="false"
            @swiper="setThumbsSwiper2"
          >
            <swiper-slide class="slide" v-for="index in 3" :key="index">
              <img
                :src="require(`../../assets/img/about/ws-env${index}.jpg`)"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <fx-contact ref="contact" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SwiperClass, { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import 'swiper/swiper-bundle.min.css'
import FxContact from '@/views/Home/cpns/fx-contact'
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    FxContact
  },
  setup() {
    const thumbsSwiper = ref<SwiperClass>()
    const thumbsSwiper2 = ref<SwiperClass>()
    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper
    }
    const setThumbsSwiper2 = (swiper: SwiperClass) => {
      thumbsSwiper2.value = swiper
    }

    return {
      modules: [Navigation, Thumbs],
      setThumbsSwiper,
      setThumbsSwiper2,
      thumbsSwiper,
      thumbsSwiper2
    }
  }
})
</script>

<style scoped lang="less">
.swiper-box {
  height: 480px;
  background-color: #000;
}

.top-swiper,
.thumbs-swiper {
  .slide {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.top-swiper {
  height: 80%;
  width: 100%;
}

.thumbs-swiper {
  height: 20%;
  box-sizing: border-box;
  padding: 0;

  .slide {
    width: 25%;
    height: 100%;
    opacity: 1;
    &:not(.swiper-slide-thumb-active) {
      opacity: 0.4;
    }
  }
}
.about-container {
  overflow: hidden;
  font: inherit;
  vertical-align: baseline;
  position: relative;
  background: url('~@/assets/img/bg1.svg') repeat center;
  .content {
    position: relative;
    padding: 0;
    overflow: hidden;
    .main {
      max-width: 912px;
      padding: 0 20px;
      box-sizing: border-box;
      margin: 0 auto;
      .title {
        margin: 50px 0;
        font-size: 32px;
        font-weight: 700;
        img {
          height: 60px;
          width: 60px;
          margin-right: 10px;
        }
      }
      .title-2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      p {
        color: #8a8f8d;
        padding: 0 100px 0 20px;
      }
    }
  }
  .banner-box {
    background: url('~@/assets/img/about/about-banner1.jpg') no-repeat center;
    background-size: cover;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      z-index: 2;
      color: #fff;
      font-size: 60px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (max-width: 899px) {
    p {
      padding: 0 !important;
    }
    .banner-box {
      height: 300px;
      h1 {
        font-size: 32px;
      }
    }
  }
}
</style>
