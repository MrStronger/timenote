import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ArticleView extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    
  }
  componentDidMount() {
    
  }
  render () {
    const { uid, title, content, labels } = this.props
    return (
      <div className='write'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-9 col-md-offset-2'>
              <h1>{}</h1>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-9 col-md-offset-2'>
              <LabelSelect letFatherKnowLabels={this.getLabels} />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-3 col-md-offset-8'>
              <div className='publish' onClick={this.publish}>发表文章</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
