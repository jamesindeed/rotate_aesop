import React, { useState } from 'react'
import styles from '../styles/CartProduct.module.scss'
import useWindowSize from '../utils/useWindowSize'
import { useStateContext } from '../context/context'

const CartProduct = ({ item }) => {
  const { width } = useWindowSize()
  const [open, setOpen] = useState(false)
  const { onRemove } = useStateContext()

  const handleAmountChange = (e) => {
    // toggleCartItemQuantity(item._id, e.target.value)
    setOpen(false)
  }

  return (
    <li className={styles.cart_product_item}>
      <div className={styles.cart_product}>
        {width >= 640 ? (
          <>
            <div className={styles.cart_product_name_wrapper}>
              <a className={styles.cart_product_name} href='/'>
                {item.title}
              </a>
              <div className={styles.cart_product_size}>
                <span>100 mL</span>
              </div>
            </div>
            <div className={styles.cart_product_quantity}>
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  className={styles.cart_product_quantity_button}
                  aria-expanded='false'
                >
                  <span className={styles.cart_product_quantity_amount}>
                    {item.quantity}
                  </span>
                  <svg
                    className={styles.cart_product_quantity_icon}
                    role='img'
                    viewBox='0 0 50 50'
                  >
                    <title id='acb99152-62fb-4229-9cfe-ccc97dfede95'>
                      Change quantity
                    </title>
                    <g>
                      <polygon points='25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 '></polygon>
                    </g>
                  </svg>
                </button>
                {open && (
                  <ul
                    className={styles.cart_product_quantity_list}
                    role='listbox'
                    aria-activedescendant='option-1'
                    onClick={handleAmountChange}
                  >
                    <li
                      className={styles.cart_product_quantity_list_item}
                      role='option'
                      aria-selected='true'
                      id='option-1'
                      value='1'
                      onClick={handleAmountChange}
                    >
                      1
                    </li>
                    <li
                      className={styles.cart_product_quantity_list_item}
                      role='option'
                      aria-selected='false'
                      id='option-2'
                      value='2'
                      onClick={handleAmountChange}
                    >
                      2
                    </li>
                    <li
                      className={styles.cart_product_quantity_list_item}
                      role='option'
                      aria-selected='false'
                      id='option-3'
                      value='3'
                      onClick={handleAmountChange}
                    >
                      3
                    </li>
                    <li
                      className={styles.cart_product_quantity_list_item}
                      role='option'
                      aria-selected='false'
                      id='option-4'
                      value='4'
                      onClick={handleAmountChange}
                    >
                      4
                    </li>
                    <li
                      className={styles.cart_product_quantity_list_item}
                      role='option'
                      aria-selected='false'
                      id='option-5'
                      value='5'
                      onClick={handleAmountChange}
                    >
                      5
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className={styles.cart_product_remove}>
              <button
                className={styles.cart_product_remove_button}
                onClick={() => onRemove(item)}
              >
                Remove
              </button>
            </div>
            <div>
              <span className={styles.cart_product_total}>
                £{item.price}.00
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.mobile_cart_product_wrapper}>
              <a className={styles.mobile_cart_product_name} href='/'>
                {item.title}
              </a>
              <div className={styles.mobile_cart_product_quantity}>
                <div>
                  <button
                    onClick={() => setOpen(!open)}
                    className={styles.mobile_cart_product_quantity_button}
                    aria-expanded='false'
                  >
                    <span className={styles.cart_product_quantity_amount}>
                      {item.quantity}
                    </span>
                    <svg
                      className={styles.mobile_cart_product_quantity_icon}
                      role='img'
                      viewBox='0 0 50 50'
                    >
                      <title id='acb99152-62fb-4229-9cfe-ccc97dfede95'>
                        Change quantity
                      </title>
                      <g>
                        <polygon points='25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 '></polygon>
                      </g>
                    </svg>
                  </button>
                  {open && (
                    <ul
                      className={styles.mobile_cart_product_quantity_list}
                      role='listbox'
                      aria-activedescendant='option-1'
                      onClick={handleAmountChange}
                    >
                      <li
                        className={
                          styles.mobile_cart_product_quantity_list_item
                        }
                        role='option'
                        aria-selected='true'
                        id='option-1'
                        value='1'
                        onClick={handleAmountChange}
                      >
                        1
                      </li>
                      <li
                        className={
                          styles.mobile_cart_product_quantity_list_item
                        }
                        role='option'
                        aria-selected='false'
                        id='option-2'
                        value='2'
                        onClick={handleAmountChange}
                      >
                        2
                      </li>
                      <li
                        className={
                          styles.mobile_cart_product_quantity_list_item
                        }
                        role='option'
                        aria-selected='false'
                        id='option-3'
                        value='3'
                        onClick={handleAmountChange}
                      >
                        3
                      </li>
                      <li
                        className={
                          styles.mobile_cart_product_quantity_list_item
                        }
                        role='option'
                        aria-selected='false'
                        id='option-4'
                        value='4'
                        onClick={handleAmountChange}
                      >
                        4
                      </li>
                      <li
                        className={
                          styles.mobile_cart_product_quantity_list_item
                        }
                        role='option'
                        aria-selected='false'
                        id='option-5'
                        value='5'
                        onClick={handleAmountChange}
                      >
                        5
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.mobile_cart_product_wrapper}>
              <div className={styles.mobile_cart_product_detail_wrapper}>
                <div className={styles.mobile_cart_product_size}>
                  <span>100 mL </span>
                </div>
                <div className={styles.mobile_cart_product_remove}>
                  <button
                    className={styles.mobile_cart_product_remove_button}
                    onClick={() => onRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div>
                <span className={styles.mobile_cart_product_total}>
                  £{item.price}.00
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </li>
  )
}

export default CartProduct
