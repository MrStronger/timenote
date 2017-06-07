import { connect } from 'react-redux'

import { fetchLogin } from '../../../store/auth'
import LoginForm from '../components/Login/LoginForm'

const mapDispatchtoProps = {
  fetchLogin
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm)
