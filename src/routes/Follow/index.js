import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'follow',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Follow = require('./containers/FollowContainer').default
      const reducer = require('./modules/follow').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'follow', reducer })

      /*  Return getComponent   */
      cb(null, Follow)

    /* Webpack named bundle   */
    }, 'follow')
  }
})
