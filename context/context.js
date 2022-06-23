import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)
  const [variant, setVariant] = useState('100 mL')

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id && item.variant === product.variant
    )
    // console.log('ITEM', item)
    // console.log('PRODUCT', product)
    setTotalPrice((prevPrice) => {
      let variantPrice =
        variant === '200 mL' ? product.price[1] : product.price[0]
      return prevPrice + variantPrice * quantity
    })
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
      })
      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, { ...product, variant: variant }])
    }
  }

  const toggleCartItemQuantity = (id, value) => {
    let foundProduct = cartItems.find((item) => item._id === id)
    let variantPrice =
      variant === '200 mL' ? foundProduct.price[1] : foundProduct.price[0]
    const newCartItems = cartItems.filter((item) => item._id !== id)
    setCartItems([...newCartItems, { ...foundProduct, quantity: value }])
    setTotalPrice(variantPrice * value)
    setTotalQuantities(value)
  }

  const onRemove = (product) => {
    let foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )
    setCartItems(newCartItems)
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        variant,
        setVariant,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
