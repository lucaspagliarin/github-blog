import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { GlobalStyle } from '../../styles/global'

export function DefaultLayout() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
