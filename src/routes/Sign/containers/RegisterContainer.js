import { connect } from 'react-redux'

import { optionToRegister } from '../modules/register'
import RegisterForm from '../components/Register/Index'

const mapDispatchToProps = {
  optionToRegister
}

const mapStateToProps = (state) => ({
  option: state.sign.registerOption.option,
  asyncPhoneForm: state.form.asyncPhoneForm
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
