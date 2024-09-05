import styled from 'styled-components'
import coverImg from '@/assets/img/cover_01.jpeg'

export const BannerWrapper = styled.div`
  height: 529px;

  background: url(${coverImg}) center/cover;
`

// 方式二:
// img {
//   width: 100%;
//   height: 100%;
//   /* 图片被缩放，以填满整个容器 */
//   object-fit: cover;
// }

/* background: url(${coverImg}) center/cover; */
