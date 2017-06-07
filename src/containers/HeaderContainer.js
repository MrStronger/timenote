import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { sign_out } from '../store/auth'
import Header from '../components/Header/Header'

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => {
      dispatch(sign_out())
    }
  }
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
