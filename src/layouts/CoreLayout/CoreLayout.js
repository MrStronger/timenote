import React from 'react'
import Header from '../../components/Header'
import PropTypes from 'prop-types'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='textCenter'>
    <Header />
    <div className='corelayoutViewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
