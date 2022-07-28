import { ref } from 'vue'
const fxHeader = ref<HTMLHeadElement>()
function useScroll(): void {
  // 获取页面初始化滚动条位置
  const scrollBarPosition = ref(
    window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  )
  window.addEventListener('scroll', () => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    fxHeader.value?.classList.toggle('top', scrollY <= 100)
    if (scrollY > scrollBarPosition.value && scrollY > 0) {
      fxHeader.value?.classList.remove('visible')
      fxHeader.value?.classList.add('sticky')
      scrollBarPosition.value = scrollY
    } else {
      fxHeader.value?.classList.remove('sticky')
      fxHeader.value?.classList.add('visible')
      scrollBarPosition.value = scrollY
    }
  })
}

export { fxHeader, useScroll }
