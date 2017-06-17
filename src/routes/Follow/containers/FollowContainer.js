import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { changeFollow, changeToggle } from '../modules/follow'
import Follow from '../components/Follow'


const mapDispatchToProps = {
  changeFollow,
  changeToggle
}

const getCurrentFollow = (state) => state.follow.currentFollow
const getCurrentToggle = (state) => state.follow.currentToggle
const changeFollowListener = createSelector(
    [ getCurrentFollow ],
    (followId) => {
      return followId
    }
)
const changeToggleListener = createSelector(
  [ getCurrentToggle ],
  (toggleState) => {
    return toggleState
  }
)
const mapStateToProps = (state) => ({
  user_id: state.auth.profile.user_id,
  currentFollow: changeFollowListener(state),
  currentToggle: changeToggleListener(state)
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Follow)
