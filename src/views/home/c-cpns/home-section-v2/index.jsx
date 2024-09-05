import PropTypes from 'prop-types'
import { memo, useCallback, useState } from 'react'

import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo(props => {
  /** 从props获取数据 */
  const { infoData } = props

  /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0]
  // useState 只有在第一次渲染的时候, 初始化的值才会被渲染
  // 方式一: 设置的时候, 就让infoData有值
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 方式二: 传过来没有 infoData 没有值, 使用setName设置
  // 这种方式会让这个HomeSectionV2渲染三次
  // 第一次: 正常渲染, 第二次, infoData请求到数据, 第三次是setName
  // useEffect(() => {
  //   setName("xxxxx")
  // }, [infoData])

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
