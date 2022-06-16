import React from 'react'
import styles from '../styles/Cart.module.scss'

const CartTest = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart_inner}>
        <div className={styles.cart_products}>
          <div className={styles.cart_products_header}>
            <div className={styles.cart_products_title}>Cart</div>
            <div className={styles.cart_products_size}>Size</div>
            <div className={styles.cart_products_quantity}>Quantity</div>
            <button className={styles.cart_products_btn}>
              <svg className='Icon' role='img' viewBox='0 0 50 50'>
                <g>
                  <polygon points='50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25'></polygon>
                </g>
              </svg>
            </button>
          </div>
          <ul className={styles.cart_products_list}>
            <li className={styles.cart_products_list_item}>
              {/* CART PRODUCTS */}
            </li>
          </ul>
        </div>
        <div className={styles.cart_summary}>
          <div className={styles.cart_summary_wrapper}>
            <div className={styles.cart_summary_promo}>
              <button className={styles.cart_summary_promo_btn}>
                <div className={styles.cart_summary_promo_btn_wrapper}>
                  <h5 className={styles.cart_summary_promo_label}>
                    Apply a promotional code.
                  </h5>
                  <div className={styles.cart_summary_promo_btn_icon_wrapper}>
                    <svg
                      className={styles.cart_summary_promo_btn_icon}
                      data-ref='promoCodeModal-icon'
                      role='img'
                      viewBox='0 0 50 50'
                    >
                      <g>
                        <circle
                          className={styles.cart_summary_promo_btn_icon_circle}
                          cx='25'
                          cy='25'
                          r='22'
                          fill='none'
                        ></circle>
                        <polygon
                          className={styles.cart_summary_promo_btn_icon_poly}
                          points='26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 '
                        ></polygon>
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTest
