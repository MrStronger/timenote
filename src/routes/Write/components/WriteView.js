import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles.scss'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class UserPage extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired

  }

  handleChange = (content) => {
    debugger
    console.log(content)
  }

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }

  handleHTMLChange = (htmlContent) => {
    console.log(htmlContent)
  }

  render () {
    const { uid } = this.props

    const editorProps = {
      height: 500,
      className: 'editor',
      placeholder: '请输入正文',
      contentFormat: 'html',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
      onHTMLChange: this.handleHTMLChange
    }

    return (
      <div className='write'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-9 col-md-offset-2'>
              <div className='title-input-container'>
                <textarea className='title' id='richtext-title' name='title' placeholder='请输入标题' />
              </div>
              <BraftEditor {...editorProps} />
            </div>
          </div>

        </div>

      </div>
    )
  }
}
