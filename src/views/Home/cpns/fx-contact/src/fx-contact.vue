<template>
  <footer class="fx-contact" ref="contact">
    <div class="contact-us row">
      <div class="logo col-md-4">
        <img src="../../../../../assets/img/contact/logo.png" alt="" />
      </div>
      <div class="main-content col-md-4 col-12">
        <div>联系我们</div>
        <div>赋兴（浙江）数字科技有限公司</div>
        <div>咨询热线: 0573-82066982</div>
        <div>地址: 浙江省嘉兴市清华柔性电子研究院16号楼5层</div>
      </div>
      <div class="qr col-md-4 col-12">
        <div class="qr-box">
          <div>关注我们</div>
          <div class="qr-img">
            <img
              v-lazy="require('../../../../../assets/img/contact/gzwm.jpg')"
            />
          </div>
        </div>
        <div class="qr-box">
          <div>加入我们</div>
          <div class="qr-img">
            <img
              v-lazy="require('../../../../../assets/img/contact/jrwm.jpg')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright row">
      <div>浙ICP备2022021648号-1</div>
      <div>Copyright © 2022 Fusionx Ltd.</div>
      <!-- <div class="gongan"> -->
      <!-- <img src="~@/assets/img/contact/gongan.png" alt="" /> -->
      <!-- <span>公网备案: xxxxxxxxxxxxxx</span> -->
      <!-- </div> -->
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useIntoView from '@/hooks/useIntoView'

export default defineComponent({
  setup() {
    const contact = ref<HTMLElement>()
    const goView = () => {
      if (contact.value) {
        useIntoView(contact.value)
      }
    }
    return {
      contact,
      goView
    }
  }
})
</script>

<style scoped lang="less">
@contactBgColor: #272727;
@fontColor: #fff;
.fx-contact {
  background: @contactBgColor;
  color: @fontColor;
  padding: 40px 20px 10px 20px;
  .contact-us {
    margin-bottom: 20px;
    .main-content {
      white-space: nowrap;
      overflow: scroll;
      margin: 20px 0;
      div {
        margin: 10px 0;
        &:nth-child(1) {
          font-size: 20px;
        }
      }
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100px;
      }
    }
    .qr {
      display: flex;
      justify-content: center;
      .qr-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          margin: 20px;
          height: 100px;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    .gongan {
      display: flex;
      align-items: center;
      img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }
}
</style>
