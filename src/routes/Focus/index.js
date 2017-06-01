import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'focus',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Focus = require('./containers/FocusContainer').default
      const reducer = require('./modules/focus').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'focus', reducer })

      /*  Return getComponent   */
      cb(null, Focus)

    /* Webpack named bundle   */
    }, 'focus')
  }
})
