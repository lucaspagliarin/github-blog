import { HeaderContainer } from './styles'
import logoImage from '../../assets/logo.svg'
import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect1} alt="" />
      <img src={logoImage} alt="" />
      <img src={effect2} alt="" />
    </HeaderContainer>
  )
}
