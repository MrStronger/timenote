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
    title: '通院',
    filter: 'SHOW_TONGYUAN',
    search: 'tongyuan'
  },
  {
    title: '电院',
    filter: 'SHOW_DIANYUAN',
    search: 'dianyuan'
  },
  {
    title: '计院',
    filter: 'SHOW_JIYUAN',
    search: 'jiyuan'
  },
  {
    title: '机电院',
    filter: 'SHOW_JIDIANYUAN',
    search: 'jidianyuan'
  },
  {
    title: '微电院',
    filter: 'SHOW_WEIDIANYUAN',
    search: 'weidianyuan'
  },
  {
    title: '经管',
    filter: 'SHOW_JINGGUAN',
    search: 'jingguanyuan'
  },
  {
    title: '人文',
    filter: 'SHOW_RENWEN',
    search: 'renwen'
  },
  {
    title: '外国语',
    filter: 'SHOW_WAIGUOYU',
    search: 'waiguoyu'
  },
  {
    title: '软院',
    filter: 'SHOW_RUANYUAN',
    search: 'ruanyuan'
  },
  {
    title: '网信',
    filter: 'SHOW_WANGXIN',
    search: 'wangxin'
  },
  {
    title: '材料',
    filter: 'SHOW_CAILIAO',
    search: 'cailiao'
  },
  {
    title: '马克思主义学院',
    filter: 'SHOW_MKS',
    search: 'makesi'
  },
  {
    title: '生科院',
    filter: 'SHOW_SHENGKEYUAN',
    search: 'shengke'
  }
]

export const formData = (data, search) => {
  let filter = data.filter(item => {
    return search === item.search
  })
  return filter[0]
}
