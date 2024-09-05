import PropTypes from 'prop-types'
import { memo, useState } from 'react'

import classNames from 'classnames'
import { TabsWrapper } from './style'

const SearchTabs = memo(props => {
  const { tabs, tabClick } = props

  const [activeIndex, setActiveIndex] = useState(0)

  function handleTabClick(index) {
    setActiveIndex(index)
    tabClick && tabClick(index)
  }

  return (
    <TabsWrapper>
      {tabs.map((tab, index) => (
        <div
          key={tab}
          className={classNames('tab', { active: activeIndex === index })}
          onClick={() => handleTabClick(index)}>
          <span className="text">{tab}</span>
          <span className="bottom"></span>
        </div>
      ))}
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  tabs: PropTypes.array,
  tabClick: PropTypes.func
}

export default SearchTabs
