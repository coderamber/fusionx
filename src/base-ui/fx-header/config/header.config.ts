interface IMenus {
  name: string
  id: string
}

// 菜单配置
export const menus: IMenus[] = [
  { name: '首页', id: 'home' },
  { name: '新闻', id: 'news' },
  { name: '产品及服务', id: 'service' },
  { name: '关于我们', id: 'workSpace' },
  { name: '合作伙伴', id: 'cooperate' },
  { name: '演示Demo', id: 'demo' }
]
