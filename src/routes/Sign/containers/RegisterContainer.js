import { connect } from 'react-redux'

import { option_to_register } from '../modules/register'
import { fetchRegister } from '../'
import RegisterForm from '../components/Register/Index'

const mapDispatchtoProps = {
  option_to_register,

}

const mapStateToProps = (state) => ({
  option: state.sign.registerOption.option
})

export default connect(mapStateToProps, mapDispatchtoProps)(RegisterForm)
