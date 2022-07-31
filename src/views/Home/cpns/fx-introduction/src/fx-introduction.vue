<template>
  <div class="fx-introduction" ref="service">
    <xh-title
      titleChineseName="产品/服务介绍"
      titleEnglishName="SERVICE"
      :isCenter="true"
    />
    <introduction-item />
    <div class="intro-box">
      <div class="intro-left">
        <ul>
          <transition-group name="list">
            <div class="intro-content" v-if="showIndex === 0">
              <div class="intro-title">无人巡检方案</div>
              <div class="intro-text">
                业务数据分析、智能识别判别、巡检任务配置、多系统间联动
              </div>
            </div>
            <div class="intro-content" v-if="showIndex === 1">
              <div class="intro-title">赋兴云, 一网统管</div>
              <div class="intro-text">
                飞行监控管理、重点问诊、双光检测、巡检报告生成、拓展性与AI开发
              </div>
            </div>
            <div class="intro-content" v-if="showIndex === 2">
              <div class="intro-title">无人机变电站巡检</div>
              <div class="intro-text">室内巡检、智能识别、自定义航线飞行</div>
            </div>
          </transition-group>
        </ul>
      </div>
      <div class="intro-right" ref="introBoxRef">
        <ul>
          <div class="intro-img-box">
            <div class="intro-img-inner-box">
              <div class="bg-box wow animate__animated animate__fadeInLeft">
                <div class="bg-item" style="left: 5%">
                  <img src="~@/assets/img/introduction/item2.webp" alt="" />
                </div>
              </div>
              <img
                style="left: 5%"
                v-lazy="
                  require('../../../../../assets/img/introduction/solve.png')
                "
              />
            </div>
          </div>
          <div class="intro-img-box">
            <div class="intro-img-inner-box">
              <div
                class="bg-box wow animate__animated animate__fadeInRight"
                style="background: #f0fbef"
              >
                <div class="bg-item" style="right: 5%">
                  <img src="~@/assets/img/introduction/item4.webp" alt="" />
                </div>
              </div>
              <img
                style="right: 5%"
                v-lazy="
                  require('../../../../../assets/img/introduction/fusionx.png')
                "
              />
            </div>
          </div>
          <div class="intro-img-box">
            <div class="intro-img-inner-box">
              <div
                class="bg-box wow animate__animated animate__fadeInLeft"
                style="background: #ecf9fe"
              >
                <div class="bg-item" style="left: 5%">
                  <img src="~@/assets/img/introduction/item3.webp" />
                </div>
              </div>
              <img
                style="left: 5%"
                v-lazy="require('../../../../../assets/img/introduction/8.jpg')"
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  nextTick,
  getCurrentInstance
} from 'vue'
import useIntoView from '@/hooks/useIntoView'
import IntroductionItem from '../cpns/introduction-item.vue'
import xhTitle from '@/base-ui/xhTitle'
export default defineComponent({
  components: {
    xhTitle,
    IntroductionItem
  },
  setup() {
    const showIndex = ref(0)
    const introBoxRef = ref<HTMLElement>()
    window.addEventListener('scroll', () => {
      if (introBoxRef.value) {
        if (
          introBoxRef.value.getBoundingClientRect().top <
            document.documentElement.clientHeight -
              document.documentElement.clientHeight * 0.1 &&
          introBoxRef.value.getBoundingClientRect().top >
            -(
              document.documentElement.clientHeight -
              document.documentElement.clientHeight * 0.1
            )
        ) {
          showIndex.value = 0
        } else if (
          -(
            document.documentElement.clientHeight -
            document.documentElement.clientHeight * 0.1
          ) > introBoxRef.value.getBoundingClientRect().top &&
          introBoxRef.value.getBoundingClientRect().top >
            -(
              (document.documentElement.clientHeight -
                document.documentElement.clientHeight * 0.1) *
              2
            )
        ) {
          showIndex.value = 1
        } else if (
          -(
            (document.documentElement.clientHeight -
              document.documentElement.clientHeight * 0.1) *
            2
          ) > introBoxRef.value.getBoundingClientRect().top
        ) {
          showIndex.value = 2
        }
      }
    })
    const currentInstance = getCurrentInstance()
    onMounted(() => {
      nextTick(() => {
        if (currentInstance) {
          currentInstance.appContext.config.globalProperties.$wow.init()
        }
      })
    })
    const service = ref<HTMLElement>()
    const goView = () => {
      if (service.value) {
        useIntoView(service.value)
      }
    }
    return {
      service,
      goView,
      introBoxRef,
      showIndex
    }
  }
})
</script>

<style scoped lang="less">
.fx-introduction {
  width: 100%;
  .intro-box {
    display: flex;
    position: relative;
    width: calc(100vw - ((100vw - 1280px) / 2));
    height: 300vh;
    margin-left: calc((100vw - 1280px) / 2);
    .intro-left {
      position: sticky;
      z-index: 99;
      top: 0 !important;
      display: flex;
      width: 479px;
      height: 100vh;
      margin: 0px 86px 0px 56px;
      ul {
        margin: 0;
        padding: 0;
        .intro-content {
          position: absolute;
          top: 0px;
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          contain: initial;
        }
        .intro-title {
          line-height: 56px;
          letter-spacing: 0px;
          font-weight: 600;
          font-style: normal;
          font-size: 36px;
          color: #000;
        }
        .intro-text {
          color: rgb(131, 131, 140);
          margin-top: 24px;
          font-size: 18px;
          font-style: normal;
          line-height: 32px;
          font-weight: 400;
        }
      }
    }
    .intro-right {
      position: absolute;
      z-index: 1;
      top: 0;
      left: calc(621px);
      display: flex;
      overflow: hidden;
      width: calc((((100vw - 479px) - 56px) - 86px) - ((100vw - 1280px) / 2));
      height: 300vh;
      pointer-events: none;
      ul {
        margin: 0;
        padding: 0;
        .intro-img-box {
          display: flex;
          height: 100vh;
          .intro-img-inner-box {
            position: relative;
            width: calc(
              (((100vw - 479px) - 56px) - 86px) - ((100vw - 1280px) / 2)
            );
            height: 100%;
            align-items: center;
            -webkit-box-align: center;
            -webkit-box-pack: center;
            justify-content: center;
            img {
              position: absolute;
              height: 50%;
              width: auto;
              object-fit: contain;
              top: 50%;
              transform: translateY(-50%);
              border-radius: 24px;
            }
            .bg-box {
              width: 100%;
              height: 100%;
              background: #f0f4ff;
              position: relative;
              .bg-item {
                position: absolute;
                top: 104px;
                height: 225px;
                width: 225px;
                img {
                  height: 225px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 899px) {
    .intro-box {
      display: none;
    }
  }
}
.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(80px);
}
</style>
