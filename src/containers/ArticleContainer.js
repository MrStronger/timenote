import React, { Component } from 'react'
import ArticleItem from '../components/ArticleItem/ArticleItem'

export default class ArticleContainer extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    fetch('/r.json').then(res => {
      const data = res.json()
      this.setState({ data: data })
    }).catch(err => console.log("Get articles faild! Check code at src/containers/ArticleContainer line12", err))
  }
  render () {
    let articleItems = []
    this.data.forEach((item, index) => {
      articleItems.push(<ArticleItem key={item.id} data={item} />)
    })
    return (
      <div>
        {articleItems}
      </div>
    )
  }
}
