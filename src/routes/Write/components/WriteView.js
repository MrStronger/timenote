import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Utils from '../../../tools/closure'
import { browserHistory } from 'react-router'

import '../styles.scss'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

import message from 'antd/lib/message'
import 'antd/lib/message/style/index.css'

import LabelSelect from './LabelSelect'

export default class WriteView extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    currentState: PropTypes.string.isRequired,
    currentPostID: PropTypes.string.isRequired,
    saved: PropTypes.func.isRequired,
    saving: PropTypes.func.isRequired,
    saveFailed: PropTypes.func.isRequired,
  }

  lables = []
  lastTime = 0
  getLabels = (labels) => {
    this.labels = labels
  }

  publish = () => {
    const { saved, saving, saveFailed, currentPostID } = this.props
    debugger
    saving()
    fetch('/back/index.php?s=/index/note/publish', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nid: currentPostID })
    }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }
    }).then((data) => {
      debugger
      if (data.code === -1) {
        message.error(`发布失败, ${data.msg}`)
        saveFailed(data.msg)
      } else if (data.code === 0) {
        saved(currentPostID)
        message.success('发表成功!')
      }
    }).catch(error => {
      console.log(error)
      saveFailed(error)
      message.error('一定是代码出错了!')
    })
  }
  save = (content) => {
    const { saved, saving, saveFailed, currentPostID } = this.props
    debugger
    saving()
    message.info('保存中..')
    fetch('/back/index.php?s=/index/note/refresh', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nid: currentPostID,
        title: this.postTitle.value,
        content,
        labels: JSON.stringify(this.labels || [])
      })
    }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }
    }).then((data) => {
      debugger
      if (data.code === -1) {
        message.error(`保存失败, ${data.msg}`)
        saveFailed(data.msg)
      } else if (data.code === 0) {
        saved(currentPostID)
        message.success('已保存')
      }
    }).catch(error => {
      console.log(error)
      saveFailed(error)
      message.error('代码错误导致保存失败!')
    })
  }

  handleHTMLChange = (htmlContent) => {
    debugger
    
    if (htmlContent !== '<p></p>') {
      if (!this.lastTime) {
        this.lastTime = Date.now()
      } else {
        if (Date.now() - this.lastTime > 5000) {
          this.save(htmlContent)
          this.lastTime = Date.now()
        }
      }
    }
  }

  componentDidMount () {
    const { saved, saveFailed } = this.props
    fetch('/back/index.php?s=/index/note/add', {
      credentials: 'include',
      headers: {
        withCredentials: true
      }
    })
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }
    }).then((data) => {
      debugger
      if (data.code === -1) {
        message.error(`保存失败, ${data.msg}`)
        saveFailed(data.msg)
        browserHistory.goBack()
      } else if (data.code === 0) {
        saved(data.msg.nid)
      }
    }).catch(error => {
      console.log(error)
      saveFailed(error)
      message.error('创建文章失败!')
      browserHistory.goBack()
    })
  }

  render () {
    const { uid } = this.props

    const editorProps = {
      className: 'editor',
      ref: instance => { this.editorInstance = instance },
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
                <textarea className='title'
                  id='richtext-title'
                  name='title'
                  placeholder='请输入标题'
                  ref={instance => { this.postTitle = instance }}
                  />
              </div>
              <BraftEditor {...editorProps} />
            </div>
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
