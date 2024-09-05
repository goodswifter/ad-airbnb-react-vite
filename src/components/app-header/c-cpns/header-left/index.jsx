import IconLogo from '@/assets/svg/icon_logo'
import { memo } from 'react'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  // useNavigate 用于在函数式组件中获取用于导航的函数。
  const navigate = useNavigate()
  // 跳转
  function logoClickHandle() {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
