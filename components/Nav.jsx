import React from 'react'
import styles from '../styles/Nav.module.scss'
import useWindowSize from '../utils/useWindowSize'

const Nav = () => {
  const { width } = useWindowSize()

  return (
    <div className={styles.nav}>
      <nav className={styles.nav_left}>
        {width > 1025 ? (
          <ul>
            <li>
              <a href='/'>Skin Care</a>
            </li>
            <li>
              <a href='/'>Body & Hand</a>
            </li>
            <li>
              <a href='/'>Hair</a>
            </li>
            <li>
              <a href='/'>Fragrance</a>
            </li>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Kits & Travel</a>
            </li>
            <li>
              <a href='/'>Gifts</a>
            </li>
            <li>
              <a href='/'>Read</a>
            </li>
            <li>
              <a href='/'>Stores</a>
            </li>
            <li>
              <a href='/'>
                <svg
                  aria-labelledby='search-167'
                  data-testid='data-testid-Icon'
                  focusable='false'
                  height='18'
                  width='18'
                  role='img'
                  viewBox='0 0 16 16'
                  color='#333'
                >
                  <title id='search-167'>search</title>
                  <g>
                    <path
                      fill='#666666'
                      d='M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z'
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href='/'>Shop</a>
            </li>
            <li>
              <a href='/'>Read</a>
            </li>
            <li>
              <a href='/'>Stores</a>
            </li>
            <li>
              <a href='/'>
                <svg
                  aria-labelledby='search-167'
                  data-testid='data-testid-Icon'
                  focusable='false'
                  height='18'
                  width='18'
                  role='img'
                  viewBox='0 0 16 16'
                  color='#333'
                >
                  <title id='search-167'>search</title>
                  <g>
                    <path
                      fill='#666666'
                      d='M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z'
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        )}
      </nav>

      <nav className={styles.nav_right}>
        <ul>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Cart</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
