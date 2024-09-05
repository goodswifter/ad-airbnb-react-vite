import { memo } from 'react'
import PropTypes from 'prop-types'

import { SectionsWrapper } from './style'

const SearchSections = memo(props => {
  const { infos } = props
  return (
    <SectionsWrapper>
      {infos.map((info, idx) => (
        <div key={info.title} className="info-wrapper">
          <div className="info">
            <div className="title">{info.title}</div>
            <div className="desc">{info.desc}</div>
          </div>
          {idx < infos.length - 1 && <div className="divider" />}
        </div>
      ))}
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  infos: PropTypes.object
}

export default SearchSections
