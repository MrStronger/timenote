import { connect } from 'react-redux'

import FollowToggle from '../../../components/FollowToggle2/FollowToggle'

import { fetchAddAttention, fetchCancelAttention } from '../modules/cardCase'

const mapDispatchToProps = {
  fetchAddAttention,
  fetchCancelAttention
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FollowToggle)
