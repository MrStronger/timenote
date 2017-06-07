import React, { Component } from 'react'
import ArticleItem from '../components/ArticleItem/ArticleItem'

export default class ArticleContainer extends Component {
    componentDidMount() {
       // data = fetch().then()
    }
    render() {
        let articleItems = []
       /* data.forEach((item, index) => {
            articleItems.push(<ArticleItem key={item.id} data={item} />)
        })*/
        return (
            <div>
                {articleItems}
            </div>
        )
    }
}