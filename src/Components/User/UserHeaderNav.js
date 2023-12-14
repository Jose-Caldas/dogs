import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../redux/reducer/user'

const UserHeaderNav = () => {
  const dispatch = useDispatch()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos title="Minhas Fotos" />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Estatisticas title="Estatísticas" />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto title="Adicionar Foto" />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={() => dispatch(userLogout())}>
          <Sair title="Sair" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
