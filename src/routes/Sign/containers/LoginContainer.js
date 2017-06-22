import { connect } from 'react-redux'

import { fetchLogin } from '../../../store/auth'
import LoginForm from '../components/Login/LoginForm'

const mapDispatchtoProps = {
  fetchLogin
}
console.log(mapDispatchtoProps)
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm)
