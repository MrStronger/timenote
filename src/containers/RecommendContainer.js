import React, { Component } from 'react'
import Recommend from '../components/Recommend/Recommend'

export default class RecommendContainer extends Component {
  state = {
    data: []
  }
  getAnother () {
    fetch('/getAnther.json').then(res => {
      if (res.ok) {
        const data = JSON.parse(res.json())
        this.setState({ data: data })
      } else {
        console.log('request failed', res.statusText)
      }
    }).catch(err => console.log('Get articles faild! Check code at src/containers/RecommendContainer line16', err))
  }
  componentDidMount () {
    this.getAnother()
  }
  render () {
    let recommends = []
    this.state.data.forEach((item, index) => {
      recommends.push(<Recommend key={item.id} data={item} getAnother={this.getAnother} />)
    })
    return (
      <div>
        {recommends}
      </div>
    )
  }
}
