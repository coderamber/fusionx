<template>
  <div class="fx-news" ref="news">
    <xh-title
      titleChineseName="新闻/动态"
      titleEnglishName="NEWS"
      :isCenter="true"
    />
    <div class="fx-news-container">
      <div class="news-container">
        <section class="news-info">
          <div class="info-content">
            {{ newObj.text }}
          </div>
          <div class="info-tag">
            <div
              class="tag-item"
              v-for="(item, index) in newObj.tag"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="info-time">{{ newObj.time ?? '' }}</div>
        </section>
      </div>
      <swiper
        class="swiper-container"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :autoplay="{ autoplay: true }"
        :space-between="30"
        :slides-per-view="1"
        @realIndexChange="realIndexChange"
      >
        <template v-for="(item, index) in banners" :key="index">
          <swiper-slide>
            <div class="video-box">
              <img :src="item" alt="赋兴数字科技" />
            </div>
          </swiper-slide>
        </template>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import useIntoView from '@/hooks/useIntoView'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import 'swiper/swiper-bundle.css'
import xhTitle from '@/base-ui/xhTitle'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper'
import { INews, newsInfo } from '../config/news.config'
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    xhTitle
  },
  setup() {
    const news = ref<HTMLElement>()
    const goView = () => {
      if (news.value) {
        useIntoView(news.value)
      }
    }

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
    const banners = [
      require('../../../../../assets/img/news/news1.jpg'),
      require('../../../../../assets/img/news/1.jpg'),
      require('../../../../../assets/img/news/6.jpg'),
      require('../../../../../assets/img/news/3.jpg')
    ]
    const swiperOptions = {
      pagination: {
        el: '.swiper-pagination'
      }
    }
    const realIndexChange = (show: typeof Swiper) => {
      newObj.value = newsInfo[show.activeIndex]
    }
    const newObj: Ref<INews> = ref({
      text: '“赋兴团队到变电站现场进行无人机部署和航拍测试”',
      tag: ['无人机巡检', '调研', '现场部署'],
      time: '日期: 2022-7-21'
    })
    return {
      news,
      goView,
      banners,
      swiperOptions,
      realIndexChange,
      newObj
    }
  }
})
</script>

<style scoped lang="less">
.fx-news {
  .fx-news-container {
    position: relative;
    padding-bottom: 25%;
    &::before {
      position: absolute;
      top: 0;
      right: 63.83%;
      width: 1000px;
      height: 100%;
      content: '';
      background: #fff;
      z-index: 99;
    }
    .news-container {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 38.7%;
      text-align: center;
      background: #fff;
      padding-bottom: 19.53%;
      border-radius: 24px;
      z-index: 1000;
      box-shadow: 0 5px 20px 0 rgba(19, 60, 154, 0.08), inset 0 2px 0 0 #fff;
      .news-info {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 9.7% 40px 40px;
        text-align: left;
        box-sizing: border-box;
        .info-content {
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
          line-height: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .info-tag {
          margin-top: 20px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          .tag-item {
            border: 1px solid #399396;
            margin: 5px 10px;
            padding: 0 10px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 4px;
            color: #399396;
            &:nth-child(1) {
              margin-left: 0;
            }
          }
        }
        .info-time {
          position: absolute;
          bottom: 10px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
        }
      }
    }
    .swiper-container {
      position: absolute;
      right: 13.83%;
      width: 50%;
      margin-left: 0;
      margin-bottom: 32px;
      overflow: visible;
      .swiper-button-next {
        position: absolute;
        right: -150px;
      }
      .swiper-button-prev {
        position: absolute;
        left: 700px;
      }
      &::before {
        position: absolute;
        left: -1100px;
        top: -10%;
        content: '';
        width: 1000px;
        height: 120%;
        background: #fff;
        z-index: 999;
      }
      .video-box {
        position: relative;
        width: 100%;
        padding-bottom: 50%;
        border-radius: 24px;
        display: inline-block;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  @media screen and (max-width: 899px) {
    .fx-news-container {
      height: 450px;
      padding: 0;
      position: relative;
      &::before {
        display: none;
      }
      .news-container {
        position: absolute;
        transform: translateY(0);
        top: 40%;
        width: 92%;
        margin-left: 4%;
        bottom: 20px;
        height: 230px;
        .news-info {
          padding: 20px !important;
        }
      }
      .swiper-container {
        width: 70%;
        &::before {
          display: none;
        }
        .video-box {
          border-radius: 0;
        }
      }
    }
  }
}
</style>
