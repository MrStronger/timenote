import { connect } from 'react-redux'
import { change_to_register, change_to_login } from './../modules/sign'

import Header from '../components/Sign.js'

const mapDispatchtoProps = {
  change_to_register,
  change_to_login
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  option: state.sign.option
})

export default connect(mapStateToProps, mapDispatchtoProps)(Header)
