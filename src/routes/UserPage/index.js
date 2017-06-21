import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'u/:userId',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const UserPage = require('./containers/UserPageContainer').default
      const reducer = require('./modules/userPage').default
      injectReducer(store, { key: 'userPage', reducer })
      cb(null, UserPage)
    }, 'userPage')
  }
})
