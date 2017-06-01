import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'hall',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Hall = require('./containers/HallContainer').default
      const reducer = require('./modules/hall').default
      injectReducer(store, { key: 'hall', reducer })
      cb(null, Hall)
    })
  }
})
