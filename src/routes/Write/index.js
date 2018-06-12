import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/write',

  onEnter (nextState, replace) {
    if (!store.getState().auth.isAuth) {
      replace('/sign')
    }
  },

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const WriteContainer = require('./containers/WriteContainer').default
      const reducer = require('./modules/write').default
      injectReducer(store, { key: 'write', reducer })
      cb(null, WriteContainer)
    }, 'write')
  }
})
