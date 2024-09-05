import classNames from 'classnames'
import { memo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { useScrollPosition } from '@/hooks'
import { shallowEqual } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    state => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )
  const { isFixed, topAlpha } = headerConfig

  const [isSearch, setIsSearch] = useState(false)
  function handleSearchBarClick() {
    setIsSearch(true)
  }
  function handleCoverClick() {
    setIsSearch(false)
  }

  const prevY = useRef(0)
  const { scrollY } = useScrollPosition()
  if (!isSearch) prevY.current = scrollY
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  const isAlpha = topAlpha && scrollY === 0
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isSearch || isAlpha} searchBarClick={handleSearchBarClick} />
            <HeaderRight />
          </div>
          {/* <SearchDetailBgWrapper isSearch={isSearch} /> */}
        </div>
        {isSearch && <div className="cover" onClick={handleCoverClick} />}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
