import { connect } from 'react-redux'

import Hall from './../components/Hall'

import { fetchInItData } from '../modules/cardCase'

const mapDispatchtoProps = {
  fetchInItData
}

const mapStateToProps = (state) => ({
  MenuOption: state.hall.CardData.MenuOption,
})

export default connect(mapStateToProps, mapDispatchtoProps)(Hall)
