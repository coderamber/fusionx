import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueLazyload from 'vue-lazyload'

import '@/assets/css/index.less'
import 'normalize.css'
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { WOW } from 'wowjs'

import * as ECharts from 'echarts'

const app = createApp(App)
app.config.globalProperties.$wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: false
})
app.config.globalProperties.$echarts = ECharts
app.use(router)
app.use(VueLazyload, {
  preLoad: 1.5,
  attempt: 1
})
app.mount('#app')
