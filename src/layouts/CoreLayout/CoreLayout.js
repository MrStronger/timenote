import React from 'react'
import Header from '../../components/Header'
import PropTypes from 'prop-types'
import style from './CoreLayout.scss'
import core from '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className={core.textCenter}>
    <Header />
    <div className={style.corelayoutViewport}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
