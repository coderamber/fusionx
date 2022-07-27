interface IMenus {
  name: string
  id: string
}

// 菜单配置
export const menus: IMenus[] = [
  { name: '新闻', id: 'news' },
  { name: '产品及服务', id: 'service' },
  { name: '公司简介', id: 'workSpace' },
  { name: '合作伙伴', id: 'cooperate' },
  { name: '联系方式', id: 'contact' },
  { name: '演示Demo', id: 'demo' }
]
