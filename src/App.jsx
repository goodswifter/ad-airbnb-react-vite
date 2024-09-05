import { memo, Suspense } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useScrollTop } from './hooks'

const App = memo(() => {
  useScrollTop()
  return (
    <div className="app">
      <AppHeader />

      {/* Suspense只包裹异步组件的部分, 防止其他部分渲染两次的问题 */}
      <Suspense fallback="loading">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
