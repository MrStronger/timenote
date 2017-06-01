import { connect } from 'react-redux'
import { plus } from './../modules/hall'

import Hall from './../components/Hall'

const mapDispatchtoProps = {
  plus
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchtoProps)(Hall)
