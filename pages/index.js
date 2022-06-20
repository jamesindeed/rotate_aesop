import React from 'react'
import styles from '../styles/Main.module.scss'
import { client } from '../lib/client'

const Home = ({ products }) => {
  return (
    <div className={styles.main}>
      <h1>Rotate Aesop</h1>
      {products?.map((product) => (
        <a key={product._id} href={`/product/${product.slug.current}`}>
          <h3>[ {product.title} ]</h3>
        </a>
      ))}
    </div>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  const productQuery = '*[_type == "product"] | order(date desc)'
  const products = await client.fetch(productQuery)

  return {
    props: { products },
  }
}
