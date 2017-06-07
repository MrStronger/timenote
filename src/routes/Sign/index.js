import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'sign',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Sign = require('./containers/SignContainer').default
      const reducer = require('./modules/index').default
      injectReducer(store, { key: 'sign', reducer })
      cb(null, Sign)
    })
  }
})
