import { connect } from 'react-redux'
import { fetchZen, clearZen } from './../modules/sign'

import Sign from '../components/Sign'

const mapDispatchtoProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchtoProps)(Sign)
