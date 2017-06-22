import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ItemPage.scss'

import CardCase from '../components/CardCases/CardCase'

import { sortBy } from '../../../tools/array'
import { formData } from '../components/Menu/MenuOptionData'

class ItemPage extends Component {
  static propTypes = {
    fetching: PropTypes.bool,
    fetchInItData: PropTypes.func,
    fetchUpdate: PropTypes.func,
    MenuOption: PropTypes.string,
    data: PropTypes.array
  }
  componentDidMount () {
    let { search } = this.props.params
    let filter = formData(require('../components/Menu/MenuOptionData').MenuData, search)
    this.props.fetchInItData(filter)
  }
  render () {
    let { fetchInItData, MenuOption, data, fetchUpdate, fetching } = this.props
    let cardCase = []
    if (MenuOption === 'SHOW_ALL') {
      if (data.length !== 0) {
        let newData = data.map((item, index) => {
          item.index = index
          return item
        })
        let filters = ['star', 'praise', 'like', 'edit']
        let allFilterData = require('../components/Menu/MenuOptionData').MenuData
        let filterCase = filters.map((item, inedx) => {
          return (
            formData(allFilterData, item)
          )
        })
        cardCase = filterCase.map((item, index) => {
          return (
            <CardCase
              key={item.search}
              fetching={fetching}
              items={sortBy(newData, item.number).slice(0, 4)}
              isForAll={MenuOption === 'SHOW_ALL'}
              title={item.title}
              field={{ search: item.search, filter: item.filter }}
              fetchInItData={fetchInItData}
            />
          )
        })
      }
    } else {
      if (data.length !== 0) {
        let newData = data.map((item, index) => {
          item.index = index
          return item
        })
        let search = this.props.params.search
        cardCase = (
          <CardCase
            items={newData}
            fetching={fetching}
            fetchUpdate={fetchUpdate}
            search={search}
          />
        )
      }
    }
    return (
      <div>
        {cardCase}
      </div>
    )
  }
}

export default ItemPage
