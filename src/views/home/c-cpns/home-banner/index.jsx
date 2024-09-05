import { memo } from 'react'
import { BannerWrapper } from './style'
// import coverImg from '@/assets/img/cover_01.jpeg'

const HomeBanner = memo(() => {
  // 方式一
  // return <BannerWrapper>{<img src={coverImg} alt="" />}</BannerWrapper>

  // 方式二
  return <BannerWrapper />
})

export default HomeBanner
