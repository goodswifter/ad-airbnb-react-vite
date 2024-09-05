import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import mainReducer from './modules/main'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    main: mainReducer,
    detail: detailReducer
  }
})

export default store
export * from './modules'
