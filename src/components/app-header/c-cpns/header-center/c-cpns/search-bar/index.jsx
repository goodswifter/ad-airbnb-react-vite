import { memo } from 'react'
import PropTypes from 'prop-types'

import IconSearchBar from '@/assets/svg/icon-search-bar'
import { BarWrapper } from './style'

const SearchBar = memo(props => {
  const { searchBarClick } = props

  function handleSearchBarClick() {
    searchBarClick && searchBarClick()
  }
  return (
    <BarWrapper onClick={handleSearchBarClick}>
      <div className="text">
        <span>搜索房源和体验</span>
      </div>
      <div className="icon">
        <IconSearchBar />
      </div>
    </BarWrapper>
  )
})

SearchBar.propTypes = {
  searchBarClick: PropTypes.func
}

export default SearchBar
