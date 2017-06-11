import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { signOut } from '../store/auth'
import { changeToRegister, changeToLogin } from '../routes/Sign/modules/sign'
import Header from '../components/Header/Header'

const mapDispatchToProps = {
  onSignOut: signOut,
  changeToRegister: changeToRegister,
  changeToLogin: changeToLogin
}
const auth = (state) => state.auth.isAuth
const profileData = (state) => state.auth.profile
const getUserProfile = createSelector(
    [ auth, profileData ],
    (auth, profile) => {
      if (auth) {
        return profile
      } else {
        return {

        }
      }
    }
)
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  profile: getUserProfile(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
