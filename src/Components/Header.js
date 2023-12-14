import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../Assets/dogs.svg'
import { useSelector } from 'react-redux'

const Header = () => {
  const { data } = useSelector((state) => state.user)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs title="Home" />
        </Link>
        {data ? (
          <Link title="Minha Conta" className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link
            title="Login / Criar Conta"
            className={styles.login}
            to="/login"
          >
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
