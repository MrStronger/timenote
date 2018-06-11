import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'follow',
  onEnter (nextState, replace) {
    if (!store.getState().auth.isAuth) {
      replace('/sign')
    }
  },
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Follow = require('./containers/FollowContainer').default
      const reducer = require('./modules/follow').default
      injectReducer(store, { key: 'follow', reducer })
      cb(null, Follow)
    }, 'follow')
  }
})
