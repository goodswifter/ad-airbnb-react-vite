import PropTypes from 'prop-types'
import { memo, useState, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'

import searchTitleData from 'assets/data/search_titles.json'
import SearchBar from './c-cpns/search-bar'
import SearchSections from './c-cpns/search-sections'
import SearchTabs from './c-cpns/search-tabs'
import { CenterWrapper } from './style'

const HeaderCenter = memo(props => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)

  const tabs = searchTitleData.map(item => item.title)
  const handleTabClick = useCallback(index => setTabIndex(index), [])

  return (
    <CenterWrapper>
      {/* <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div> */}
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
        <SearchBar searchBarClick={searchBarClick} />
      </CSSTransition>

      <CSSTransition in={isSearch} classNames="detail" timeout={250} unmountOnExit={true}>
        <div className="search-detail">
          <SearchTabs tabs={tabs} tabClick={handleTabClick} />
          <SearchSections infos={searchTitleData[tabIndex].searchInfos} />
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func
}

export default HeaderCenter
