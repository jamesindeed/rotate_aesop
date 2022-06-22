import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import styles from '../../styles/Product.module.scss'
import useWindowSize from '../../utils/useWindowSize'
import { useStateContext } from '../../context/context'

const ProductDetails = ({ product }) => {
  const { width } = useWindowSize()
  const { onAdd, variant, setVariant } = useStateContext()

  const handleChange = (e) => {
    setVariant(e.target.value)
  }

  return (
    <div className={styles.product_container}>
      <div className={styles.product_wrapper}>
        {/* DETAILS */}
        <div className={styles.product_details_wrapper}>
          {width > 640 && (
            <nav className={styles.breadcrumbs}>
              <ul>
                <li>
                  <a>Skin</a>
                </li>
                <li>
                  <a>Cleanse</a>
                </li>
              </ul>
            </nav>
          )}

          <div className={styles.product_details}>
            {/* MOBILE INNER */}
            {width > 640 && width < 1024 && (
              <div className={styles.product_details_inner_mobile}>
                <header>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                </header>
              </div>
            )}
            <div className={styles.product_details_inner}>
              {(width < 640 || width >= 1025) && (
                <>
                  <header>
                    <h1>{product.title}</h1>
                  </header>
                  <div className={styles.product_details_description}>
                    <p>{product.description}</p>
                  </div>
                </>
              )}
              <div className={styles.product_details_details}>
                <dl>
                  <dt>Suited to</dt>
                  <dd>
                    <div>
                      <p>{product.suitedTo}</p>
                    </div>
                  </dd>
                  <dt>Skin feel</dt>
                  <dd>
                    <div>
                      <p>{product.skinFeel}</p>
                    </div>
                  </dd>
                  <dt>
                    <span>Key ingredients</span>
                    <button title='Key ingredients' type='button'>
                      <span role='status'></span>
                      <svg
                        width='23px'
                        height='23px'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <circle cx='12' cy='12' r='10' stroke-width='1.5' />
                        <line x1='12' y1='8' x2='12' y2='16' stroke-width='2' />
                        <line x1='8' y1='12' x2='16' y2='12' stroke-width='2' />
                      </svg>
                    </button>
                  </dt>
                  <dd>
                    <div>
                      <p>{product.keyIngredients.join(', ')}</p>
                    </div>
                  </dd>
                </dl>
              </div>
              <div className={styles.product_details_purchase}>
                <h4>Sizes</h4>
                <ul>
                  <li>
                    <label>
                      <input
                        value='1'
                        onChange={handleChange}
                        aria-checked='true'
                        type='radio'
                        name='radio'
                        defaultChecked
                      />
                      <span className={styles.product_radio}></span>
                      <span className={styles.product_size}>
                        {product.sizes[0]}
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        value='2'
                        onChange={handleChange}
                        aria-checked='true'
                        type='radio'
                        name='radio'
                      />
                      <span className={styles.product_radio}></span>
                      <span className={styles.product_size}>
                        {product.sizes[1]}
                      </span>
                    </label>
                  </li>
                </ul>
                <button
                  className={styles.product_add_cart}
                  onClick={() => onAdd(product, 1)}
                >
                  <span>Add to your cart — £{product.price}.00</span>
                </button>
                <div></div>
              </div>
              <div className={styles.product_details_upsell}>
                <div className={styles.product_details_upsell_inner}>
                  <a className={styles.upsell_link}>
                    <div className={styles.upsell_inner}>
                      <div className={styles.upsell_inner_details}>
                        <h4>
                          <span>Discover the kit</span>
                        </h4>
                        <div className={styles.upsell_inner_balance}>
                          <div>
                            <span>
                              Balance: Classic Skin
                              <br />
                              Care Kit
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.upsell_inner_image}>
                        <img src='https://www.aesop.com/u1nb1km7t5q7/2KHwfDgDrHM8SvFPvq7HPE/224b48799488195c167ba80364a2f06d/Aesop_Kits_Balance_Classic_Skin_Care_Kit_Large_1584x962px.png' />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className={styles.product_image}>
          {width < 640 && (
            <nav className={styles.breadcrumbs}>
              <ul>
                <li>
                  <a>Skin</a>
                </li>
                <li>
                  <a>Cleanse</a>
                </li>
              </ul>
            </nav>
          )}
          <div className={styles.product_image_inner}>
            <figure>
              <picture>
                <img
                  alt='In Two Minds Facial Cleanser in amber glass bottle '
                  src={
                    variant === '2'
                      ? urlFor(product.Images[1])
                      : urlFor(product.Images[0])
                  }
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const q = `*[_type == "product"] {
    slug {
      current
    }
  }
`

  const products = await client.fetch(q)

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const q = `*[_type == "product" && slug.current == '${slug}'][0]`

  const product = await client.fetch(q)

  return {
    props: { product },
  }
}

export default ProductDetails
