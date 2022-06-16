import React, { useState } from 'react'
import { HiPlusSm } from 'react-icons/hi'
import styles from '../styles/InfoBar.module.scss'
import useWindowSize from '../utils/useWindowSize'

function Info() {
  const { width } = useWindowSize()

  return (
    <>
      <div className={styles.info_container}>
        <div className={styles.info}>
          <p>
            {width < 1025
              ? 'Express delivery now available'
              : ' Enjoy complimentary carbon neutral shipping on all orders. Express delivery now available'}
            .
          </p>
          <span>
            <HiPlusSm size={20} className={styles.icon} />
          </span>
        </div>
      </div>
    </>
  )
}

export default Info
