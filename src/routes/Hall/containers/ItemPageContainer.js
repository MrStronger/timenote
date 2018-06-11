import { connect } from 'react-redux'

import ItemPage from '../routes/ItemPage'

import { fetchInItData, fetchUpdate } from '../modules/cardCase'

const mapDispatchtoProps = {
  fetchInItData,
  fetchUpdate
}

const mapStateToProps = (state) => ({
  fetching: state.hall.CardData.fetching,
  MenuOption: state.hall.CardData.MenuOption,
  data: state.hall.CardData.data
})

export default connect(mapStateToProps, mapDispatchtoProps)(ItemPage)
