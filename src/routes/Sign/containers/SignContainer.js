import { connect } from 'react-redux'
import { changeToRegister, changeToLogin } from '../modules/sign'

import Sign from '../components/Sign.js'

const mapDispatchtoProps = {
  changeToRegister,
  changeToLogin
}

const mapStateToProps = (state) => ({
  option: state.sign.signOption.option
})

export default connect(mapStateToProps, mapDispatchtoProps)(Sign)
