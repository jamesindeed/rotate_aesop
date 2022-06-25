import React, { createContext, useContext, useState } from 'react'
// @ts-ignore
const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)
  const [variant, setVariant] = useState('100 mL')

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems?.find(
      (item) => item._id === product._id && item.variant === product.variant
    )
    setTotalPrice((prevPrice) => {
      let variantPrice =
        variant === '200 mL' ? product.price[1] : product.price[0]
      return prevPrice + variantPrice * quantity
    })
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems?.map((cartProduct) => {
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

  const toggleCartItemQuantity = (id, value, itemVariant) => {
    // let index = cartItems?.indexOf((item) => item._id === id)

    let foundProduct = cartItems?.find(
      (item) => item._id === id && item.variant === itemVariant
    )

    let variantPrice =
      itemVariant === '200 mL' ? foundProduct.price[1] : foundProduct.price[0]
    let oppositeVariantPrice =
      itemVariant === '200 mL' ? foundProduct.price[0] : foundProduct.price[1]

    let oppositeVariant = cartItems?.find(
      (item) => item._id === id && item.variant !== itemVariant
    )

    setTotalPrice(
      oppositeVariant
        ? variantPrice * value + oppositeVariantPrice * oppositeVariant.quantity
        : variantPrice * value
    )

    // setTotalQuantities(value)
    setTotalQuantities(
      oppositeVariant ? oppositeVariant.quantity + value : value
    )

    const newCartItems = cartItems.filter((item) => item !== foundProduct)

    setCartItems([...newCartItems, { ...foundProduct, quantity: value }])
    // TODO: INSERTING BACK AT INDEX CAUSING AMOUNT DROP DOWN NOT TO CLOSE
    // const newProductAmount = foundProduct.push({ quantity: value })
    // const newProduct = newCartItems.splice(index, 0, newProductAmount)
    // setCartItems(newProduct)
  }

  const onRemove = (product) => {
    let foundProduct = cartItems?.find(
      (item) => item._id === product._id && item.variant === product.variant
    )
    const newCartItems = cartItems?.filter((item) => item !== foundProduct)

    let variantPrice =
      product.variant === '200 mL'
        ? foundProduct.price[1]
        : foundProduct.price[0]

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - variantPrice * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct?.quantity
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
