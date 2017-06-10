import React, { Component } from 'react'
import ArticleItem from '../components/ArticleItem/ArticleItem'

export default class ArticleContainer extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    fetch('/r.json').then(res => {
<<<<<<< HEAD
      if (res.ok) {
        const data = JSON.parse(res.json())
        this.setState({ data: data })
      } else {
        console.log('request failed', res.statusText)
      }
=======
      const data = res.json()
      this.setState({ data: data })
>>>>>>> 6f74f2c9a56e86a9ecc5fbeb8af9778c3b6af9fd
    }).catch(err => console.log('Get articles faild! Check code at src/containers/ArticleContainer line12', err))
  }
  render () {
    let articleItems = []
    this.state.data.forEach((item, index) => {
      articleItems.push(<ArticleItem key={item.id} data={item} />)
    })
    return (
      <div>
        {articleItems}
      </div>
    )
  }
}
