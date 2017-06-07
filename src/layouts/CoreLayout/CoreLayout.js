import React from 'react'
import Header from '../../containers/HeaderContainer'
import PropTypes from 'prop-types'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    {children}    
    
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
