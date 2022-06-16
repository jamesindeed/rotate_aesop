import React from 'react';
// Cart Item
//  React Context

const CartTest = () => {
  // Get Cart items

  // Handle Checkout
  const handleCartCheckout = (e) => {
    e.preventDefault();
    // Check if user is logged in
    // If not, redirect to login page
    // If yes, redirect to checkout page
  };

  const handleCartOpen = (e) => {
    e.preventDefault();
  };

  let totalPrice = 0;
  //   let totalQuantity = 0;
  //   let cartItems = [];

  return (
    <div className='cart'>
      <div className='cart-labels'>
        <div className='cart-label-first'>Cart</div>
        <p>Size</p>
        <div className='cart-label-last'>
          <div>Quantity</div>
          <div className='x-cart' onClick={handleCartOpen}>
            X
          </div>
        </div>
      </div>
      {/* {productsInCart} */}
      <div className='cart-bottom'>
        <div className='bottom-first'>
          <div>Complimentary shipping on all orders.</div>
          <div>Shipping to the United States</div>
        </div>
        <div className='bottom-second'>
          <div className='sub-total'>
            <div className='text-sub'>Subtotal [Tax Excl.]</div>
            <div className='total-price'>${totalPrice}.00</div>
          </div>
          <button onClick={handleCartCheckout} className='checkout'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTest;
