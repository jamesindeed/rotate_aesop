import React from 'react'
import { client } from '../../lib/client'

const ProductDetails = ({ product }) => {
  console.log('product', product)
  return (
    <div>
      <p>Product Page Yay ^.^</p>
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
