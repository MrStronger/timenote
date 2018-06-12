import React, { Component } from 'react'

import Tag from 'antd/lib/tag'
import 'antd/lib/tag/style/index.css'
const CheckableTag = Tag.CheckableTag

const categoryFromLocal = ['学习', '技术', '生活', '感想', '交友']
const tagsFromServer = [
    ['高数', '大学物理', '线代', '模电'],
    ['前端', '后端', '安卓', 'iOS', '机器学习', '大数据'],
    ['新综老综', '哪好玩儿', '哪好吃', '活动'],
    ['人生', '大学生活', '成长历程', '恋爱', '友情'],
    ['找队友', '兴趣交友', '找对象'],
]

export default class HotTags extends Component {
  state = {
    selectedTags: [],
  };

  handleChange (tag, checked) {
    const { selectedTags } = this.state
    const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag)
    this.setState({ selectedTags: nextSelectedTags })
    this.props.letFatherKnowLabels(nextSelectedTags)
  }

  render () {
    const { selectedTags } = this.state
    return (
      <div className='label-select'>
        {
            categoryFromLocal.map((label, index) => {
              return (
                <div key={label + index}>
                  <h6 style={{ marginRight: 8, display: 'inline' }}>{label + ':'}</h6>
                  {tagsFromServer[index].map((tag, i) => (
                    <CheckableTag
                      key={label + tag + i + index}
                      checked={selectedTags.indexOf(tag) > -1}
                      onChange={checked => this.handleChange(tag, checked)}
                          >
                      {tag}
                    </CheckableTag>
                      ))}
                </div>
              )
            })
        }

      </div>
    )
  }
}
