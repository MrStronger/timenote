import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Header from '../components/Header'

const mapDispatchToProps = {
 
}
const auth = (state) => state.isAuth
const profileData = (state) => state.profile
const getUserProfile = createSelector(
    [ auth, profileData ],
    (auth, profile) => {
        if(auth) {
            return profile
        }else{
            return 
        }
    }
)
const mapStateToProps = (state) => ({
    isAuth: state.auth,
    profile: getUserProfile(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
