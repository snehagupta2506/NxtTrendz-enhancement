import React, {useState} from 'react'
import CartContext from '../../context/CartContext'

import PaymentPopup from '../PaymentPopup'

import './index.css'

const CartSummary = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleCheckoutClick = () => {
    setIsPopupOpen(true)
  }
  ;<CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button
              type="button"
              className="checkout-button d-sm-none"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
          <button
            type="button"
            className="checkout-button d-lg-none"
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>
          {isPopupOpen && (
            <PaymentPopup
              totalItems={cartList.length}
              totalPrice={total}
              onClose={() => setIsPopupOpen(false)}
            />
          )}
        </>
      )
    }}
  </CartContext.Consumer>
}

export default CartSummary
