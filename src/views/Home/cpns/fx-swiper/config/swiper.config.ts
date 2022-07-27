export interface IItemsConfig {
  url: string
  title?: string
  content?: string
  top?: number
  right?: number
  left?: number
  bottom?: number
  video?: boolean
  showText?: boolean
}

export const itemsConfig: IItemsConfig[] = [
  {
    url: require('../../../../../assets/img/index.mp4'),
    showText: false,
    video: true
  },
  {
    url: require('../../../../../assets/img/swiper-bg1.jpg'),
    title: '',
    content: ``,
    top: 250,
    right: 50
  },
  {
    url: require('../../../../../assets/img/swiper-bg2.jpg'),
    title: '',
    content: ``,
    top: 200,
    left: 100
  },
  {
    url: require('../../../../../assets/img/15.jpg'),
    title: '',
    content: ``,
    right: 50,
    top: 100
  }
]
