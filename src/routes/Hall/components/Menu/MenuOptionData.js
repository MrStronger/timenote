export const MenuData = [
  {
    title: '全部',
    filter: 'SHOW_ALL',
    search: 'all',
  },
  {
    title: '关注最多',
    filter: 'SHOW_MOST_STAR',
    search: 'star',
    number: 'star_number'
  },
  {
    title: '点赞最多',
    filter: 'SHOW_MOST_PRAISE',
    search: 'praise',
    number: 'praise_number'
  },
  {
    title: '技术大牛',
    filter: 'SHOW_MOST_LIKE',
    search: 'like',
    number: 'like_number'
  },
  {
    title: '文章写手',
    filter: 'SHOW_MOST_EDITOR',
    search: 'edit',
    number: 'edit_number'
  },
  {
    title: '经济与管理学院',
    filter: 'SHOW_JINGJI',
    search: 'jinguan'
  }
]

export const formData = (data, search) => {
  let filter = data.filter(item => {
    return search === item.search
  })
  return filter[0]
}
